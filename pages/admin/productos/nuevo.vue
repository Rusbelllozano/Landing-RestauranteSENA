<template>
<div class="formNew">
  <nuxt-link to="/admin/productos">
    <el-button type="primary">Volver</el-button>
    </nuxt-link>
  <h1>Nuevo producto</h1>
  <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
  <el-form-item label="Nombre" prop="name">
    <el-input v-model="ruleForm.name" placeholder="Escribe un nombre del producto" ></el-input>
  </el-form-item>
  <el-form-item label="Categoria" prop="region">
    <el-select v-model="ruleForm.region" placeholder="Elige una cateogoria">
      <el-option label="Plato fuerte" value="Plato fuerte"></el-option>
      <el-option label="Entradas" value="Entradas"></el-option>
      <el-option label="Bebidas" value="Bebidas"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="Descripcion" prop="description">
  <el-input 
  type="textarea"
  :rows="2"
  placeholder="Escribe una descripcion del producto"
  v-model="ruleForm.description">
</el-input>
</el-form-item>
<el-form-item label="Precio" prop="precio">
  <el-input 
  placeholder="Ingresa el precio del producto"
  v-model="ruleForm.precio">
</el-input>
</el-form-item>
<el-form-item>
    <el-button type="primary" @click="adicionales = true">Agregar adicionales</el-button>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
</el-form>
<div class="newFormAdicionales" v-if="adicionales">
  <el-button type="primary" @click="agregarAdicional()">Agregar otro adicional</el-button>
    <el-button @click="resetForm('ruleForm')">Limpiar</el-button>
    <el-form v-for="(list,index) in listaadicionales" :key="index"  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" >
      <h3>Adicional #{{index+1}}</h3>
  <el-form-item label="Nombre" prop="name">
    <el-input v-model="ruleForm.name" placeholder="Escribe un nombre del producto" ></el-input>
  </el-form-item>
  <el-form-item label="Precio" prop="precio">
    <el-input 
      placeholder="Ingresa el precio del producto"
      v-model="ruleForm.precio">
    </el-input>
  </el-form-item>
</el-form>
<el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
</div>


</div>
  
</template>

<script>
export default {
    data() {
      return {
        dialogImageUrl: '',
        adicionales:false,
        dialogVisible: false,
        listaadicionales:[],
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Por favor ingrese el nombre del producto', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Por favor seleccione una categoria', trigger: 'change' }
          ],
          description: [
            { required: true, message: 'Por favor ingrese una descripcion', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
        }
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      agregarAdicional() {
        this.listaadicionales.push([{nombre:"", precio:""}])
      }
    }
  }
</script>

<style scoped>
.formNew{
  padding: 100px;
  display: grid;
}
.newFormAdicionales{
  padding: 150px;
  background-color:#d0d0d0;
}
</style>