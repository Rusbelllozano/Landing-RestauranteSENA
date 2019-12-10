<template>
  <div class="editar">
    <h1>Editar Producto</h1>
    <el-form label-width="100px" :model="form">
        <el-form-item label="Imagen">
            <el-input v-model="form.urlimg"></el-input>
        </el-form-item>
        <el-form-item label="Nombre">
            <el-input v-model="form.nombre"></el-input>
        </el-form-item>
        <el-form-item label="Descripción">
            <el-input v-model="form.descripcion"></el-input>
        </el-form-item>
        <el-form-item label="Cantidad">
            <el-input v-model="form.cantidad"></el-input>
        </el-form-item>
        <el-form-item label="Categoria">
           <el-select v-model="form.categoria" placeholder="Por favor selecciona la categoria">
                <el-option label="Plato Fuerte" value="Plato Fuerte"></el-option>
                <el-option label="Bebidas" value="Bebidas"></el-option>
                <el-option label="Entradas" value="Entradas"></el-option>
                <el-option label="Servicios" value="Servicios"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Precio">
            <el-input type="number" v-model="form.precio"></el-input>
        </el-form-item>
    </el-form>
    <el-button type="success" @click="enviaredicion()">Guardar Cambios</el-button>
  </div>
</template>
<script>
import {db} from "@/services/firebase"
export default {
    created(){
        this.edicionproducto()
    },
data(){
    return {
       form:{
           nombre:"",
           precio:null,
           categoria:"",
           descripcion:"",
           cantidad:null,
           urlimg:""
       } 
    }
  },
  computed:{
    productoEditar(){
        return this.$store.state.editproducto
    }
  },
  methods:{
      enviaredicion(){
          db.collection('productos').doc(this.productoEditar.id).update(
              {
                nombre:this.form.nombre,
                cantidad:this.form.cantidad,
                descripcion: this.form.descripcion,
                categoria: this.form.categoria,
                precio: this.form.precio,
                linkimgpro: this.form.urlimg
              }
              ).then(function(){
        alert("Se ha editado el producto")
        location.reload();
      })
      },
      edicionproducto(){
          this.form.nombre=this.productoEditar.nombre
          this.form.cantidad=this.productoEditar.cantidad
          this.form.descripcion=this.productoEditar.descripcion
          this.form.categoria=this.productoEditar.categoria
          this.form.precio=this.productoEditar.precio
          this.form.urlimg=this.productoEditar.linkimgpro
      }
  }
}
</script>

<style>
.editar{
    padding: 100px;
}
</style>