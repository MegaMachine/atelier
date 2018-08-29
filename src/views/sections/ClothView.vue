<template>
  <section-wrap 
    sectionName="cloth-view"
    sectionContainer="container">
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
          </div>
        </div>
        <div class="cloth-view__bot-block">
          <div class="cloth-view__bot-block__price">
            <span>{{cloth[0].price}}grn</span>
          </div>
          <div class="cloth-view__bot-block__buttons">
            <button-wishlist :items="clothOptions"></button-wishlist>
            <button-car :items="clothOptions"></button-car>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="cloth-view__models">
          <div class="cloth-view__models__item" 
            :key="item.id_good"
            :value="item.id_good" 
            v-for="item in goodsFilter">
            <div class="cloth-view__models__item__img">
              <img :src="require('@/assets/img/models/1.png')" alt="">
            </div>
            <div class="cloth-view__models__item__size">
              <!-- <span :key="size" v-for="size in item.size">{{size.size}}</span> -->
               <label :key="size.id_size" v-for="size in item.size">
                  <input v-model="clothOptions.id_size" :value="size.id_size" name="good-size" type="radio" @click="choiceGood">
                  <span>{{size.size}}</span>
                  </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
import materials from './../../data/cloth.js';
import goods from './../../data/goods.js';
  export default {
    name:"cloth-view",
    data(){
      return{
        cloth:null,
        materials,
        goods,
        goodsFilter:null,
        clothOptions:{
          id_cloth:this.$route.params.id,
          id_size:null,
          id_good:null
        },
      }
    },
    created(){
      this.cloth = this._.filter( this.materials,{id_material:this.$route.params.id})
      this.goodsFilter = this._.filter( this.goods,{ material:[{id_material:this.$route.params.id}]})
    },
    methods:{
      choiceGood(event){
        let eventTarget = event.currentTarget;
        let item = eventTarget.closest('.cloth-view__models__item');
        let inputSimulator = eventTarget.nextSibling;
        let size = document.querySelectorAll('.cloth-view__models__item__size span');
        size.forEach(function(item){
          item.classList.remove('active')
        })
        this.clothOptions.id_good = Number(item.getAttribute('value'));
        inputSimulator.classList.add('active');
        console.log(this.clothOptions)
      },
      // getCreateStorage(storageName){
      //   var items = [];
      //   var getItems = localStorage.getItem(String(storageName))
      //   items = JSON.parse(getItems);
      //   console.log(items)
      //   items.push(JSON.stringify(this.clothOptions));
      //   localStorage.setItem(String(storageName), items);
      // },
      // putIntoCart(){
      //   this.getCreateStorage('cart');
      // },
      // putIntoWishlist(){
      //   this.getCreateStorage('wishlist');
      // }
    }
  }
</script>

<style lang="scss" scoped>
@import './../../assets/scss/_variable.scss';
.cloth-view{
  &__info{
    &__img{
      width: 100%;
      margin-bottom: 20px;
      img{
        width: 100%;
      }
    }
    &__name{
      h2{
        color:$color-red;
        font-size: 24px;
      }
    }
    &__desc{
      p{
        color:$color-black-page-title;
        word-break: break-all;
        font-size: 16px;
      }
    }
  }
  &__models{
    &__item{
      &__img{
        img{

        }
      }
      &__size{
        width: 100%;      
      &>label{
        position: relative;
        margin-right: 15px;
        
        span{
          font-family: $font-a;
          font-size: 1.5rem;
          font-weight: normal;
          &.active{
            color:$color-red;
          }
        }
        input{
          opacity: 0;
          position: absolute;
          cursor: pointer;
          width: 100%;
          height: 100%;
         
        }
      }
      }
    }
  }
}
</style>