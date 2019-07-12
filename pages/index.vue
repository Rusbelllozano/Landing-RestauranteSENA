<template>
  <div class="container">
    <header>
      <div id="logo">
          <img src="../assets/images/logo.png" alt="">
      </div>
      <div id="nav" >
        <ul>
          <nuxt-link to="/">
          <li>
          Inicio
        </li>
          </nuxt-link>
         <nuxt-link to="/">
          <li>
          Carta
        </li>
          </nuxt-link>
        
      </ul>
      </div>
      
    </header>
    <section class="welcome">
         <cardwelcome/>
    </section>
    <section class="food">
      <cardmeals/>
    </section>
    <section class="chef">
    </section>

  </div>
</template>

<script>

// var tl = new TimelineMax({onUpdate:updatePercentage});
// const controller = new ScrollMagic.Controller();
// tl.from("blockquote", .5, {x:200,opacity:0});

// const scene= new ScrollMagic.Scene({
//     triggerElement:".sticky",
//     triggerHook:"onLeave",
//     duration:"100%"
// })
//     .setPin(".sticky")
//     .setTween(tl)
//         .addTo(controller);

// function updatePercentage(){
//     tl.progress();
//     console.log(tl.progress())
// }
import cardwelcome from '~/components/cardwelcome.vue'
import cardmeals from '~/components/cardmeals.vue'
export default {
  components: {
    cardwelcome,
    cardmeals
  },
  methods:{}
  

}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Montserrat|Reenie+Beanie&display=swap');
header{
  height: 60px;
  #logo{
    margin:5px 0px 5px 50px;
    float:left;
    img{
      height: 40px;
      width: 100px;
    }
  }
  #nav{
    float: right;
    margin: 0px 40px 0px 0px;
    text-align:center;
    vertical-align: center;
    ul{
      list-style: none;
      display: flex;
      flex-direction: row;
      a{
        text-decoration: none;
        color:black;
      }
      li{
        width: 100px;
        height: 60px;
        padding: 20px;
        font-size:20px;
        cursor: pointer;
        transition:.5s;
      }
      li:hover{
        color:#fff;
        background-color: #e5d9ca;
      }
    }
  }
}
.container{
    margin: 0;
    font-family: 'Josefin Sans';
    h1{
        font-size: 2em;
        text-align: center;
    }
    .welcome{
      position: sticky;
      top: 0;
      background: url('../assets/images/firts2.jpg') no-repeat;
      background-size: cover;
      
    }
    .food{
      background: url('../assets/images/firts3.jpeg') no-repeat;
      background-size: cover;
      position: sticky;
      top: 0
    }
    .chef{
      background: url('../assets/images/firts1.jpg') no-repeat;
      background-size: cover;
      position: sticky;
      top: 0
    }
    
}

section{
    padding: 3em;
    height: 100vh;
    position: relative;
    box-sizing:border-box; 
}


</style>
