<template>
  <section-wrap 
    sectionName="model-view">
    <div class="row">
      <div class="col-4">
        <div class="model-view__info">
          <div class="model-view__info__img"><img :src="require('@/assets/img/models/1.png')" alt="name"></div>
          <div class="model-view__info__desc"></div>
          <div class="model-view__info__buttons"></div>
        </div>
      </div>
      <div class="col-8">
         <div class="model-view__cloth">
           <div class="model-view__cloth__item" 
            :key = "index" 
            v-for="(param,index) in cloth">
             <img :src="require('@/assets/img/cloth/1.png')" alt="">
             <span>{{param.material_name}}</span>
           </div>
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
import goods from './../../data/goods.js';
import cloths from './../../data/cloth.js';
  export default {
    name:"model-view",
    data(){
      return{
        good:null,
        cloth: [],
        goods,
      }
    },
    created(){
      let that = this;
      this.good = _.find(goods,{id_good:this.$route.params.id})
      this.good.material.map(function(item){
        that.cloth.push(_.find(cloths, {id_material: item.id_material}))  
      })
      console.log(this.cloth)
    },
  }
</script>

<style lang="scss" scoped>
@import './../../assets/scss/_variable.scss';
  .model-view{
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
    width: 100%;
    &__item{
      width: 33%;
      position: relative;
      cursor: pointer;
      img{
        width: 100%;
        transition: .5s opacity;
      }
      span{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
        color:#1a1a1a;
        font-family: $font-a;
        font-size: 20px;
        opacity: 0;
        
      }
      &.active,&:hover{
        img{
          transition:opacity .5s;
          opacity: .5;
        }
        span{
          transition:opacity .5s;
          opacity: 1;
        }
      }

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