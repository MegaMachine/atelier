<template>
  <div>
    <span @click="putWishlist"></span>
  </div>
</template>

<script>
  export default {
    name:'button-wishlist',
    props:{
      items:Object
    },
    methods:{
      putWishlist(){
        let count = 0;
        let that = this;
        let storageItems = JSON.parse(localStorage.getItem('wishlist'));
        let good = storageItems ? storageItems : [];
        Object.keys(this.items).forEach(function(item){
          if(!that.items[item]){
            count++;
          }
          console.log(item)
        })
        if(!count){
           good.push(this.items);
           localStorage.setItem('wishlist', JSON.stringify(good));
        } 
      }
    }
  }
</script>

<style lang="scss" scoped>
div{
 margin-right: 20px;
      span{
        display: block;
        width: 35px;
        height: 35px;
        cursor: pointer;
        background: url('./../assets/img/like.png') no-repeat center;
      }
}

</style>