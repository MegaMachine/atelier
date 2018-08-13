<template>
  <section-wrap sectionName="finished-goods" sectionTitle="Готові Вироби" sectionContainer="container">
    <div class="row">
      <div class="col-md-3">
        <app-filter
        :size="filter.size"
        :material="filter.material"
        :category="filter.category"
        @filter-result="takeFilterResult"></app-filter>
      </div>
      <div class="col-md-8 items">
        <div class="finished-goods__item__wrap" :key="item.id_good" v-for="(item) in viewGoods">
          <div class="finished-goods__item">
            <div class="finished-goods__item__img">
              <img :src="item.photos[0]" :alt="item.good_name.ua">
            </div>
            <div class="finished-goods__item__desc">
              <div class="finished-goods__item__desc__name">
                <p>{{item.good_name.ua}}</p>
              </div>
              <div class="finished-goods__item__desc__price">
                <h2>{{item.price}}
                  <span>grn</span>
                </h2>
              </div>
              <div class="finished-goods__item__desc__text">
                <p>{{item.description}}</p>
              </div>
              <div class="finished-goods__item__desc__size">
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
        viewGoods:null,
        goods,
        filter,
      }
    },
    methods:{
      takeFilterResult(obj){
        this.viewGoods = obj;
      }
    },
    created(){     
      this.viewGoods = this.goods;
    }
  }
</script>

<style scoped lang="scss">
  @import './../../assets/scss/_variable.scss';
  .finished-goods {

    .items {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 350px;
    }

    &__item {
      &__wrap {
        width: 28%;
        margin: 0 2.5% 5%;
        position: relative;
      }
      padding: 10px 10px 0px;
      &__img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      &__desc {
        padding: 10px;
        &__price {
          h2 {
            font-size: 16px;
            font-weight: bold;
            span {}
          }
        }
        &__text {
          p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        &__size {
          display: none;
          span {
            padding: 0 10px;
          }
        }
        &__detail {
          display: none;
          button {
            width: 100%;
            color: white;
            border: none;
            background: linear-gradient(to right, #ff8486 37%, #ff9393 52%, #fff06d 87%);
          }
        }
      }
      &:hover {
        z-index: 999;
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, .3);
        background-color: #f4f0e8;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        .finished-goods__item__desc {
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
            button {}
          }
        }
      }
    }
  }
</style>