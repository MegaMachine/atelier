<template>
 <section-wrap sectionName="cloth" sectionTitle="Тканини" sectionContainer="container">
    <div class="row">
      <div class="col-md-3">
        <!-- <cloth-filter
        :size="filter.size"
        :material="filter.material"
        :category="filter.category"
        @filter-result="takeFilterResult"></cloth-filter> -->
      </div>
      <div class="col-md-8 items">
        <div class="cloth__item__wrap" :key="item.id_material" v-for="item in materials">
          <div class="cloth__item">
            <div class="cloth__item__img">
              <img :src="require('@/assets/img/cloth/1.png')" alt="model">
            </div>
            <div class="cloth__item__desc">
              <div class="cloth__item__desc__name">
                <p>{{item.material_name}}</p>
              </div>
              <div class="cloth__item__desc__price">
                <h2>{{item.price}}
                  <span>grn</span>
                </h2>
              </div>
              <div class="cloth__item__desc__text">
                <p>{{item.description}}</p>
              </div>
              <div class="cloth__item__desc__detail">
                <router-link tag="a" :to="{ name:'cloth-view', params:{ id : item.id_material } }">детальніше</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
import materials from './../../data/cloth.js';
  export default {
    name:'cloth',
    data(){
      return{
        materials,
      }
    },
    created(){
      console.log(this.materials);
    }
  }
</script>

<style lang="scss" scoped>
@import '../../assets/scss/_variable.scss';
  .cloth {
    .items {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-bottom: 350px;
    }

    &__item {
      width: 100%;
      &__wrap {
        width: 45%;
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
        padding: 10px 10px 30px;
        &__name{
          p{
            margin-bottom: 5px;
          }
        }
        &__price {
          h2 {
            font-size: 20px;
            color: $color-red;
            text-transform: uppercase;
            span {
              color: $color-red;
            }
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
            padding: 0 10px;
          }
        }
        &__detail {
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          a {
            display: block;
            width: 100%;
            color: white;
            text-transform: uppercase;
            text-align: center;
            background: linear-gradient(to right, #ff8486 37%, #ff9393 52%, #fff06d 87%);
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
        .cloth__item__desc {
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