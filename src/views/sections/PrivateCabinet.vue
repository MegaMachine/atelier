<template>
  <section-wrap sectionName="private-cabinet" sectionTitle="Персональний Кабінет">
    <div class="row flex-box">
      <div class="col-12 col-md-4">
        <div class="private-cabinet__block">
          <div class="private-cabinet__block__title">
            <img src="./../../assets/img/private-cabinet/order.png" alt="">
            <h2>МОЇ ЗАМОВЛЕННЯ</h2>
          </div>
          <div class="private-cabinet__block__content">
            <div :key="index" :data-index="index" class="private-cabinet__block__content__item" v-for="(item,index) in viewCar">
              <button class="delete-item" @click="deleteCar">x</button>
              <div><img :src="require('@/assets/img/models/1.png')" alt=""></div>
              <div>
                <div><img :src="require('@/assets/img/item/dress.png')" alt="" class="item-icons"><h2>{{item.name}}</h2></div>
                <div><img :src="require('@/assets/img/item/cloth.png')" alt="" class="item-icons"><p>{{item.cloth.material_name}}</p></div>
                <div><img :src="require('@/assets/img/item/measuring-tape.png')" alt="" class="item-icons"><span>{{item.size.size}}</span></div>
                <div><img :src="require('@/assets/img/item/wallet.png')" alt="" class="item-icons"><span>{{item.price}} грн.</span></div>
                
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
            <div :key="index" :data-index="index" class="private-cabinet__block__content__item" v-for="(item,index) in viewWishlist">
              <button class="delete-item" @click="deleteWishList">x</button>
              <div><img :src="require('@/assets/img/models/1.png')" alt=""></div>
              <div>
                <div><img :src="require('@/assets/img/item/dress.png')" alt="" class="item-icons"><h2>{{item.name}}</h2></div>
                <div><img :src="require('@/assets/img/item/cloth.png')" alt="" class="item-icons"><p>{{item.cloth.material_name}}</p></div>
                <div><img :src="require('@/assets/img/item/measuring-tape.png')" alt="" class="item-icons"><span>{{item.size.size}}</span></div>
                <div><img :src="require('@/assets/img/item/wallet.png')" alt="" class="item-icons"><span>{{item.price}} грн.</span></div>
                <button class="to-car" @click="toCar">в кошик</button>
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
      this.takeItems();
      if(this.car) this.filterItems(this.car, this.viewCar);
      if(this.wishlist) this.filterItems(this.wishlist, this.viewWishlist);
      
    },
    methods: {
      takeItems(){
        this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
        this.car = JSON.parse(localStorage.getItem('car'));
      },
      filterItems(storageObj, viewArray) {
        let that = this;
        
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
          let findObjResult = that._.find(that.goods,findObj) ;
          let supportObj = {};
          supportObj.name = findObjResult.good_name.ua;
          supportObj.photo = findObjResult.photos[0];
          supportObj.price = findObjResult.price;
          supportObj.size = that._.find(findObjResult.size,{id_size: item1.id_size})
          supportObj.cloth = that._.find(findObjResult.material,{id_material: item1.id_cloth});  
          viewArray.push(supportObj);
        })
      },
      deleteItem(event, storageName){
        let item = event.currentTarget;
        let fatherItem = item.closest('.private-cabinet__block__content__item');
        let itemIndex = Number(fatherItem.attributes['data-index'].value);
        let storage = JSON.parse(localStorage.getItem(storageName));
        localStorage.removeItem(storageName)
        storage.splice(itemIndex,1);
        console.log(storage)
        localStorage.setItem(storageName, JSON.stringify(storage));
        this.viewCar = [];
        this.viewWishlist = [];
        this.takeItems();
        if(this.car) this.filterItems(this.car, this.viewCar);
        if(this.wishlist) this.filterItems(this.wishlist, this.viewWishlist);
      },
      deleteWishList(event){
        this.deleteItem(event,'wishlist');
      },
      deleteCar(event){
        this.deleteItem(event,'car');
      },
      toCar(event){
        let item = event.currentTarget;
        let fatherItem = item.closest('.private-cabinet__block__content__item');
        let itemIndex = Number(fatherItem.attributes['data-index'].value);
        let storageCar = JSON.parse(localStorage.getItem('car'))
        storageCar.push(this.wishlist[itemIndex]);
        localStorage.removeItem('car');
        localStorage.setItem('car', JSON.stringify(storageCar));
        this.deleteItem(event,'wishlist');
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import './../../assets/scss/_variable.scss';

  .flex-box {
    justify-content: space-between;
  }
  .item-icons{
    width: 24px;
    height:24px;
    margin-right: 10px;
  }
  .private-cabinet {
    background: url('./../../assets/img/home/home-background.jpg') fixed;

    &__block {
      padding: 30px 15px;
      background: rgba(255, 255, 255, .3);
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, .3);

      &__title {
        text-align: center;
        margin-bottom: 50px;
        img {
          margin-bottom: 15px;
        }

        h2 {
          font-family: $font-a;
          font-size: 1.5rem;
        }
      }
      &__content{
        &__item{
          display: flex;
          margin-bottom: 20px;
          width: 100%;
          position: relative;
          .delete-item{
            position: absolute;
            right:0;
            top:0;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0px;
            width: 24px;
            height: 24px;
            background: #1a1a1a;
            color:$color-white;
            border: none;
          }
          &>div:first-child{
            width: 40%;
            img{
              width: 100%;
            }
          }
          &>div:last-child{
            background: #efe9dd;
            font-size: 12px;
            color:#1a1a1a;
            display: flex;
            flex-direction: column;
            padding: 15px;
            width: 60%;
            p,h2, span{
              margin: 0;
             
            }
            &>div{
              display:flex;
              align-items: center;
              margin-bottom: 10px;
            }
            h2{
              font-family: $font-a;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
</style>