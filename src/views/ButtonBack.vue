<template>
<div class="button-back">
    <a @click="getBack">text</a>
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
            window.history.go(-1);
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
   padding: 20px;
   display: block;
   cursor:pointer;
 }
</style>