<template>
    <div>
        <div class="cardwelcome">
          <h1>The Table</h1>
          <!-- <h2>Cocina de alta calidad</h2> -->
          <p>Cocina de alta calidad a un precio accesible</p>
          <button> Conoce más</button>
        </div>
    </div>
</template>

<script >
export default {

}
</script>

<style lang="scss" scoped>
    .cardwelcome{
        display: grid;
      justify-items: center;
        width:500px;
        height: 300px;
        padding:50px;
        color: #000;
        margin:100px 0px 0px 100px;
        h1{
          text-align:left;
          font-family: 'Reenie Beanie', cursive;
          font-size:100px;
          margin-bottom:0px;
        }
        p{
          padding: 0px 0px 15px 20px;
          font-family: 'Montserrat', sans-serif;
          font-size:1.5em;
        }
        button{
          color:#fff;
        background-color: #4b382f;
          border:.5px solid black;
          height: 50px;
          width: 150px;
          margin-top: 15px;
          
          
        }

        }
</style>
