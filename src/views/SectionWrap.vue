<template>
  <section :id="this.sectionName" :class="this.sectionName" >
    <button-back></button-back>
    <div class="container">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-8">
          <h2 class="page-title">{{ this.sectionTitle }}</h2>
        </div>
      </div>
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name:'section-wrap',
    props:[
      'sectionName',
      'sectionTitle'
    ]
  }
</script>

<style scoped>
 section{
   padding-top: 20vh;
   height: 100vh;
   width:100vw;
 }
 .section-title{
  text-align: center;
  text-transform:uppercase;
  font-size:1.125rem;
 }
 
</style>