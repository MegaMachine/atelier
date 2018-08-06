<template>
  <div class="filter">
    <div class="filter__item">
      <h2>Стать</h2>
      <div>
        <label class="filter__item__male">
          <input type="radio" name="gender" id="male" value="male">
          <span></span>
        </label>
        <label class="filter__item__famale">
          <input type="radio" name="gender" id="famale" value="famale">
          <span></span>
        </label>
      </div>
    </div>
    <div class="filter__item">
      <h2>Сезон</h2>
      <div>
        <label class="filter__item__sun">
          <input type="radio" name="season" id="sun" value="sun">
          <span></span>
        </label>
        <label class="filter__item__winter">
          <input type="radio" name="season" id="winter" value="winter">
          <span></span>
        </label>
        <label class="filter__item__rain">
          <input type="radio" name="season" id="rain" value="rain">
          <span></span>
        </label>
      </div>
    </div>
    <div class="filter__item select">
      <h2>Категорія</h2>
      <v-select v-model="selected" :options="['foo','bar']"></v-select>
    </div>
    <div class="filter__item select">
      <h2>Категорія</h2>
      <v-select v-model="selected" :options="['foo','bar']"></v-select>
    </div>
    <div class="filter__item select">
      <h2>Категорія</h2>
      <v-select v-model="selected" :options="['foo','bar']"></v-select>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app-filter",
    data() {
      return {
        selected: null
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import './../assets/scss/_variable.scss';
  .filter {
    // position: fixed;
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
      &.select{
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>