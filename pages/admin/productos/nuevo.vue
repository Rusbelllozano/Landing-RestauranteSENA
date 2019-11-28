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
      <el-form-item label="Nombre" prop="nombre">
        <el-input v-model="ruleForm.nombre" placeholder="Escribe un nombre del producto"></el-input>
      </el-form-item>
      <el-form-item label="Categoria" prop="categoria">
        <el-select v-model="ruleForm.categoria" placeholder="Elige una cateogoria">
          <el-option label="Plato fuerte" value="Plato fuerte"></el-option>
          <el-option label="Entradas" value="Entradas"></el-option>
          <el-option label="Bebidas" value="Bebidas"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Cantidad" prop="cantidad">
        <el-input v-model="ruleForm.cantidad" placeholder="Ingrese la cantidad de producto"></el-input>
      </el-form-item>
      <el-form-item label="Descripción" prop="descripcion">
        <el-input 
          type="textarea"
          :rows="2"
          placeholder="Escribe una descripcion del producto"
          v-model="ruleForm.descripcion">
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
      <el-form v-for="(list,index) in listaadicionales" :key="index" ref="ruleForm" label-width="120px" >
        <h3>Adicional #{{index+1}}</h3>
        <el-form-item label="Nombre">
          <el-input v-model="adicional.name" placeholder="Escribe un nombre del producto" ></el-input>
        </el-form-item>
        <el-form-item label="Precio">
          <el-input 
            placeholder="Ingresa el precio del producto"
            v-model="adicional.precio">
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary">Create</el-button>
  </div>
</div>
  
</template>

<script>
import {db} from "@/services/firebase";
export default {
    data() {
      return {
        dialogImageUrl: '',
        adicionales:false,
        dialogVisible: false,
        listaadicionales:[],
        ruleForm: {
          nombre:'',
          precio:null,
          descripcion:"",
          cantidad:null,
          categoria:"",
          linkimgpro:"",
          adicionales:""
        },
        rules: {
          nombre: [
            { required: true, message: 'Por favor ingrese el nombre del producto', trigger: 'blur' },
          ],
          cantidad: [
            { required: true, message: 'Por favor ingresr la cantidad de producto', trigger: 'change' }
          ],
          categoria: [
            { required: true, message: 'Por favor seleccione una categoria', trigger: 'change' }
          ],
          descripcion: [
            { required: true, message: 'Por favor ingrese una descripcion', trigger: 'change' }
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
          console.log(valid)
          if (valid) {
            db.collection("productos").add({
              nombre:this.ruleForm.nombre,
              precio:this.ruleForm.precio,
              descripcion:this.ruleForm.descripcion,
              cantidad:this.ruleForm.cantidad,
              categoria:this.ruleForm.categoria,
              linkimgpro:"",
              adicionales:this.ruleForm.adicionales
          })
          .then(function(docRef) {
            
              console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
              console.error("Error adding document: ", error);
          });
            this.resetForm(formName)
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        console.log(formName)
        this.$refs[formName].resetFields();
      },
      agregarAdicional() {
        this.listaadicionales.push([{nombre:"", precio:""}])
        ruleForm.adicionales= this.listaadicionales 
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