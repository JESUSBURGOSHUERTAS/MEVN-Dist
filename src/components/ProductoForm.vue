<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="saveTask" class="card card-body">
      <h3 class="text-center h3 mb-3">Crear Producto</h3>

      <input
        type="text"
        placeholder="Código"
        v-model="task.codigo"
        class="form-control mb-3"
        
      />

      <input
        type="text"
        placeholder="Escribe un producto"
        v-model="task.title"
        class="form-control mb-3"
        
      />

      <textarea
        rows="3"
        placeholder="Escribe una descripción"
        v-model="task.description"
        class="form-control mb-3"
      ></textarea>

      <input
        type="text"
        placeholder="Precio"
        v-model="task.precio"
        class="form-control mb-3"
        
      />

      <button class="btn btn-primary"
      :disabled="!task.title || !task.description || !task.codigo"
      >Guardar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from "@/services/TaskService";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      const res = await createTask(this.task);
      console.log(res);
      this.$router.push({ name: "tasks" }); // Redirecciona a la web principal
    },
  },
});
</script>
