<template>
  <div class="filter">
    <div class="filter__item select">
      <h2>Склад</h2>
      <v-select v-model="filterResult.selects.composition"  :options="selectOptionsСomposition"></v-select>
    </div>
    <div class="filter__item select">
      <h2>Категорія</h2>
      <v-select v-model="filterResult.selects.category" :options="selectOptionsCategory"></v-select>
    </div>
    <button @click.prevent="sendData">Фільтрувати</button>
  </div>
</template>

<script>
  import cloth from './../data/cloth.js';
  export default {
    name: "app-filter",
    data() {
      return {
        cloth,
        viewCloth: [],
        filterResult: {
          selects:{
            composition : null,
            category : null,
          }
        }
      }
    },
    props: {
      category: Array,
      composition: Array
    },
   
    methods: {
      filterItem() {  
        var vm = this;
        vm.viewCloth = [];
        var obj = {};
        _.filter(vm.filterResult.selects, function(value, key){
          if(value){
            obj['id_'+key] = value.value;
          }
        })
         vm.viewCloth = _.filter(vm.cloth, obj)
         console.log(obj)
      },
      sendData(){
        this.filterItem();
        this.$emit('filter-result', this.viewCloth)
      }
    },
    computed: {
      selectOptionsСomposition() {
        return this.composition.map(g => ({
          label: g.composition_name.toString(),
          value: g.id_composition
        }))
      },
      selectOptionsCategory() {
        return this.category.map(g => ({
          label: g.category_name.toString(),
          value: g.id_category
        }))
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import './../assets/scss/_variable.scss';
  .filter {
    // position: fixed;
    box-shadow: 0 0 10px 0px rgba(0,0,0,.3);
    padding: 20px;
    &__item {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      h2 {
        font-size: 1rem;
      }
      label {
        position: relative;
        margin-right: 10px;
        display: inline-block;
        span {
          display: inline-block;
          width: 30px;
          height: 40px;
          background-position: center;
          background-repeat: no-repeat;
          border-bottom: 2px solid transparent;
        }
        input {
          cursor: pointer;
          margin: 0;
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          opacity: 0;
          &:checked+span {
            border-bottom: 2px solid $color-black-page-title;
          }
        }
      }
      &__male {
        span {
          background-image: url('./../assets/img/filter/gender-male.png')
        }
      }
      &__famale {
        span {
          background-image: url('./../assets/img/filter/gender-famale.png');
        }
      }
      &__sun {
        span {
          background-image: url('./../assets/img/filter/season-sun.png')
        }
      }
      &__winter {
        span {
          background-image: url('./../assets/img/filter/season-winter.png');
        }
      }
      &__rain {
        span {
          background-image: url('./../assets/img/filter/season-rain.png');
        }
      }
      &.select {
        display: flex;
        flex-direction: column;
      }
    }
    button{
      display: block;
      margin: 0 auto;
      border-radius: 3px;
      border:none;
      padding: 5px 15px;

    }
  }
</style>