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
        <h1>Pedido Realizados</h1>
      <el-table
    :data="listpedidos"
    style="width: 100%">
    <el-table-column
      label="Productos"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <div v-for="(productos,index) in scope.row.productos" :key="index" >
          <span style="margin-left: 10px">{{productos.nombre}}</span>
        </div>
        
      </template>
    </el-table-column>
    <el-table-column
      label="Precio"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Ubicación: {{ scope.row.ubicacion }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.costototal }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="Acciones" width="300">
      <template slot-scope="scope">
        <el-switch
          style="display: block"
          v-model="scope.row.activo"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="Activo"
          inactive-text="Cancelado">
        </el-switch>
      </template>
    </el-table-column>
  </el-table>
  <el-button type="success">Success</el-button>
      </div>
  </div>
</template>

<script>
import {auth } from "@/services/firebase";
import Cookie from "js-cookie";
export default {
    computed:{
      listpedidos(){
        return this.$store.state.pedidos
      }
    },
    data() {
      return {
        value2:false,
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          activo:true
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
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