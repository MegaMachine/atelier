<template>
  <section class="home">
    <div class="container">
      <div class="home__title">
        <h1>BE UNIQUE</h1>
      </div>
  
      <div class="row">
        <div class="col-xl-3 col-md-5 col-sm-6 col-8">
          <router-link class="home__link" to="/models">
            <img src="./../../assets/img/home/models.png" alt="model">
            <h2>МОДЕЛІ</h2>
          </router-link>
        </div>
        <div class="col-xl-3 col-md-5 col-sm-6 col-8">
          <router-link class="home__link" to="/cloth">
            <img src="./../../assets/img/home/cloth.png" alt="cloth">
            <h2>ТКАНИНИ</h2>
          </router-link>
        </div>
        <div class="col-xl-3 col-md-5 col-sm-6 col-8">
          <router-link class="home__link" to="/finished-goods">
            <img src="./../../assets/img/home/finished-goods.png" alt="finished-goods">
            <h2>ГОТОВІ ВИРОБИ</h2>
          </router-link>
        </div>
        <div class="col-xl-3 col-md-5 col-sm-6 col-8">
          <router-link class="home__link" to="/private-cabinet">
            <img src="./../../assets/img/home/private-cabinet1.png" alt="privat-cabinet">
            <h2>ПЕРСОНАЛЬНИЙ КАБІНЕТ</h2>
          </router-link>
        </div>
  
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'home',
  
  }
</script>

<style lang="scss" scoped>
  @import './../../assets/scss/_variable.scss';
  .home {
    display: flex;
    align-items: center;
    background: url('./../../assets/img/home/home-background.jpg') fixed;
    // padding-top: 20vh;
    min-height: 100vh;
    .container{
      .row{
        justify-content: center;
        &>div{
          margin-bottom: 30px;
        }
      }
    }
    &__title {
      z-index: 1;
      overflow: hidden;
      position: relative;
      background: radial-gradient(circle, rgba(0, 0, 0, .5) 1%, transparent);
      margin-bottom: 80px;
      h1 {
        font-size: 3rem;
        text-transform: uppercase;
        color: $color-white;
        text-align: center;
        letter-spacing: 2px;
        font-family: $font-a;
      }
    }
    &__link {
      padding:50px 15px 15px;
      display: block;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, .2);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      img {
        
      }
      h2 {
        color:$color-white;
        text-transform: uppercase;
        font-size: 1.5rem;
        text-align: center;
        display: block;
        width: 100%;
        height: 100px;
        padding-top: 30px;
        margin-top: 30px;
        border-top:2px solid $color-white;
      }
      &:hover{
        box-shadow: 0px 0px 10px 0px $color-white;
      }
    }
  }
</style>
