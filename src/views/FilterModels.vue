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
        let obj = {
          contingent : this.filterResult.inputs.contingent ? Number(this.filterResult.inputs.contingent) : null,
          category : this.filterResult.selects.category ? Number(this.filterResult.selects.category.value) : null,
          purpose : this.filterResult.selects.purpose ? Number(this.filterResult.selects.purpose.value) : null,
          id_material : this.filterResult.selects.material ? [Number(this.filterResult.selects.material.value)] : null 
        };
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
          label: g.purpose_name.toString(),
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
        return this.category.map(g => ({
          label: g.category_name.toString(),
          value: g.id_category
        }))
      }
    },
    mounted(){
      console.log(this.filterResult)
    }
  };
</script>

<style lang="scss" scoped>
  @import './../assets/scss/_variable.scss';
  .filter {
    // position: fixed;
    box-shadow: 0 0 10px 0px rgba(0,0,0,.3);
    padding: 20px;
    @media screen and (max-width:991px){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__item {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      @media screen and (max-width:991px){
        width: 31%;
        &:first-child{
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
      @media screen and (max-width:991px){
        width: 100%;
      }
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