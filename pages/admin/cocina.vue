<template>
  <div class="cocina">
      
      <h1>Pedido por despachar</h1>
      <el-table
    :data="listpedidospordespachar"
    style="width: 100%">
    <el-table-column
      label="Date"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.fecha }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Name"
      width="180"
      prop="name">
      <template slot-scope="scope">
        <div v-for="(producto,index) in scope.row.productos" :key="index">
          {{producto.nombre}}
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="Pedido"
      width="180"
      prop="producto">
    </el-table-column>
    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button v-if="!scope.row.despachado"
          size="mini" type="danger"
          @click="despacharPedido(scope.row.idfirebase)">Despachar</el-button>
          <p v-else>Ya fue despachado</p>
      </template>
    </el-table-column>
  </el-table>  
  </div>
</template>

<script>
import {db} from "@/services/firebase.js"
export default {
    data() {
      return {
        
      }},
      methods:{
        despacharPedido(idpedido){
          db.collection('pedidos').doc(idpedido).update({despachado: true}).then(function(){
        alert("Se ha registrado el despacho del pedido")
        location.reload();
      })
        }
      },
      computed:{
        listpedidospordespachar(){
          return this.$store.state.pedidos.filter(pedido => !pedido.despachado)
        }
      }
}
</script>

<style scoped>
.cocina{
    padding: 100px;
}
</style>