<template>
  <section-wrap 
    sectionName="model-view">
    <div class="row">
      <div class="col-4">
        <div class="model-view__info">
          <div class="model-view__info__img"><img src="" alt=""></div>
          <div class="model-view__info__desc"></div>
          <div class="model-view__info__buttons"></div>
        </div>
      </div>
      <div class="col-8">
         <div class="model-view__cloth">
          
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
  export default {
    name:"model-view",
    data(){
      return{
        modelName:"Model"
      }
    }
  }
</script>

<style scoped>

</style>