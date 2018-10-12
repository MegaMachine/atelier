<template>
  <section-wrap sectionName="cloth-view" sectionContainer="container">
    <div class="row">
      <div class="col-md-3">
        <div class="cloth-view__info">
          <div class="cloth-view__info__img">
            <img :src="require('@/assets/img/cloth/1.png')" alt="cloth">
          </div>
          <div class="cloth-view__info__name">
            <h2>{{cloth[0].material_name}}</h2>
          </div>
          <div class="cloth-view__info__desc">
            <p>{{cloth[0].description}}</p>
            <p>Ширина: <span>{{cloth[0].width}}</span></p>
            <p>Залишилось: <span>{{cloth[0].remain}}</span></p>
          </div>
          <div class="cloth-view__bot-block__price">
            <span>{{cloth[0].price}}grn</span>
          </div>
           <div class="cloth-view__models__item__size">
              <!-- <span :key="size" v-for="size in item.size">{{size.size}}</span> -->
              <label :key="index + '-size'" v-for="(size, index) in sizes">
                <input v-model="clothOptions.id_size" :value="size.id_size" name="good-size" type="radio">
                <span>{{size.size}}</span>
              </label>
            </div>
        </div>
        <div class="cloth-view__bot-block">
          <div class="cloth-view__bot-block__buttons">
            <button-wishlist :items="clothOptions"></button-wishlist>
            <button-car :items="clothOptions"></button-car>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="cloth-view__models">
          <div class="cloth-view__models__item" :key="index + '-model'" :value="item.id_good" v-for="(item,index) in goodsFilter">

            <div class="cloth-view__models__item__img">
              <img :src="require('@/assets/img/cloth/1.png')" alt="">
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
  import materials from './../../data/cloth.js';
  import models from './../../data/models.js';
  import filter from './../../data/filter.js';
  export default {
    name: "cloth-view",
    data() {
      return {
        cloth: null,
        materials,
        goods,
        sizes: filter.size,
        goodsFilter: null,
        clothOptions: {
          id_cloth: this.$route.params.id,
          id_size: null,
          id_model: null
        },
      }
    },
    created() {
      console.log(this.seizes)
      this.cloth = this._.filter(this.materials, {
        id_material:Number(this.$route.params.id)
      })
      this.goodsFilter = this._.filter(this.models, {
        id_material: [Number(this.$route.params.id)] // Des tyt zupynyvsya
      })
    },
    methods: {
      // choiceGood(event) {
      //   let eventTarget = event.currentTarget;
      //   let item = eventTarget.closest('.cloth-view__models__item');
      //   let inputSimulator = eventTarget.nextSibling;
      //   let size = document.querySelectorAll('.cloth-view__models__item__size span');
      //   size.forEach(function (item) {
      //     item.classList.remove('active')
      //   })
      //   this.clothOptions.id_good = Number(item.getAttribute('value'));
      //   inputSimulator.classList.add('active');
      //   console.log(this.clothOptions)
      // }
      // choiceGood(event) {
      //   let eventTarget = event.currentTarget;
      //   let item = eventTarget.closest('.cloth-view__models__item__size');
      //   let inputSimulator = eventTarget.nextSibling;
      //   let size = document.querySelectorAll('.cloth-view__models__item__size span');
      //   size.forEach(function (item) {
      //     item.classList.remove('active')
      //   })
      //   this.clothOptions.id_good = Number(item.getAttribute('value'));
      //   inputSimulator.classList.add('active');
      //   console.log(this.clothOptions)
      // } 
    }
  }
</script>

<style lang="scss" scoped>
  @import './../../assets/scss/_variable.scss';

  .cloth-view {
    &__info {
      &__img {
        width: 100%;
        margin-bottom: 20px;

        img {
          width: 100%;
        }
      }

      &__name {
        h2 {
           margin-bottom: 5px;
          font-size: 16px;
          color: #1a1a1a;
          word-wrap: break-word;
        }
      }

      &__desc {
      p,a{
        margin-bottom: 5px;
        font-size: 14px;
        color: #1a1a1a;
        word-wrap: break-word;
        span{
          text-transform: uppercase;
        }
        &:last-child{
          margin: 20px 0;
        }
      }
      }
    }

    &__models {
      &__item {
        &__img {
          img {}
        }

        &__size {
          width: 100%;

          label {
            position: relative;
            margin-right: 15px;

            span {
              font-family: $font-a;
              font-size: 1.5rem;
              font-weight: normal;

              &.active {
                color: $color-red;
              }
            }

            input {
              opacity: 0;
              position: absolute;
              cursor: pointer;
              width: 100%;
              height: 100%;
              &:checked + span{
                color: $color-red;
              }
            }
          }
        }
      }
    }
  }
</style>