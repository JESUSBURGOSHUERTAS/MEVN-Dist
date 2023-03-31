<template>
 <ul class="list-group">
  <li class="list-group-item list-group-item-action  border-bottom"
      style="cursor: pointer; border-color: #ddd;" v-for="(task, index) in tasks" :key="index"
      @click="this.$router.push(`/tasks/${task._id}`)">

    <div class="row">
      <div class="col-md-8">
        {{ index + 1 }}. {{ task.title }}
      </div>
      <div class="col-md-4">
        Precio: {{ task.precio }}
      </div>
    </div>

  </li>
</ul>


    
    

</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { getTasks } from "@/services/TaskService";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  methods: {
    async loadTasks() {
      const res = await getTasks();
      this.tasks = res.data;
    },
  },
  mounted() {
    this.loadTasks();
  },
});
</script>
