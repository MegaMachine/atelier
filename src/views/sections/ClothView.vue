<template>
  <section-wrap sectionName="cloth-view" sectionContainer="container">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-12">
        <div class="cloth-view__info">
          <carousel class="cloth-view__info__img" :navigationEnabled="true" :perPage="1" :paginationEnabled="false">
            <slide :key="item" v-for="item in [1,2,3]">
              <img :src="require('@/assets/img/cloth/1.png')">
            </slide>
          </carousel>
          <div class="cloth-view__info__desc">
            <h2>Матеріал</h2>
            <p>{{cloth[0].material_name}}</p>
            <p>Ширина: <span>{{cloth[0].width}}</span></p>
            <p>Залишилось: <span>{{cloth[0].remain}}</span></p>
            <p>Ціна: {{cloth[0].price}} грн</p>
            <p>{{cloth[0].description}}</p>
            <h2>Одяг</h2>
            <p>Назва: <span>{{model.model_name.ua}}</span></p>
            <p>Стать: <span v-if="model.contingent === 1">Чоловічий</span> <span v-if="model.contingent === 2">Жіночий</span></p>
            <p>Витрати тканин: <span>{{model.textile_spending}}</span> метри</p>
            <p>Підкладка: <span v-if="model.lining === true">З підклаткую</span><span v-if="model.lining === false">Без
                підклатки</span></p>
            <a :href="model.burda_link" target="_blank">Посилання на <img src="@/assets/img/burda.png" alt=""></a>
            <p>{{model.description}}</p>
          </div>
          <div class="cloth-view__info__size">
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
      <div class="col-xl-8 col-lg-8 col-md-12">
        <div class="cloth-view__models">
          <div class="cloth-view__models__item" @click="choiceModel" :class="{ active : item.id_model == model.id_model}"
            :key="index + '-model'" :data-value="item.id_model" :ref="'model' + item.id_model" v-for="(item,index) in modelsFilter">

            <div class="cloth-view__models__item__img">
              <img :src="require('@/assets/img/cloth/1.png')" alt="">
              <span>{{item.model_name.ua}}</span>
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
        models,
        sizes: filter.size,
        modelsFilter: null,
        model: null,
        clothOptions: {
          id_cloth: this.$route.params.id,
          id_size: null,
          id_model: null
        },
      }
    },
    created() {
      this.cloth = this._.filter(this.materials, {
        id_material: Number(this.$route.params.id)
      })
      this.modelsFilter = this._.filter(this.models, {
        id_material: [Number(this.$route.params.id)] // Des tyt zupynyvsya
      })
      this.model = this.models[0];
    },
    methods: {
      // choiceModel(event) {
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
      choiceModel(event) {
        let target = event.currentTarget;
        let value = Number(target.dataset.value);
        this.model = this._.find(this.models, {
          id_model: value
        });
      }
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

      &__desc {
        img {
          width: 100px;
          margin-left: 15px;
        }

        h2 {
          margin-bottom: 5px;
          margin-top: 20px;
          font-size: 24px;
          color: #1a1a1a;
          word-wrap: break-word;
        }

        p,
        a {
          margin-bottom: 5px;
          font-size: 14px;
          color: #1a1a1a;
          word-wrap: break-word;

          span {
            text-transform: uppercase;
          }

          &:last-child {
            margin: 20px 0;
          }
        }
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

            &:checked+span {
              color: $color-red;
            }
          }
        }
      }
    }
    &__bot-block__buttons{
       display: flex;
      align-items: center;

    }
    &__models {
      display: flex;
      width: 100%;
      flex-wrap: wrap;

      @media screen and (max-width: 991px) {
        margin-top: 30px;
      }

      &__item {
        width: 33%;
        position: relative;
        cursor: pointer;

        @media screen and (max-width: 450px) {
          width: 50%;
        }

        img {
          width: 100%;
          transition: .5s opacity;
        }

        span {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          text-align: center;
          color: #1a1a1a;
          font-family: $font-a;
          font-size: 16px;
          opacity: 0;
          width: 90%;
        }

        &.active,
        &:hover {
          img {
            transition: opacity .5s;
            opacity: .5;
          }

          span {
            transition: opacity .5s;
            opacity: 1;
          }
        }

      }
    }

    // &__models {
    //   &__item {
    //     &__img {
    //       img {}
    //     }

    //     &__size {
    //       width: 100%;

    //       label {
    //         position: relative;
    //         margin-right: 15px;

    //         span {
    //           font-family: $font-a;
    //           font-size: 1.5rem;
    //           font-weight: normal;

    //           &.active {
    //             color: $color-red;
    //           }
    //         }

    //         input {
    //           opacity: 0;
    //           position: absolute;
    //           cursor: pointer;
    //           width: 100%;
    //           height: 100%;

    //           &:checked+span {
    //             color: $color-red;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }

</style>
