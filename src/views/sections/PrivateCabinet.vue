<template>
<section-wrap 
  sectionName = "private-cabinet"
  sectionTitle = "Персональний Кабінет">
    <div class="row flex-box">
      <div class="col-12 col-md-4">
        <div class="private-cabinet__block">
          <div class="private-cabinet__block__title">
            <img src="./../../assets/img/private-cabinet/order.png" alt="">
            <h2>МОЇ ЗАМОВЛЕННЯ</h2>
          </div>
          <div class="private-cabinet__block__content__item">

          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="private-cabinet__block">
          <div class="private-cabinet__block__title">
            <img src="./../../assets/img/private-cabinet/best.png" alt="">
            <h2>УЛЮБЛЕНІ</h2>
          </div>
          <div class="private-cabinet__block__content">
              <div :key="index" class="private-cabinet__block__content__item" v-for="(item,index) in viewCar">
                <div><img :src="require('@/assets/img/models/1.png')" alt=""></div>
                <div>
                  <h2>{{item.good_name.ua}}</h2>
                  <p>{{item}}</p>
                  <span>{{item}}</span>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="private-cabinet__block">
          <div class="private-cabinet__block__title">
            <img src="./../../assets/img/private-cabinet/puzzle.png" alt="">
            <h2>МОЇ КАПСУЛИ</h2>
          </div>
          <div class="private-cabinet__block__content__item">
            
          </div>
        </div>
      </div>
    </div>
</section-wrap>
</template>

<script>
  import goods from './../../data/goods.js';
  export default {
    name:'private-cabinet',
    data(){
      return{
        goods,
        car:[],
        wishlist:[],
        viewCar:null,
        viewWishlist:null,
      }
    },
    created(){
      this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
      this.car = JSON.parse(localStorage.getItem('car'));
      this.filterCar();
      console.log(this.goods,this.viewCar)
    },
    methods:{
      filterCar(){
        let that = this;
        this.car.map(function(index){
          
        })
        
        var findObj = {
          id_good:that.car.id_good,
          material:[
            {
              id_material:that.car.id_cloth
            }
          ],
          size:[
            {
              id_size:that.car.id_size
            }
          ]
        }
          
       that.viewCar = _.filter(that.goods,{id_good:this.car[0].id_good});
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './../../assets/scss/_variable.scss';
.flex-box{
  justify-content: space-between;
}
.private-cabinet{
  background: url('./../../assets/img/home/home-background.jpg') fixed;
  &__block{
    padding: 30px 15px;
    background: rgba(255,255,255,.3);
    box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
    &__title{
      text-align: center;
      img{
        margin-bottom: 15px;
      }
      h2{
        font-family: $font-a;
        font-size: 1.5rem;
      }
    }
  }
}
</style>