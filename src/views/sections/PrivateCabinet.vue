<template>
  <section-wrap sectionName="private-cabinet" sectionTitle="Персональний Кабінет">
    <div class="row flex-box">
      <div class="col-md-12 col-lg-6">
        <div class="private-cabinet__block">
          <div class="private-cabinet__block__title">
            <img src="./../../assets/img/private-cabinet/order.png" alt="">
            <h2>МОЇ ЗАМОВЛЕННЯ</h2>
          </div>
          <div class="private-cabinet__block__content">
            <div v-if="!viewCar.length">
              У вас пустий кошик
            </div>
            <div :key="index" :data-index="index" class="private-cabinet__block__content__item" v-for="(item,index) in viewCar">
             
              <div><img :src="require('@/assets/img/models/1.png')" alt=""></div>
               <button class="delete-item" @click="deleteCar">x</button>
              <div>
                <div><img :src="require('@/assets/img/item/dress.png')" alt="" class="item-icons"><h2>{{item.name}}</h2></div>
                <div><img :src="require('@/assets/img/item/cloth.png')" alt="" class="item-icons"><p>{{item.cloth}}</p></div>
                <div><img :src="require('@/assets/img/item/measuring-tape.png')" alt="" class="item-icons"><span>{{item.size}}</span></div>
                <div><img :src="require('@/assets/img/item/wallet.png')" alt="" class="item-icons"><span>{{item.price}} грн.</span></div>
                <button class="to-car" @click="toCar">Замовити</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <div class="private-cabinet__block">
          <div class="private-cabinet__block__title">
            <img src="./../../assets/img/private-cabinet/best.png" alt="">
            <h2>УЛЮБЛЕНІ</h2>
          </div>
          <div class="private-cabinet__block__content">
            <div v-if="!viewWishlist.length">
              Ваш список бажань пустий
            </div>
            <div :key="index" :data-index="index" class="private-cabinet__block__content__item" v-for="(item,index) in viewWishlist">
              
              <div><img :src="require('@/assets/img/models/1.png')" alt=""></div>
              <button class="delete-item" @click="deleteWishList">x</button>
              <div>
                <div><img :src="require('@/assets/img/item/dress.png')" alt="" class="item-icons"><h2>{{item.name}}</h2></div>
                <div><img :src="require('@/assets/img/item/cloth.png')" alt="" class="item-icons"><p>{{item.cloth}}</p></div>
                <div><img :src="require('@/assets/img/item/measuring-tape.png')" alt="" class="item-icons"><span>{{item.size}}</span></div>
                <div><img :src="require('@/assets/img/item/wallet.png')" alt="" class="item-icons"><span>{{item.price}} грн.</span></div>
                <button class="to-car" @click="toCar">в кошик</button>
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
  import models from './../../data/models.js';
  import filter from './../../data/filter.js';
  import cloth from './../../data/cloth.js';
  export default {
    name: 'private-cabinet',
    data() {
      return {
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
      console.log( this.viewCar, this.viewWishlist)
    },
    methods: {
      takeItems(){ 
        this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
        this.car = JSON.parse(localStorage.getItem('car'));
      },
      filterItems(storageObj, viewArray) {
        let that = this;   
        storageObj.map(function (item1) {
          let findInModel = that._.find(models,{id_model:item1.id_model});
          let findInCloth = that._.find(cloth,{id_material:item1.id_cloth});
          let findInSize = that._.find(filter.size,{id_size:item1.id_size});

          let supportObj = {};
          console.log(item1.id_model)
          supportObj.name = findInModel.model_name.ua;
          supportObj.photo = findInModel.photos[0];
          supportObj.price = findInCloth.price;
          supportObj.size = findInSize.size; //that._.find(findObjResult.size,{id_size: item1.id_size})
          supportObj.cloth = findInCloth.material_name;//that._.find(findObjResult.material,{id_material: item1.id_cloth});  
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
      margin-bottom: 30px;
      &__content{
        &__item{
          display:flex;
          background: #efe9dd;
          @media screen and (max-width:500px){
            flex-direction: column;
          }
          &>div:last-child{
            padding: 15px;
          }
        }
      }
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
          img{
            height: 100%;
          }
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
            @media screen and (max-width:500px){
              width: 100%;
            }
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
            @media screen and (max-width:500px){
              width: 100%;
            }
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
              font-size: 16px;
             
            }
          }
        }
      }
    }
  }
</style>