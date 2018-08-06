<template>
<div class="button-back">
    <a @click="$router.go(-1)">{{text}}</a>
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

<style scoped>
 .button-back{
   position: fixed;
   top:10vh;
   left: 2vw;
   border: 1px solid black;
   display: block;
   cursor:pointer;
   width: 40px;
   height: 30px;
 }
 a{
   width: 100%;
   height: 100%;
   display: inline-block;
 }
</style>