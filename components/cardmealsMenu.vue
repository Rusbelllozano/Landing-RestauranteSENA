<template>
<div>  
    <div class="containfood">
        <div class="cardmeal" v-for="(meal,index) in meals" :key="index">
          <img :src='meal.img' alt="">
          <el-dialog title="Informacion del producto" :visible.sync="dialogTableVisible">
  <el-table :data="selectedMeal">
    <el-table-column property="text" label="Nombre" width="150"></el-table-column> 
  </el-table>
  <!-- <img :src="selectedMeal[0].img" alt=""> -->
  <el-checkbox v-model="checked">Opción</el-checkbox>
</el-dialog>

          <div class="info">
            <p>{{meal.text}}</p>
            <button @click="selectMeal(meal.text, meal.img)"> Comprar ahora</button>
          </div>
          
        </div>
    </div>
</div>
    
</template>

<script>
export default {
  methods:{
    selectMeal(meal,mealimg){
      this.dialogTableVisible = true
      this.selectedMeal=[
        {
          text:meal,
          img:mealimg
        }
      ]
      
      
    }
  },
    data () {
    return {
      dialogTableVisible: false,
      selectedMeal:[],
      meals:[
        {
            img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            text:"Salmon vegetable"
        },
        {
            img:'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            text:"Egg Eagle"
        },
        {
            img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            text:"Spaguetii Green"
        },
        {
            img:'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            text:"Salmon Crush"
        },
        {
            img:'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            text:"Salmon Sweety"
        },
        {
            img:'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            text:"Salmon Salad"
        },
        {
            img:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            text:"Spaguetii Green"
        },
        {
            img:'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            text:"Vegetable plus"
        },
      ]
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
