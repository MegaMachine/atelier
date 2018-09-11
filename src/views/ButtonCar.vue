<template>
  <div>
    <button @click="putCart">замовити</button>
  </div>
</template>

<script>
  export default {
    name:'button-car',
    props:{
      items:Object
    },
    methods:{
      putCart(){
        let count = 0;
        let that = this;
        let storageItems = JSON.parse(localStorage.getItem('car'));
        let good = storageItems ? storageItems : [];
        console.log(that.items)
        Object.keys(this.items).forEach(function(item){
          if(!that.items[item]){
            count++;
          }
          
        })
        if(!count){
           good.push(this.items);
           localStorage.setItem('car', JSON.stringify(good));
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './../assets/scss/_variable.scss';
div{
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
</style>