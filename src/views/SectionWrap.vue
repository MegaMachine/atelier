<template>
  <section :id="sectionName" :class="sectionName" class="section-wrap">
    <button-back></button-back>
    <div :class="sectionContainer">
      <div class="row">
        <!-- <div class="col-md-4"></div> -->
        <div class="col-12">
          <h2 class="page-title">{{ sectionTitle }}</h2>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name:'section-wrap',
    props:{
      sectionName:{
        type : String,
        default : "",
      },
      sectionTitle:{
        type : String,
        default : ""
      },
      sectionContainer : {
        type : String,
        default : "container"
      }
    }
  }
</script>

<style scoped lang="scss">
 section.section-wrap{
  padding-top: 20vh;
  min-height: 100vh;
  height: 100%;
   /* width:100vw; */
   /* overflow: hidden; */
   @media screen and (max-width:991px){
     padding-top: 5vh;
   }
 }
 .page-title{
  text-align: center;
  text-transform:uppercase;
  font-size:2rem;
  margin-bottom: 30px;
  @media screen and (max-width:991px){
     padding-top: 5vh;
   }
 }
 
</style>