<template>
  <div class="container">
    <header>
        <nuxt-link to="/">
      <div id="logo">
          <img src="../assets/images/logo.png" alt="">
      </div>
      </nuxt-link>
      <div id="nav" >
        <ul>
          <nuxt-link to="/">
          <li>
          Inicio
        </li>
          </nuxt-link>
      </ul>
      </div>
    </header>
    <header>
      <div id="navmenu" >
        <ul>
          <nuxt-link to="/Carnes">
          <li>
           Carnes
        </li>
          </nuxt-link>
         <nuxt-link to="/Entradas">
          <li>
          Entradas
        </li>
          </nuxt-link>
        <nuxt-link to="/Arroces">
          <li>
              Bedidas
          
        </li>
          </nuxt-link>
          <nuxt-link to="/Servicios">
          <li>
          Servicios
        </li>
          </nuxt-link>
      </ul>
      </div>
      
      
    </header>
    
    <section class="food">
      <cardmeals/>
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
import cardmeals from '~/components/cardmealsMenu.vue'
export default {
  components: {
    cardmeals
  },
  methods:{}
  

}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Montserrat|Reenie+Beanie&display=swap');
header{
  height: 60px;
   position:sticky;
  top:0;      
  z-index: 999999;
  background-color: #fff;
  #logo{
    margin:5px 0px 5px 50px;
    float:left;
    img{
      height: 40px;
      width: 100px;
    }
  }
  #navmenu{
    float: left;
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
        width: auto;
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
    
}

section{
    padding: 3em;
    height: 100vh;
    position: relative;
    box-sizing:border-box; 
}


</style>
