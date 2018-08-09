<template>
  <section-wrap 
    sectionName="finished-good-view"
    :sectionTitle="good[0].good_name.ua" 
    sectionContainer="container-fluid">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="model-view__info">
          <div class="model-view__info__img"><img :src="good[0].photos.photo1" :alt="good[0].good_name.ua"></div>
          <div class="model-view__info__desc">{{good[0].description}}</div>
          <div class="model-view__info__buttons"></div>
        </div>
      </div>
      <div class="col-12 col-md-6">
         <div class="model-view__cloth">
          <p :key = "index" v-for="(param,index) in good[0]">{{param}}</p>
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
import goods from './../../data/goods.js'
  export default {
    name:"model-view",
    data(){
      return{
        good:null,
        goods,
      }
    },
    created(){
      this.good = _.filter(goods,{id_good:this.$route.params.id})
    }
  }
</script>

<style scoped>

</style>