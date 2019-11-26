<template>
  <div class="admin">
    <el-button type="danger" @click="logout()" round>Cerrar Sesion</el-button>
       <nuxt-link to="/admin/pedidos">
    <el-button type="primary">Pedidos</el-button>
    </nuxt-link>
    <nuxt-link to="/admin/productos">
    <el-button type="primary">Productos</el-button>
    </nuxt-link> 
      <div>
        <h1>Productos</h1>
        <el-table
      :data="tableDataproductos"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Creacion"
        width="180"></el-table-column>
        <el-table-column
        prop="name"
        label="Nombre"
        width="180"></el-table-column>
      </el-table>
      <nuxt-link to="/admin/productos/nuevo">
    <el-button type="primary" plain>Crea nuevo producto</el-button>
    </nuxt-link> 
      
 
      </div>
      
  
  </div>
</template>

<script>
import {auth } from "@/services/firebase";
import Cookie from "js-cookie";
export default {
    data() {
      return {
        value2:false,
        tableDataproductos: [{
            date: '2016-05-03',
            name: 'Pollo',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Carne',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }],
        
      }},
      methods:{
        async logout(){
          await auth.signOut()
          await Cookie.remove("access_token");
          location.href="/admin";
        }
      }
}
</script>

<style scoped>
.admin{
    padding: 100px;
}
</style>