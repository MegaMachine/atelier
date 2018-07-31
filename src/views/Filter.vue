<template>
  <div class="models__filter">
    <div class="models__filter__item">
      <h2>Стать</h2>
      <div>
        <label class="models__filter__item__male">
          <input type="radio" name="gender" id="male" value="male">
          <span></span>
        </label>
        <label class="models__filter__item__famale">
          <input type="radio" name="gender" id="famale" value="famale">
          <span></span>
        </label>
      </div>
    </div>
    <div class="models__filter__item">
      <h2>Сезон</h2>
      <div>
        <label class="models__filter__item__sun">
          <input type="radio" name="season" id="sun" value="sun">
          <span></span>
        </label>
        <label class="models__filter__item__winter">
          <input type="radio" name="season" id="winter" value="winter">
          <span></span>
        </label>
        <label class="models__filter__item__rain">
          <input type="radio" name="season" id="rain" value="rain">
          <span></span>
        </label>
      </div>
    </div>
    <div class="models__filter__item">
      <h2>Категорія</h2>
      <v-select v-model="this.selected" :options="['foo','bar']"></v-select>
    </div>
    <div class="models__filter__item">
      <h2>Категорія</h2>
      <v-select v-model="this.selected" :options="['foo','bar']"></v-select>
    </div>
    <div class="models__filter__item">
      <h2>Категорія</h2>
      <v-select v-model="this.selected" :options="['foo','bar']"></v-select>
    </div>
  </div>
</template>

<script>
  export default {
    name: "filter"
  };

</script>

<style scoped>


</style>
