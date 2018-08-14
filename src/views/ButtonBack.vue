<template>
<div class="button-back">
    <a @click="$router.go(-1)">назад</a>
    <!--<router-link :to="-1">{{text}}</router-link>-->
</div>
</template>

<script>
export default {
    name:'button-back',
    data(){
        return {
            text: "back"
        }
    },
    methods:{
        getBack(){
         
        },
    }
}
</script>

<style lang="scss" scoped>
 .button-back{
   position: fixed;
   top:15vh;
   left: 2vw;
   display: block;
   cursor:pointer;
   &:hover{
     transform: scale(1.1);
   }
 }
 a{
   text-transform: uppercase;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   &:before{
     content:"";
     display: inline-block;
     width: 24px;
     height: 24px;
     background: url('./../assets/img/left-arrow.png') no-repeat center;
   }
  
 }
</style>