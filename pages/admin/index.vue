<template>
<div>
  <div class="login">
    <label>Correo Electronico</label>
    <el-input v-model="account.usermail" placeholder="Ingrese el correo" ></el-input>
    <label>Contraseña</label>
    <el-input v-model="account.userpassword" placeholder="Ingrese la comtraseña" ></el-input>
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
      }},
      methods:{
        login(){
          this.$store.dispatch("users/login", this.account);
          this.$router.push("/admin/pedidos")
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