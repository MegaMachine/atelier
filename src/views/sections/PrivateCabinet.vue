<template>
  <section-wrap sectionName="private-cabinet" sectionTitle="Персональний Кабінет">
    <div class="row flex-box">
      <div class="col-12 col-md-4">
        <div class="private-cabinet__block">
          <div class="private-cabinet__block__title">
            <img src="./../../assets/img/private-cabinet/order.png" alt="">
            <h2>МОЇ ЗАМОВЛЕННЯ</h2>
          </div>
          <div class="private-cabinet__block__content__items">
            <div :key="index" class="private-cabinet__block__content__item" v-for="(item,index) in viewCar">
              <div><img :src="require('@/assets/img/models/1.png')" alt=""></div>
              <div>
                <h2>{{item.name}}</h2>
                <p>{{item.cloth.material_name}}</p>
                <span>{{item.size.size}}</span>
                <span>{{item.price}}</span>
              </div>
            </div>
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
                        <div :key="index" class="private-cabinet__block__content__item" v-for="(item,index) in viewWishlist">
              <div><img :src="require('@/assets/img/models/1.png')" alt=""></div>
              <div>
                <h2>{{item.name}}</h2>
                <p>{{item.cloth.material_name}}</p>
                <span>{{item.size.size}}</span>
                <span>{{item.price}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 d-none">
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
    name: 'private-cabinet',
    data() {
      return {
        goods,
        car: null,
        wishlist: null,
        viewCar: [],
        viewWishlist: [],
      }
    },
    created() {
      this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
      this.car = JSON.parse(localStorage.getItem('car'));
      if(this.car) this.filterItems(this.car, this.viewCar);
      if(this.wishlist) this.filterItems(this.wishlist, this.viewWishlist);
      
    },
    methods: {
      filterItems(storageObj, viewArray) {
        let that = this;
        let supportObj = {};
        storageObj.map(function (item1) {
          let findObj = {
            id_good: item1.id_good,
            material: [{
              id_material: item1.id_cloth
            }],
            size: [{
              id_size: item1.id_size
            }]
          }
          findObj = that._.find(that.goods,findObj) ;
          supportObj.name = findObj.good_name.ua;
          supportObj.photo = findObj.photos[0];
          supportObj.price = findObj.price;
          supportObj.size = that._.find(findObj.size,{id_size: item1.id_size})
          supportObj.cloth = that._.find(findObj.material,{id_material: item1.id_cloth});  
          viewArray.push(supportObj);
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import './../../assets/scss/_variable.scss';

  .flex-box {
    justify-content: space-between;
  }

  .private-cabinet {
    background: url('./../../assets/img/home/home-background.jpg') fixed;

    &__block {
      padding: 30px 15px;
      background: rgba(255, 255, 255, .3);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, .3);
      &__content{
        &__item{
          display:flex;
          background: #efe9dd;
          &>div:last-child{
            padding: 15px;
          }
        }
      }
      &__title {
        text-align: center;

        img {
          margin-bottom: 15px;
        }

        h2 {
          font-family: $font-a;
          font-size: 1.5rem;
        }
      }
    }
  }
</style>