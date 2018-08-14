<template>
  <section-wrap 
    sectionName="finished-good-view"
    sectionContainer="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="finished-good-view__info">
          <div>
            <div class="finished-good-view__info__img">
              <img :src="require('@/assets/img/models/1.png')" :alt="good[0].good_name.ua">
              <p></p>
            </div>
            <div class="finished-good-view__info__text">
              <h2>{{good[0].good_name.ua}}</h2>
              <div class="finished-good-view__info__size">
                <label :key="size.id_size" v-for="size in good[0].size">
                  <input v-model="goodOptions.size" :value="size.id_size" name="good-size" type="radio">
                  <span>{{size.size}}</span>
                  </label>
              </div>
            </div>         
          </div>
          <div>
            <div class="finished-good-view__info__desc">
              <p>{{good[0].description}}</p>
              </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 right-side">
         <div class="finished-good-view__cloth">
           <div class="finished-good-view__cloth__img">
              <img :src="require('@/assets/img/models/1.png')" :alt="good[0].good_name.ua">
            </div>
            <div class="finished-good-view__info__desc">
              <p>{{good[0].description}}</p>
              <span>{{good[0].price}} грн</span>
              </div>
        </div>
        <div class="finished-good-view__buttons">
          <div class="finished-good-view__buttons__like"><span></span></div>
          <div class="finished-good-view__buttons__order"><button @click="putCart">замовити</button></div>
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
import goods from './../../data/goods.js'
  export default {
    name:"finished-good-view",
    data(){
      return{
        good:null,
        goods,
        goodOptions:{
          id_good:this.$route.params.id,
          size:null,
        }
      }
    },
    created(){
      this.good = _.filter(goods,{id_good:this.$route.params.id})
    },
    methods:{
      putCart(){
        var good = [];
        good = JSON.parse(localStorage.getItem('goodCart'));
        good.push(JSON.stringify(this.goodOptions));
        localStorage.setItem('goodCart', good);
        // console.log(this.goodOptions);
      }
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
}
</style>