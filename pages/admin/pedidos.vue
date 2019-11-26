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
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="Date"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Name"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Name: {{ scope.row.name }}</p>
          <p>Addr: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="Operations" width="300">
      <template slot-scope="scope">
        <el-switch
          style="display: block"
          v-model="value2"
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