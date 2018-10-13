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
    <div class="filter__item">
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
    </div>
    <!-- <div class="filter__item select">
      <h2>Категорія</h2>
      <v-select v-model="filterResult.selects.category"  :options="selectOptionsCategory"></v-select>
    </div> -->
    <div class="filter__item select">
      <h2>Тканина</h2>
      <v-select v-model="filterResult.selects.material" :options="selectOptionsMaterial"></v-select>
    </div>
    <!-- <div class="filter__item select">
      <h2>Призначення</h2>
      <v-select v-model="filterResult.selects.purpose"  :options="selectOptionsPurpose"></v-select>
    </div> -->
    <div class="filter__item select">
      <h2>Призначення</h2>
      <v-select v-model="filterResult.selects.size"  :options="selectOptionsSize"></v-select>
    </div>
    <button @click.prevent="sendData">Фільтрувати</button>
  </div>
</template>

<script>
  import goods from './../data/goods.js';
  export default {
    name: "app-filter",
    data() {
      return {
        goods,
        viewGoods: [],
        filterResult: {
          inputs:{
            contingent : null,
            season: null
          },
          selects:{
            // category : null,
            // purpose : null,
            material : null,
            // contingent : null,
            size: null
          }
        }
      }
    },
    props: {
      material: Array,
      // purpose: Array,
      // category: Array,
      size: Array
    },
    methods: {
      filterItem() {  
        let obj = {
          id_season: this.filterResult.inputs.season ? Number(this.filterResult.inputs.season) : null,
          id_contingent : this.filterResult.inputs.contingent ? Number(this.filterResult.inputs.contingent) : null,
          // id_category : this.filterResult.selects.category ? Number(this.filterResult.selects.category.value) : null,
          // purpose : this.filterResult.selects.purpose ? Number(this.filterResult.selects.purpose.value) : null,
          material : this.filterResult.selects.material ? { id_material : Number(this.filterResult.selects.material.value) } : null ,
          size :  this.filterResult.selects.size ? { id_size: Number(this.filterResult.selects.size.value) } :  null 
        };
        let findObj = _.pickBy(obj, _.identity);
        this.viewGoods = _.filter(this.goods, findObj);
        console.log('findObj',findObj)
        console.log('viewGoods',this.viewGoods)
      },
      sendData(){
        this.filterItem();
        this.$emit('filter-result', this.viewGoods)
      }
    },
    computed: {
      selectOptionsSize() {
        return this.size.map(g => ({
          label: g.size.toString(),
          value: g.id_size
        }))
      },
      selectOptionsMaterial() {
        return this.material.map(g => ({
          label: g.material_name.toString(),
          value: g.id_material
        }))
      },
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