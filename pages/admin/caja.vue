<template>
  <div class="admin">
      <h1>Pedido Realizados</h1>
      <el-table
    :data="listpedidos"
    style="width: 100%">
    <el-table-column
      label="Fecha de Creación"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.fecha }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Id-Cliente"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-user"></i>
        <span style="margin-left: 10px">{{ scope.row.id }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Valor a Pagar"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>Ubicación: {{ scope.row.ubicacion}}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.costototal}}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="Operations">
      <template slot-scope="scope">
        <el-button v-if="!scope.row.pagado"
          size="mini"
          @click="pagarPedido(scope.row)" plain type="danger">Pagar</el-button>
        <p v-else>Pagado</p>
      </template>
    </el-table-column>
  </el-table>  
  </div>
</template>

<script>
import {db} from "@/services/firebase.js"
export default {
  methods:{
    
    pagarPedido(pedido){
      if(pedido.despachado){
        db.collection('pedidos').doc(id).update({pagado: true}).then(function(){
        alert("Se ha registrado el pago del pedido")
        location.reload();
      })
      }else{
        alert("El pedido no ha sido despachado")
      }
      
    }
  },
  computed:{
    listpedidos(){
      return this.$store.state.pedidos
    }
  },
    data() {
      return {
      }}
}
</script>

<style>
.admin{
    padding: 100px;
}
</style>