<template>
    <div class="containfood">
        <div class="cardmeal" v-for="(meal,index) in meals" :key="index">
          <img :src='meal.img' alt="">
          <p>{{meal.text}}</p>
          <button> Comprar ahora</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
    return {
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
            text:"Salmon Salad"
        }
      ]
      }
    }
  }

</script>

<style lang="scss">
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
        }

        }
</style>
