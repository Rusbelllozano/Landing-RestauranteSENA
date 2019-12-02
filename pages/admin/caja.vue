<template>
  <div class="admin">
      <el-button type="primary">Primary</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="primary">Primary</el-button>
      <h1>Pedido Realizados</h1>
      <el-table
    :data="listpedidos"
    style="width: 100%">
    <el-table-column
      label="Fecha de Creación"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
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
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Pagado</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Recibido</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button type="success">Success</el-button>
  
  </div>
</template>

<script>
export default {
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