<template>
  <div class="filter">
    <div class="filter__item">
      <h2>Стать</h2>
      <div>
        <label class="filter__item__male">
          <input v-model="filterResult.inputs.contingent" type="radio" name="gender" id="male" value="1">
          <span></span>
        </label>
        <label class="filter__item__famale">
          <input v-model="filterResult.inputs.contingent" type="radio" name="gender" id="famale" value="2">
          <span></span>
        </label>
      </div>
    </div>
    <!-- <div class="filter__item">
      <h2>Сезон</h2>
      <div>
        <label class="filter__item__sun">
          <input v-model="filterResult.inputs.season" type="radio" name="season" id="sun" value="1">
          <span></span>
        </label>
        <label class="filter__item__winter">
          <input v-model="filterResult.inputs.season" type="radio" name="season" id="winter" value="2">
          <span></span>
        </label>
        <label class="filter__item__rain">
          <input v-model="filterResult.inputs.season" type="radio" name="season" id="rain" value="3">
          <span></span>
        </label>
      </div>
    </div> -->
    <div class="filter__item select">
      <h2>Категорія</h2>
      <v-select v-model="filterResult.selects.category"  :options="selectOptionsCategory"></v-select>
    </div>
    <div class="filter__item select">
      <h2>Тканина</h2>
      <v-select v-model="filterResult.selects.material" :options="selectOptionsMaterial"></v-select>
    </div>
    <div class="filter__item select">
      <h2 @click="filterItem">Призначення</h2>
      <v-select v-model="filterResult.selects.purpose"  :options="selectOptionsPurpose"></v-select>
    </div>
    <button @click.prevent="sendData">Фільтрувати</button>
  </div>
</template>

<script>
  import models from './../data/models.js';
  export default {
    name: "app-filter",
    data() {
      return {
        models,
        viewModels: [],
        filterResult: {
          inputs:{
            contingent : null
          },
          selects:{
            category : null,
            purpose : null,
            material : null,
          }
        }
      }
    },
    props: {
      material: Array,
      purpose: Array,
      category: Array
    },
   
    methods: {
      filterItem() {  
        // var vm = this;
        // vm.viewModels = [];
        // var obj = {};
        // _.filter(vm.filterResult.inputs, function(value, key){
        //   if(value){
        //     obj[key] = Number(value);
        //   }
        // })
        // _.filter(vm.filterResult.selects, function(value, key){
        //   var obj2 = {};
        //   if(value){
        //     obj[key] = [];
        //     obj2['id_' + key] = value.value;
        //     obj[key][0] = obj2
        //   }
        // })
        // vm.viewModels = _.filter(vm.goods, obj)
        // console.log(_.pickBy(this.filterResult, _.identity));
        let obj = {
          category:this.filterResult.selects.category.value,
          purpose:this.filterResult.selects.purpose.value,
          contingent:this.filterResult.inputs.contingent,
          id_material:[this.filterResult.selects.material.value] 
        }
        let findObj = _.pickBy(obj, _.identity);

        this.viewModels = _.filter(this.models, findObj);
      },
      sendData(){
        this.filterItem();
        this.$emit('filter-result', this.viewModels)
      }
    },
    computed: {
      selectOptionsPurpose() {
        return this.purpose.map(g => ({
          label: g.purpose.toString(),
          value: g.id_purpose
        }))
      },
      selectOptionsMaterial() {
        return this.material.map(g => ({
          label: g.material_name.toString(),
          value: g.id_material
        }))
      },
      selectOptionsCategory() {
        return this.article.map(g => ({
          label: g.caregory_name.toString(),
          value: g.id_article
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