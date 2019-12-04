<template>
    <div>
        <div class="cardwelcome">
          <h1>Escuela de Gastronomia y Turismo del Meta</h1>
          <a href="#chef">
            <button>Conoce más</button>
          </a>
          
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
          text-align:center;
          font-family: 'Reenie Beanie', cursive;
          font-size:65px;
          margin-bottom:0px;
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
@media screen and (max-width: 1000px) {
  .cardwelcome{
        padding:50px;
        margin:0px;
  }
}   
@media screen and (max-width: 700px) {
  .cardwelcome{
        h1{
          font-size:70px;
        }
  }
} 
</style>
