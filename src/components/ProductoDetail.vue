<template>

  <div class="col-md-4 offset-md-4"> 
<form @submit.prevent="handleUpdate()" class="card card-body"> 
  <h3 class="text-center h3 mb-3">Detalles</h3>

  <input
        type="text"
        placeholder="Escribe un codigo"
       v-model="currentTask.codigo"
        class="form-control mb-3"
        
      />

  <input
        type="text"
        placeholder="Escribe un titulo"
       v-model="currentTask.title"
        class="form-control mb-3"
        
      />

      <textarea
        rows="3"
        v-model="currentTask.description"
        placeholder="Escribe una descripción"
        class="form-control mb-3"
      >
      </textarea>

      <input
        type="text"
        placeholder="Precio"
       v-model="currentTask.precio"
        class="form-control mb-3"
        
      />

      <button class="btn btn-success mb-1">Update</button>
      <button class="btn btn-danger mb-1" @click="handleDelete()">
        Delete
      </button>
</form>

  </div>
   
  
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { deleteTask, getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      
      this.currentTask = res.data;
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        const res = await updateTask(this.$route.params.id, this.currentTask);
        console.log(res);
        this.$router.push("/");
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        const res = await deleteTask(this.$route.params.id);
        console.log(res);
        this.$router.push("/");
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>
