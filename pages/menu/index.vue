<template>
  <div class="container">
    <header>
        <nuxt-link to="/">
      <div id="logo">
          <img src="../../assets/images/logo.png" alt="">
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
     <div id="navmenuR" @click="showmenu = !showmenu">
      <img id="menuham" src="../../assets/images/menuham.png" />
     </div> 
      <div id="navmenu" v-if="showmenu" >
        <ul>
          <nuxt-link to="/menu">
          <li>
           Plato Fuerte
        </li>
          </nuxt-link>
         <nuxt-link no-prefetch to="/menu/entradas">
          <li>
            Entradas
          </li>
          </nuxt-link>
        <nuxt-link to="/menu/bebidas">
          <li>
            Bedidas
          </li>
        </nuxt-link>
        <nuxt-link to="/menu/servicios">
          <li>
          Servicios
          </li>
        </nuxt-link>
        <li class="carrito" @click="dialogTableVisible=true">Orden</li>
      </ul>
      </div>
    </header>
    <el-dialog class="dialogOrder" title="Informacion de la Orden" :visible.sync="dialogTableVisible">
          <div v-if="!pedidoActual.length">
            <h2>No tiene ningun plato seleccionado</h2>
          </div>
          <div v-else>
            <div class=""  v-for="(pedido,index) in pedidoActual" :key="index">
              <div>
                {{index+1}}
                {{pedido.nombre}}
                ${{pedido.precio}}
              </div>
              <div>
                <el-button type="danger" @click="cancelarComida(index)" icon="el-icon-delete" circle></el-button>
              </div>
            </div>
            <div>
              <p>Ingrese su nombre y su numero de cedula</p>
              <el-input type="text"
                placeholder="Nombre-12314566"
                v-model="id">
              </el-input>
              <p>Ingrese el lugar donde quiere que llegue el pedido</p>
              <el-input type="text"
                placeholder="Ingresa el lugar"
                v-model="ubicacion">
              </el-input>
              <el-button type="success" @click="confirmarOrden(pedidoActual)">Confirmar Orden<i class="el-icon-check el-icon-right"></i></el-button>
            </div>
          </div>
          
            
            
    </el-dialog>
    <div class="food">
      <cardmeals :listproducts="listproductsActivos"/>
    </div>
  </div>
</template>

<script>
import {db} from "@/services/firebase";
import cardmeals from '~/components/cardmealsMenu.vue'
import { format } from 'path'
export default {
   data: function () {
    return {
      showmenu:true,
      dialogTableVisible:false,
      ubicacion:"",
      id:""
    }
  },
  components: {
    cardmeals
  },
  methods:{
     cancelarComida(index){
     this.$store.dispatch('deleteMeal',index)
    },
    confirmarOrden(pedidoActual){
      // let costototal
      // for (let index = 0; index < pedidoActual.length; index++) {
      //   costototal=costototal+ pedidoActual[index].precio;
        
      // }
      // alert(costototal)
      db.collection("pedidos").add({
              costototal:pedidoActual[0].precio,
              productos:pedidoActual,
              ubicacion:this.ubicacion,
              id:this.id
          })
          .then(function(docRef) {
            this.dialogTableVisible=false
              console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
              console.error("Error adding document: ", error);
          });
      
    }
  },
  computed:{
    listproductsActivos(){
      return this.$store.state.products.filter(product => product.cantidad > 0)
    },
    pedidoActual(){
      return this.$store.state.pedidoActual
  }
  }

}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Montserrat|Reenie+Beanie&display=swap');
.dialogOrder{
  display: grid;
  align-content: center;
}
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
    #menuham{
      width:50px;
      padding:10px;
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
      .carrito{
        position: absolute;
        right:0;
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
.food{
      height:100vh;
      background-color:#b59f95;
      padding:50px;
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
    #navmenu{
      // display: none;
    float: left;
    margin: 0px 10px 0px 0px;
    text-align:center;
    vertical-align: center;
    ul{
      list-style: none;
      display: flex;
      flex-direction: column;
      position:absolute;
      background-color:#fff;
      padding-left:20px;
      a{
        text-decoration: none;
        color:black;
      }
      li{
        width: auto;
        height: 60px;
        // padding: 20px;
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
  
}


</style>
