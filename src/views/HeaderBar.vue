<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-2">
          <router-link tag="a" to="/" class="header__logo">
            <img src="./../assets/img/header/logo.png" alt="logo">
          </router-link>
        </div>
        <div class="col-6">
          <nav class="header__nav">
            <router-link class="header__link" tag="a" to="/about"><span>про проект</span></router-link>
            <router-link class="header__link" tag="a" to="/contacts"><span>контакти</span></router-link>
            <a class="header__social fb" href="#"></a>
            <a class="header__social inst" href="#"></a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header-bar'
  };
</script>

<style lang="scss" scoped>
  @import '../assets/scss/_variable.scss';
  .row {
    justify-content: space-between;
  }
  
  .header {
    padding: 20px 0;
    background: rgba(255, 255, 255, .4);
    box-shadow: 0 0 30px 10px #000;
    position: fixed;
    width: 100%;
    z-index: 1;
    &__logo {
      display: block;
    }
    &__nav {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      a {
        margin-left: 30px;
        font-family: $font-a;
        &:last-child {
          margin-left: 15px;
        }
      }
    }
    &__link {
      font-size: 1rem;
      color: $color-black-item-title;
      text-transform: uppercase;
      font-weight: bold;
    }
    &__social {
      width: 25px;
      height: 25px;
      display: inline-block;
      background-position: center;
      background-repeat: no-repeat;
      &.fb {
        background-image: url('./../assets/img/header/fb.png');
      }
      &.inst {
        background-image: url('./../assets/img/header/inst.png');
      }
    }
  }
</style>