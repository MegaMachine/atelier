<template>
  <div>
    <button @click="putCart">замовити</button>
  </div>
</template>

<script>
  export default {
    name:'button-order',
    props:{
      items:Object
    },
    methods:{
      putCart(){
        var good = [];
        var good = JSON.parse(localStorage.getItem('goodCart'));
        good.push(this.items);
        localStorage.setItem('goodCart',JSON.stringify(good));
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