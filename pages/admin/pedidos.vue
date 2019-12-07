<template>
  <div class="admin">
    <el-button type="danger" @click="logout()" round>Cerrar Sesion</el-button>
       <nuxt-link to="/admin/pedidos">
    <el-button type="primary">Pedidos</el-button>
    </nuxt-link>
    <nuxt-link to="/admin/productos">
    <el-button type="primary">Productos</el-button>
    </nuxt-link> 
    <div class="redireccion">
      <nuxt-link to="/admin/caja">
    <el-button type="primary" plain>Caja</el-button>
    </nuxt-link>
    <nuxt-link to="/admin/cocina">
    <el-button type="primary" plain>Cocina</el-button>
    </nuxt-link>
    </div>
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
        <p v-if="scope.row.pagado">Pagado</p>
        <p v-else>A pagar</p>
        <p v-if="scope.row.despachado">Despachado</p>
        <p v-else>Falta despachar</p>
      </template>
    </el-table-column>
  </el-table>
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
.redireccion{
  right: 0;
  top:0;
  margin: 10px 5px;
  position: absolute;
}
</style>