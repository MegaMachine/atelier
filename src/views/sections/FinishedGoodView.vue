<template>
  <section-wrap 
    sectionName="finished-good-view"
    sectionContainer="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="finished-good-view__info">
          <div>
            <carousel 
              class="finished-good-view__info__img"
              :navigationEnabled="true"
              :perPage="1"
              :paginationEnabled="false">
              <slide :key="item" v-for="item in [1,2,3]">
                <img :src="require('@/assets/img/models/1.png')" :alt="good.good_name.ua">
              </slide>
              <p></p>
            </carousel>
            <div class="finished-good-view__info__text">
              <h2>{{good.good_name.ua}}</h2>
              <div class="finished-good-view__info__size">
                <label :key="size.id_size" v-for="size in good.size">
                  <input v-model="goodOptions.id_size" :value="size.id_size" name="good-size" type="radio">
                  <span>{{size.size}}</span>
                  </label>
              </div>
            </div>         
          </div>
          <div>
            <div class="finished-good-view__info__desc">
              <p>{{good.description}}</p>
              </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 right-side">
         <div class="finished-good-view__cloth">
           <div class="finished-good-view__cloth__img">
              <img :src="require('@/assets/img/models/1.png')" :alt="good.good_name.ua">
            </div>
            <div class="finished-good-view__info__desc">
              <p>{{good.description}}</p>
              <span>{{good.price}} грн</span>
              </div>
        </div>
        <div class="finished-good-view__buttons">
          <!-- <button-wishlist :items="clothOptions"></button-wishlist> -->
          <button-car :items="goodOptions"></button-car>
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
import goods from './../../data/goods.js';
import cloths from './../../data/cloth.js';
  export default {
    name:"finished-good-view",
    data(){
      return{
        good:null,
        cloth: [],
        goods,
        goodOptions:{
          id_model:null,
          id_size:null,
          id_cloth:null,
          id_good:Number(this.$route.params.id)
        }
      }
    },
    created(){
      var that = this;
      this.good = _.find(goods,{ id_good:Number(this.$route.params.id) });
      this.good.material.map(function(item){
        that.cloth.push(_.find(cloths, {id_material: item.id_material}))  
      });
      this.goodOptions.id_model = this.good.id_model;
    }
  }
</script>

<style lang="scss" scoped>
@import './../../assets/scss/_variable.scss';
.finished-good-view{
  &__info{
    display: flex;
    width: 100%;
    justify-content: space-between;
    &>div{
      width: 48%;
    }
    &__img{
      img{
        width: 100%;
      }
    }
    &__text{

    }
    &__size{
      width: 100%;      
      label{
        position: relative;
        margin-right: 15px;
        
        span{
          font-family: $font-a;
          font-size: 1.5rem;
          font-weight: normal;
        }
        input{
          opacity: 0;
          position: absolute;
          cursor: pointer;
          width: 100%;
          height: 100%;
          &:checked ~ span{
            color:$color-red;
          }
        }
      }
    }
    &__desc{
      p{
        word-wrap: break-word;
      }
    }
  }
  &__cloth{
    display:flex;
    &>div{
      width: 48%;
    }
  }
  &__buttons{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    &__price{
      
    }
    &__like{
      margin-right: 20px;
      span{
        display: block;
        width: 35px;
        height: 35px;
        cursor: pointer;
        background: url('./../../assets/img/like.png') no-repeat center;
      }
    }
    &__order{
      width: 200px;
      button{
        height: 35px;
        width: 100%;
        display: block;
        color:$color-white;
        text-transform: uppercase;
        border: none;
        background: linear-gradient(to right, #ff8486 37%, #ff9393 52%, #fff06d 87%);
      }
    }    
  }
  .right-side{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .VueCarousel{
    padding-top:0px;
  }
}
</style>