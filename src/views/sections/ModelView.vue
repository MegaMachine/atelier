<template>
  <section-wrap sectionName="model-view">
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-12">
        <div class="model-view__info">
          <carousel class="model-view__info__img" :navigationEnabled="true" :perPage="1" :paginationEnabled="false">
            <slide :key="item" v-for="item in [1,2,3]">
              <img :src="require('@/assets/img/models/1.png')">
            </slide>
          </carousel>
          <div class="model-view__info__desc">
            <p>Назва: <span>{{model.model_name.ua}}</span></p>
            <p>Тканина: <span>{{material}}</span></p>
            <p>Стать: <span v-if="model.contingent === 1">Чоловічий</span> <span v-if="model.contingent === 2">Жіночий</span></p>
            <p>Витрати тканин: <span>{{model.textile_spending}}</span> метри</p>
            <p>Підкладка: <span v-if="model.lining === true">З підклаткую</span><span v-if="model.lining === false">Без
                підклатки</span></p>
            <a :href="model.burda_link" target="_blank">Посилання на <img src="@/assets/img/burda.png" alt=""></a>
            <p>{{model.description}}</p>
          </div>
          <div class="model-view__info__size">
            <label :key="size.id_size" v-for="size in filter.size">
              <input v-model="modelOptions.id_size" :value="size.id_size" name="model-size" type="radio">
              <span>{{size.size}}</span>
            </label>
          </div>
          <div class="model-view__info__buttons">
            <button-wishlist :items="modelOptions"></button-wishlist>
            <button-car :items="modelOptions"></button-car>
          </div>
        </div>
      </div>
      <div class="col-xl-8 col-lg-8 col-md-12">
        <div class="model-view__cloth">
          <div class="model-view__cloth__item" :class="{active : index === 0}" :key="index" :value="param.id_material"
            @click="getChoiceCloth" v-for="(param,index) in cloth">
            <img :src="require('@/assets/img/cloth/1.png')" alt="">
            <span>{{param.material_name}}</span>
          </div>
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
import models from "./../../data/models.js";
import cloths from "./../../data/cloth.js";
import filter from "./../../data/filter.js";

export default {
  name: "model-view",
  data() {
    return {
      model: null,
      cloth: [],
      filter,
      material: null,
      modelOptions: {
        id_model: Number(this.$route.params.id),
        id_size: null,
        id_cloth: null
        // id_good:true
      }
    };
  },
  created() {
    let that = this;
    this.model = _.find(models, {
      id_model: Number(this.$route.params.id)
    });
    this.model.id_material.forEach(function(item) {
      that.cloth.push(
        _.find(cloths, {
          id_material: item
        })
      );
    });
    this.modelOptions.id_cloth = cloths[0].id_material;
    this.material = cloths[0].material_name;
  },
  methods: {
    getChoiceCloth(event) {
      let item = event.currentTarget;
      let items = document.querySelectorAll(".model-view__cloth__item");
      this.modelOptions.id_cloth = Number(item.getAttribute("value"));
      let findMaterial = _.find(cloths, {
        id_material: this.modelOptions.id_cloth
      });
      this.material = findMaterial.material_name;
      items.forEach(element => {
        element.classList.remove("active");
      });
      item.classList.add("active");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/scss/_variable.scss";

.model-view {
  &__info {
    width: 100%;

    &__img {
      width: 100%;
      text-align: center;
      margin-bottom: 30px;

      img {
        width: 80%;
      }
    }

    &__text {
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
        }

        input {
          opacity: 0;
          position: absolute;
          cursor: pointer;
          width: 100%;
          height: 100%;

          &:checked ~ span {
            color: $color-red;
          }
        }
      }
    }

    &__desc {
      img {
        width: 100px;
        margin-left: 15px;
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

    &__buttons {
      display: flex;
      align-items: center;

      &__price {
      }

      &__like {
        margin-right: 20px;

        span {
          display: block;
          width: 35px;
          height: 35px;
          cursor: pointer;
          background: url("./../../assets/img/like.png") no-repeat center;
        }
      }

      &__order {
        width: 200px;

        button {
          height: 35px;
          width: 100%;
          display: block;
          color: $color-white;
          text-transform: uppercase;
          border: none;
          background: linear-gradient(
            to right,
            #ff8486 37%,
            #ff9393 52%,
            #fff06d 87%
          );
        }
      }
    }
  }

  &__cloth {
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
        transition: 0.5s opacity;
      }

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
        color: #1a1a1a;
        font-family: $font-a;
        font-size: 20px;
        opacity: 0;
      }

      &.active,
      &:hover {
        img {
          transition: opacity 0.5s;
          opacity: 0.5;
        }

        span {
          transition: opacity 0.5s;
          opacity: 1;
        }
      }
    }
  }

  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .VueCarousel {
    padding-top: 0px;
  }
}
</style>
