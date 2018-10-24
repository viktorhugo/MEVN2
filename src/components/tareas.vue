
<template>
  <div>
    <h1>This is an about page</h1>
    <div v-for="tarea in datos" :key="tarea.tittle">
      <span><b>{{ tarea.titulo }}</b></span><br />
      <span>{{ tarea.descripcion }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import servicioTareas from "@/services/ServicioTareas.js";
export default {
  data() {
    return {
      datos: []
    };
  },
  mounted() {
    this.traerTareas();
    //this.traerDatos();
  },
  methods: {
    traerTareas() {
      axios.get("http://localhost:3000/tareas").then(response => {
        this.datos = response.data;
        console.log(response.data);
      });
    },
    async traerDatos() {
      const response = await servicioTareas.obtenerTareas();
      this.datos = response.data;
    }
  }
};
</script>

<style scoped>
</style>