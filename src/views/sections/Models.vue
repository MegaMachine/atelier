<template>
  <section-wrap sectionName="models" sectionTitle="Моделі" sectionContainer="container">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-12">
        <app-filter-models :purpose="filter.purpose" :material="filter.material" :category="filter.category"
          @filter-result="takeFilterResult"></app-filter-models>
      </div>
      <div class="col-xl-8 col-lg-8 col-md-12 ">
        <div class="items">
        <div class="models__item__wrap" :key="item.id_model" v-for="(item) in viewModels">
          <div class="models__item">
            <div class="models__item__img">
              <img :src="item.photos[0]" :alt="item.model_name.ua">
            </div>
            <div class="models__item__desc">
              <div class="models__item__desc__name">
                <img :src="require('@/assets/img/item/dress.png')" alt="" class="item-icons">
                <p>{{item.model_name.ua}}</p>
              </div>
              <div class="models__item__desc__price">
                <p v-if="item.contingent === 1"><img :src="require('@/assets/img/filter/male3.png')" alt="" class="item-icons">Чоловічий</p>
                <p v-if="item.contingent === 2"><img :src="require('@/assets/img/filter/female3.png')" alt="" class="item-icons">Жіночий</p>
                <!-- <p>{{item.price}}
                  <span>grn</span>
                </p> -->
              </div>
              <div class="models__item__desc__size">
                <img :src="require('@/assets/img/item/measuring-tape.png')" alt="" class="item-icons">
                <span :key="size.id_size" v-for="size in item.size">{{size.size}}</span>
              </div>
              <div class="models__item__desc__detail">
                <router-link :to="{ name:'model-view', params:{ id : item.id_model } }">детальніше</router-link>
              </div>
            </div>
          </div>
        </div>
        </div>

        <paginate
          v-model="pagination.page"
          :page-count="pagination.pageQuantity"
          :click-handler="clickCallback"
          :page-range="3"
          :margin-pages="2"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :break-view-class="'break'"
          :break-view-link-class="'break-view-link-class'"
          :container-class="'pagination'"></paginate>
      </div>
    </div>
  </section-wrap>
</template>

<script>
  import models from "./../../data/models.js";
  import filter from "./../../data/filter.js";
  export default {
    name: 'models',
    data() {
      return {
        viewModels: null,
        models,
        filter,
        pagination:{
          pageView: 9,
          page:1,
          startIndex:0,
          pageQuantity:null,      
          endIndex:null,
        },
      }
    },
    methods: {
      takeFilterResult(obj) {
        this.viewModels = obj;
      },
      clickCallback(pagination){
        console.log(pagination)
      }
    },
    created() {
      this.viewModels = this.models;
      this.pagination.pageQuantity = models.length / this.pagination.pageView 
      this.endIndex = this.pagination.pageView - 1;
    }
  }

</script>

<style scoped lang="scss">
  @import './../../assets/scss/_variable.scss';

  .models {
    .items {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-bottom: 350px;

      @media screen and (max-width: 991px) {
        margin-top: 30px;
      }
    }

    .item-icons {
      width: 24px;
      height: 24px;
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

        .models__item__img {
          img {
            transform: translateY(-50%) translateX(-50%) scale(1.2);

            @media screen and (max-width: 576px) {
              position: static;
              transform: translateY(0%) translateX(0%) scale(1);
            }
          }
        }

        .models__item__desc {
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
