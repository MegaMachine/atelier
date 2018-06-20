<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col-2">
            <div class="header__logo">
              <img src="assets/img/header/logo.png" alt="logo">
            </div>
          </div>
          <div class="col-6">
            <nav class="header__nav">
              <router-link tag="a" to="/about"><span>про проект</span></router-link>
              <router-link tag="a" to="/contacts"><span>контакти</span></router-link>
              <a class="social fb" href="#"><span>a</span></a>
              <a class="social inst" href="#"><span>a</span></a>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style lang="scss" >
@import './assets/scss/index.scss';

body,html,#app{
  width: 100%;
  height: 100%;
}
html{
  font-size: 16px;
}
#app{
  background:url('assets/img/home-background.jpg') no-repeat center;
}
.row{
  justify-content: space-between;
  &:before,&:after{
    display: none;
  }
}
.header{
  padding: 20px 0;
  background: rgba(255,255,255,.4);
  box-shadow: 0 0 30px 10px #000;
  &__logo{
    
  }
  &__nav{
    display: flex;
    justify-content: flex-end;
    a{
      padding: 0px 15px;
      font-family: $font-a;
    }
  }
}

</style>
