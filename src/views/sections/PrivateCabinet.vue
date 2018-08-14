<template>
<section-wrap 
  sectionName = "private-cabinet"
  sectionTitle = "Персональний Кабінет">
    <div class="row flex-box">
      <div class="col-12 col-md-4">
        <div class="private-cabinet__item">
          <div class="private-cabinet__item__title">
            <img src="./../../assets/img/private-cabinet/order.png" alt="">
            <h2>МОЇ ЗАМОВЛЕННЯ</h2>
          </div>
          <div class="rivate-cabinet__item__content">

          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="private-cabinet__item">
          <div class="private-cabinet__item__title">
            <img src="./../../assets/img/private-cabinet/best.png" alt="">
            <h2>УЛЮБЛЕНІ</h2>
          </div>
          <div class="rivate-cabinet__item__content">
            
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="private-cabinet__item">
          <div class="private-cabinet__item__title">
            <img src="./../../assets/img/private-cabinet/puzzle.png" alt="">
            <h2>МОЇ КАПСУЛИ</h2>
          </div>
          <div class="rivate-cabinet__item__content">
            
          </div>
        </div>
      </div>
    </div>
</section-wrap>
</template>

<script>
  export default {
    name:'private-cabinet'
  }
</script>

<style lang="scss" scoped>
@import './../../assets/scss/_variable.scss';
.flex-box{
  justify-content: space-between;
}
.private-cabinet{
  background: url('./../../assets/img/home/home-background.jpg') fixed;
  &__item{
    padding: 30px 15px;
    background: rgba(255,255,255,.3);
    box-shadow: 0 0 10px 0 rgba(0,0,0,.3);
    &__title{
      text-align: center;
      img{
        margin-bottom: 15px;
      }
      h2{
        font-family: $font-a;
        font-size: 1.5rem;
      }
    }
  }
}
</style>