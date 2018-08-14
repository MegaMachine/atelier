<template>
  <section-wrap sectionName="about">
    <div class="row flex-box">
      <div class="col-9" :key="index" v-for="(item,index) in items">
        <div class="about__item">
          <img :src="item.img" :alt="item.title">
          <h2>{{item.title}}</h2>
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
  </section-wrap>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        items: [
          {
            img: require('./../../assets/img/about/shirt.png'),
            title: "конструктор для створення одягу",
            text: "Твори! Будь унікальною! Цей сайт– то конструктор для твоїх ідей.Ти можеш обрати готову модель,а можеш задіяти свою фантазію і скласти свій пазл.Обирай модель– і до неї тканину,або навпаки– тканину– а тоді модель,яка пасує.Врахуй,що тканину потрібно оплатити відразу.Приблизну вартість виробу ти побачиш при замовленні."
          },
          {
            img: require('./../../assets/img/about/puzzle.png'),
            title: "склади пазл",
            text: "Створи свій капсульний гардероб! Склади гармонійний образ в своєму персональному кабінеті Врахуй, які кольори вже маєш в гардеробі, щоб скласти свою капсулу."
          },
          {
            img: require('./../../assets/img/about/cloth.png'),
            title: "натуральні тканини високої якості",
            text: "На нашому сайті представлені тканини високої якості переважно з натуральних складників."
          },
          {
            img: require('./../../assets/img/about/coins.png'),
            title: "Ціни за роботу відповідають ринковим в ательє",
            text: "Ти маєш можливість отримати індивідуальний пошив за ціною масс-маркета."
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
@import './../../assets/scss/_variable.scss';
  .flex-box {
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
  }

  .about {
    background: url('./../../assets/img/about/bg.jpeg') no-repeat center;
    background-size: 100% 100%;
    &__item{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 30px 15px;
      background: rgba(255,255,255,.3);
      margin-bottom: 30px;
      img{
        margin-bottom: 20px;
      }
      h2{
        font-family: $font-a;
        color:$color-black-item-title;
        text-transform: uppercase;
        font-size: 22px;
        &:after{
          content:"";
          display: block;
          width: 80px;
          height:3px;
          margin: 20px auto;
          
          background: #f83f95;
        }
      }
      p{
        line-height: 24px;
        color:$color-black-item-title;
        text-align: center;
        font-family: $font-a;
      }
    }
  }
</style>