<template>
  <section-wrap sectionName="models" sectionTitle="Моделі">
    <div class="row">
      <div class="col-md-4">
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
      </div>
      <div class="col-md-8 items">
        <div class="models__item__wrap">
          <div class="models__item">
            <div class="models__item__img">
              <img src="../../assets/img/models/1.png" alt="model">
            </div>
            <div class="models__item__desc">
              <div class="models__item__desc__price">
                <h2>800.80
                  <span>grn</span>
                </h2>
                <div class="models__item__desc__text">
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et molestiae quaerat praesentium, illum sequi
                    nemo accusantium maiores qui suscipit ab ipsa ratione voluptas fugit laudantium nobis minus, amet adipisci
                    unde!</p>
                </div>
                <div class="models__item__desc__size">
                  <span>XL</span>
                </div>
              </div>
              <div class="models__item__desc__detail">
                <button>детальніше</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
  export default {
    name: 'models',
    data() {
      return {
        selected: null
      }
    }
  }

</script>

<style scoped lang="scss">
  @import './../../assets/scss/_variable.scss';
  .models {
    background: #efe9dd;
    &__filter {
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
            background-image: url('./../../assets/img/filter/gender-male.png')
          }
        }
        &__famale {
          span {
            background-image: url('./../../assets/img/filter/gender-famale.png');
          }
        }
        &__sun {
          span {
            background-image: url('./../../assets/img/filter/season-sun.png')
          }
        }
        &__winter {
          span {
            background-image: url('./../../assets/img/filter/season-winter.png');
          }
        }
        &__rain {
          span {
            background-image: url('./../../assets/img/filter/season-rain.png');
          }
        }
      }
    }
    .items {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      // overflow-y: auto;
      // max-height:725px;
      padding-bottom: 350px;
    }

    &__item {
      &__wrap{
        width: 28%;
        margin:0 2.5% 5%;
        position: relative;
      }
      padding: 10px 10px 0px;
      &__img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      &__desc {
        &__price {
          h2 {
            span {}
          }
        }
        &__text {
          p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        &__size {
          display: none;
          span {}
        }
        &__detail {
          display: none;
          button { 
            width: 100%;
            color:white;
            border: none;
            background: linear-gradient(to right, #ff8486 37%,#ff9393 52%,#fff06d 87%);
          }
        }
      }
      &:hover {
        z-index: 999;
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, .3);
        background-color: #f4f0e8;
        cursor: pointer;
        position: absolute;
        top:0;
        left: 0;
        z-index: 1;
        .models__item__desc {
          &__text {
            p {
              white-space: normal;
              overflow: visible;
            }
          }
          &__size {
            display: block;
            span {}
          }
          &__detail {
            display: block;
            button {
              
              
            }
          }
        }
      }
    }
  }

</style>
