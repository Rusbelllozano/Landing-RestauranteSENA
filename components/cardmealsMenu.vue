<template>
<div>  
    <div class="containfood">
        <div class="cardmeal" v-for="(meal,index) in listproducts" :key="index">
          <img :src='meal.linkimgpro' alt="">
          
          <div class="info">
            <p>{{meal.nombre}}</p>
            <button @click="selectMeal(meal)"> Comprar ahora</button>
          </div>
          
        </div>
    </div>
    <el-dialog class="dialogMeal" title="Informacion del producto" :visible.sync="dialogTableVisible">
            <div>
              <h1>{{selectedMeal.nombre}}</h1>
              <img class="imgselect" :src='selectedMeal.linkimgpro' alt="">
            <h2>${{selectedMeal.precio}}</h2>
            <p>{{selectedMeal.descripcion}}</p>
            </div>
            <div>
              <el-checkbox v-model="checked">Opción</el-checkbox>
            </div>
            <el-button type="success" @click="agregarproducto(selectedMeal)">Agregar al pedido<i class="el-icon-check el-icon-right"></i></el-button>
    </el-dialog>
</div>
    
</template>

<script>
export default {
  props:['listproducts'],
  methods:{
    agregarproducto(meal){
        this.$store.dispatch('addToOrder',meal)
    },
    selectMeal(meal){
      this.dialogTableVisible = true
      this.selectedMeal=meal
    }
  },
    data () {
    return {
      dialogTableVisible: false,
      checked:false,
      selectedMeal:{},
      }
    }
  }

</script>

<style lang="scss" scoped>
.containfood{
    display:grid;
    grid-template-columns: repeat(4,auto);
    grid-gap: 25px;
    max-width:1000px;
    justify-content:center;
    margin:0 auto;
}
.el-dialog{
  margin:0 auto;
}
.dialogMeal{
  display:grid;
  align-content: center;
  justify-items: center;
  // justify-content: center;
  .imgselect{
    max-width: 500px;
  }
}
 .cardmeal{
        display: grid;
      justify-items: center;
        width:300px;
        // height:300px;
        color: #000;
        background-color: #fff;
        .info{
            border:1px solid black;
            width:100%;
            display:grid;
            justify-content:center;
            justify-items:center;
            padding:15px;
        }
        img{
            width:100%;
            height: 200px;
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
          cursor:pointer;
          transition: .3s ease-in-out; 
        }
        button:hover{
          color:#fff;
          background-color: #000;
          border:.5px solid #fff;
    
        }

        }
@media screen and (max-width: 1300px) {
  .containfood{
  grid-template-columns: repeat(3,auto);
  }
}
@media screen and (max-width: 1000px) {
  .containfood{
  grid-template-columns: repeat(2,auto);
  }
}
@media screen and (max-width: 600px) {
  .containfood{
  grid-template-columns: auto;
  }
}
</style>
