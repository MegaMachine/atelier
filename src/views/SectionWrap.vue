<template>
  <section :id="sectionName" :class="sectionName"  >
    <button-back></button-back>
    <div :class="sectionContainer">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8">
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

<style scoped>
 section{
   padding-top: 20vh;
   min-height: 100vh;
  height: 100%;
   /* width:100vw; */
   /* overflow: hidden; */
 }
 .section-title{
  text-align: center;
  text-transform:uppercase;
  font-size:1.125rem;
 }
 
</style>