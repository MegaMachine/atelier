<template>
  <section-wrap sectionName="finished-goods" sectionTitle="Готові Вироби" sectionContainer="container">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-12">
        <app-filter-goods 
        :size="filter.size" 
        :material="filter.material" @filter-result="takeFilterResult"></app-filter-goods>
      </div>
      <div class="col-xl-8 col-lg-8 col-md-12 items">
        <div class="finished-goods__item__wrap" :key="index + '-good'" v-for="(item,index) in viewGoods">
          <div class="finished-goods__item" @mouseover="hoverItemPadding">
            <div class="finished-goods__item__img">
              <img :src="require('@/assets/img/models/1.png')" :alt="item.good_name.ua">
            </div>
            <div class="finished-goods__item__desc">
              <div class="finished-goods__item__desc__name">
                <img :src="require('@/assets/img/item/dress.png')" alt="" class="item-icons">
                <p>{{item.good_name.ua}}</p>
              </div>
              <div class="finished-goods__item__desc__price">
                <img :src="require('@/assets/img/item/wallet.png')" alt="" class="item-icons">
                <p>{{item.price}}
                  <span>grn</span>
                </p>
              </div>
              <!-- <div class="finished-goods__item__desc__text">
                <p>{{item.description}}</p>
              </div> -->
              <div class="finished-goods__item__desc__size">
                <img :src="require('@/assets/img/item/measuring-tape.png')" alt="" class="item-icons">
                <span :key="size.id_size" v-for="size in item.size">{{size.size}}</span>
              </div>
              <div class="finished-goods__item__desc__detail">
                <router-link :to="{ name:'finished-good-view', params:{ id : item.id_good } }">детальніше</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
  import goods from "./../../data/goods.js";
  import filter from "./../../data/filter.js";
  export default {
    name: 'finished-goods',
    data() {
      return {
        viewGoods: null,
        goods,
        filter,
      }
    },
    methods: {
      takeFilterResult(obj) {
        this.viewGoods = obj;
      },
      hoverItemPadding(item){
        // console.log(item);
      }
    },
    created() {
      this.viewGoods = this.goods;
    }
  }
</script>

<style scoped lang="scss">
  @import './../../assets/scss/_variable.scss';
  .finished-goods {
    .items {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-bottom: 350px;
      @media screen and (max-width: 991px) {
        margin-top: 30px;
      }
    }
    .item-icons{
      width: 24px;
      height:24px;
      margin-right: 10px;
    }
     &__item {
      width: 100%;
      position: absolute;

      @media screen and (max-width: 768px) {
        position: static;
      }

      &__wrap {
        width: 33%;
        position: relative;
        height: 300px;

        @media screen and (max-width: 768px) {
          height: auto;
          width: 50%;
          margin-bottom: 20px;
        }

        @media screen and (max-width:450px) {
          width: 100%;
        }
      }

      &__img {
        width: 100%;
        position: relative;
        height: 300px;
        overflow: hidden;

        @media screen and (max-width: 576px) {
          height: auto;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%) scale(1);
          transform-origin: center;
          transition: .5s transform;

          @media screen and (max-width: 576px) {
            position: static;
            transform: translateY(0%) translateX(0%) scale(1);
          }
        }
      }

      &__desc {
        padding: 10px 10px 30px;
        display: none;

        @media screen and (max-width: 768px) {
          display: block
        }

        &>div {
          display: flex;
          align-items: center;
          margin-bottom: 10px;

          p {
            text-transform: uppercase;
            font-size: 14px;
            color: #1a1a1a;
            margin-bottom: 0px;
          }
        }

        &__name {
          margin-bottom: 5px;

          p {
            margin-bottom: 0px;
            text-transform: uppercase;
            font-size: 16px;
          }
        }

        &__price {
          p {
            font-size: 20px;
            color: $color-red;
            text-transform: uppercase;
          }
        }

        &__text {
          p {
            white-space: nowrap;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        &__size {
          display: none;

          span {
            padding: 0 10px 0 0;
          }
        }

        &__detail {
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          margin-bottom: 0px !important;

          a {
            display: block;
            width: 100%;
            color: white;
            text-transform: uppercase;
            text-align: center;
            background: #1a1a1a;
          }
        }
      }

      &:hover {
        z-index: 1;
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, .3);
        background-color: #f4f0e8;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;

        @media screen and (max-width: 768px) {
          position: static;
        }

        .finished-goods__item__img {
          img {
            transform: translateY(-50%) translateX(-50%) scale(1.2);

            @media screen and (max-width: 576px) {
              position: static;
              transform: translateY(0%) translateX(0%) scale(1);
            }
          }
        }

        .finished-goods__item__desc {
          display: block;

          &__text {
            p {
              white-space: normal;
              overflow: visible;
            }
          }

          &__size {
            display: block;

            span {}
          }

          &__detail {
            display: block;
          }
        }
      }
    }
  }
</style>