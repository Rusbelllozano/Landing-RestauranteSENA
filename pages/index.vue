<template>
  <div class="container">
    <header>
      <div id="navmenuR">
        <img id="menuham" @click="showmenu=!showmenu" src="../assets/images/menuham.png" />
        <div id="navR" v-if="showmenu" >
          <ul>
            <nuxt-link to="/">
            <li>
            Inicio
          </li>
            </nuxt-link>
          <nuxt-link to="/menu">
            <li>
            Carta
          </li>
            </nuxt-link>
          </ul>
        </div>
      </div>
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
         <nuxt-link to="/menu">
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
    <section id="chef" class="chef">
      <div class="infoSENA">
        <iframe width="650" height="400" 
        src="https://www.youtube.com/embed/GOdv9rR-G5U" 
        frameborder="0" allow="accelerometer; autoplay; 
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        <div class="develop">
         <h2>Desarrollado por Rusbell Lozano</h2>
         <h2>Presentado a Ing. Carolina Quevedo Benitez</h2>
         <h3>Tecnologo en Analisis y Desarrollo de sistemas de información</h3>
         <p>Proyecto final - etapa lectiva</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import cardwelcome from '~/components/cardwelcome.vue'
import cardmeals from '~/components/cardmealsLanding.vue'
export default {
  head () {
    return {
      title: "Escuela de Gastronomia y Turismo",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Restaurante de la escuela de gastronomia' }
      ]
    }
  },
  data: function () {
    return {
      showmenu:false
    }
  },
  components: {
    cardwelcome,
    cardmeals
  },
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
    margin:10px 0px 6px 30px;
    float:left;
    img{
      height: 40px;
      width: 85px;
    }
  }
   #navmenuR{
    display:none;
    float:right;
    #navR{
      ul{
      list-style: none;
      display: flex;
      flex-direction: column;
      position:absolute;
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
    #menuham{
      width:50px;
      padding:10px;
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
      top: 0;   
      overflow:scroll;
    }
    .chef{
      background: url('../assets/images/firts1.jpg') no-repeat;
      background-size: cover;
      position: sticky;
      top: 0;
      display: grid;
      justify-content: center;
      align-content: center;
      .infoSENA{
        display: grid;
        justify-content: center;
        align-content: center;
        .develop{
          margin-top:10px;
          display:grid;
          justify-content:center;
          text-align:center;
        }
        p{
          padding: 20px;
        }
      }
    }
    
}
section{
    padding: 3em;
    height: 100vh;
    position: relative;
    box-sizing:border-box; 
}
@media screen and (max-width: 700px) {
  header{
    #navmenuR{
      display:flex;
    }
    #nav{
      display: none;
    }
  }
  }

</style>
