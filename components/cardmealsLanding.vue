<template>
<div>
  <div class="containfood">
        <div class="cardmeal" v-for="(meal,index) in listproducts" :key="index">
          <img :src='meal.linkimgpro' alt="">
          <p>{{meal.nombre}}</p>
          <nuxt-link to="/menu">
            <button> Comprar ahora</button>
          </nuxt-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  computed:{
    listproducts(){
      return this.$store.state.products.filter(product => product.cantidad > 0 && product.categoria === "Plato fuerte").slice(0,4)
    }
  },
}
</script>

<style lang="scss" scoped>
.containfood{
    display:grid;
    grid-template-columns: repeat(2,250px);
    grid-gap: 20px;
}
 .cardmeal{
        display: grid;
      justify-items: center;
        width:250px;
        height:250px;
        color: #000;
        background-color: #fff;
        margin:20px 0px 0px 100px;
        img{
            width:100%;
            height: 150px;
        }
        h1{
          text-align:left;
          font-family: 'Reenie Beanie', cursive;
          font-size:100px;
          margin-bottom:0px;
        }
        p{
          padding: 0px 0px 5px 5px;
          font-family: 'Montserrat', sans-serif;
          font-size:1em;
        }
        button{
          color:#fff;
          background-color: #4b382f;
          border:.5px solid black;
          height: 40px;
          width: 100px;
          cursor: pointer;
        }

        }
@media screen and (max-width: 800px) {
  .cardwelcome{
        padding:50px;
        margin:0px;
  }
  .cardmeal{
        margin:20px 0px 0px 50px;
        }
}
@media screen and (max-width: 700px) {
  .containfood{
    display:grid;
    grid-template-columns: 250px;
    grid-gap: 20px;
}
}  
</style>
