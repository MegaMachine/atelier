<template>
  <section-wrap sectionName="models" sectionTitle="Моделі" sectionContainer="container">
    <div class="row">
      <div class="col-md-3">
        <app-filter :purpose="filter.purpose" :material="filter.material" :category="filter.category" @filter-result="takeFilterResult"></app-filter>
      </div>
      <div class="col-md-8 items">
        <div class="models__item__wrap" :key="item.id_model" v-for="(item) in viewModels">
          <div class="models__item">
            <div class="models__item__img">
              <img :src="require('@/assets/img/models/1.png')" :alt="item.model_name.ua">
            </div>
            <div class="models__item__desc">
              <div class="models__item__desc__name">
                <img :src="require('@/assets/img/item/dress.png')" alt="" class="item-icons">
                <p>{{item.model_name.ua}}</p>
              </div>
              <div class="models__item__desc__price">
                <img :src="require('@/assets/img/item/wallet.png')" alt="" class="item-icons">
                <p>{{item.price}}
                  <span>grn</span>
                </p>
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
      }
    },
    methods: {
      takeFilterResult(obj) {
        this.viewModels = obj;
      },
    },
    created() {
      this.viewModels = this.models;
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
    }
    .item-icons{
      width: 24px;
      height:24px;
      margin-right: 10px;
    }
    &__item {
      width: 100%;
      // padding: 10px 10px 0px;
      position:absolute;
      
      &__wrap {
        width: 33%;
        // margin: 0 2.5% 5%;
        position: relative;
        height:300px;
      }

      &__img {
        width: 100%;
        position: relative;
        height: 300px;
        overflow: hidden;
        img {
          width: 100%;
          position : absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%) scale(1);
          transform-origin: center;
          transition: .5s transform;
        }
      }
      &__desc {
        padding: 10px 10px 30px;
        display: none;
        &>div{
          display:flex;
          align-items: center;
          margin-bottom: 10px;
          p{
            text-transform: uppercase;
            font-size: 14px;
            color:#1a1a1a;
             margin-bottom: 0px;
          }
        }
        &__name{
          margin-bottom: 5px;
          p{
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
            // span {
            //   color: $color-red;
            // }
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
            // background: linear-gradient(to right, #ff8486 37%, #ff9393 52%, #fff06d 87%);
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
        .models__item__img{
          img{
            transform: translateY(-50%) translateX(-50%) scale(1.2);
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