<template>
<div>
  <div class="login">
    <label>Correo Electronico</label>
    <el-input type="email" v-model="account.usermail" placeholder="Ingrese el correo" ></el-input>
    <label>Contraseña</label>
    <el-input type="password" v-model="account.userpassword" placeholder="Ingrese la comtraseña" ></el-input>
    <div v-if="isError"><p>{{errMsg}}</p></div>
    <el-button type="primary" @click="login()">Iniciar Sesion</el-button>
  </div>
</div>
  
</template>

<script>
export default {
    data() {
      return {
        account:{
            usermail:"",
        userpassword:"",
        },
        isError:false,
        errMsg:""
      }},
      methods:{
        login(){
          this.$store.dispatch('users/login', this.account).catch(error =>{
            this.isError=true;
            this.errMsg= error.code
            setTimeout(() => {
              this.isError=false 
            }, 5000);
            
          })
          
        }
      }
}
</script>

<style scoped>
.login{
  padding: 200px;
  width: 700px;
  display:grid;
  grid-gap:10px;
}
.admin{
    padding: 100px;
}
</style>