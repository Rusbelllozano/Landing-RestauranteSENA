<template>
  <div class="cocina">
      
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
      width="180"
      prop="name">
    </el-table-column>
    <el-table-column
      label="ID Mesa"
      width="100"
      prop="address">
    </el-table-column>
    <el-table-column
      label="Pedido"
      width="180"
      prop="producto">
    </el-table-column>
    <el-table-column
      label="Adicionales"
      width="180"
      prop="producto">
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
  <el-button type="success">Guardar cambios</el-button>
  
  </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189',
          producto:"pollo"
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189',
          producto:"pollo"
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189',
          producto:"pollo"
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189',
          producto:"pollo"
        }]
      }}
}
</script>

<style scoped>
.cocina{
    padding: 100px;
}
</style>