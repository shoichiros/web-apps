<template>
  <div class="todo-container">
    <h2>ToDo App</h2>
    <input v-model="name" @keydown.enter="addItem(name)" class="todo-input" type="text" placeholder="ToDo...">
    <BaseButton class="todo-add-button" @buttonClick="addItem(name)" buttonName="登録" />

    <div class="todo-contents">
      <ul class="todo-lists">
        <div v-for="item in todoItems" :key="item.name"  class="todo-content">
          <input v-model="item.completed" class="todo-list-check" type="checkbox">
          <li class="todo-list" :class="{ 'todo-completed': item.completed }">
            {{ item.name }}
          </li>
          <BaseButton class="todo-delete-button" @buttonClick="deleteItem(item)" buttonName="削除" />
        </div>
      </ul>
    </div>

  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue"

export default {
  name: "todoApp",
  data() {
    return {
        todoItems: [],
    }
  },
  components: {
    BaseButton
  },
  methods: {
    addItem(item) {
      if(item) {
        const todoItem = { name: item, completed: false };
        this.todoItems.push(todoItem);
      }
    },
    deleteItem(item) {
      const todoIndex = this.todoItems.indexOf(item);
      this.todoItems.splice(todoIndex, 1);
    }
  }
}
</script>

<style scoped>
.todo-container {
  width: 400px;
  height: 100vh;
  margin: 50px auto 0;
}

.todo-input {
  color: #333;
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  padding: 15px;
  margin: 20px 0;
  width: 100%;
  outline: none;
  transition: .5s;
}

.todo-input:hover,
.todo-input:focus {
  box-shadow: 0 5px 5px rgba(0, 0, 0, .2);
}

.todo-input::placeholder {
  color: rgba(0, 0, 0, .4);
}

.todo-add-button {
  background: #555;
  color: #fafafa;
  border: none;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, .2);
  padding: 15px;
  margin: 0 auto;
  width: 100%;
  cursor: pointer;
}

.todo-contents {
  height: 300px;
  overflow-y: auto;
}

.todo-list-check {
  width: 25px;
  height: 25px;
}

.todo-lists {
  list-style: none;
  padding: 5px;
  margin: 5px 0 0;
  width: 100%;
}

.todo-content {
  display: flex;
  align-items: center;
  min-height: 50px;
  width: 100%;
}

.todo-list {
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  font-size: 16px;
  text-align: left;
  padding: 5px;
  margin: 5px 0 0;
  width: 100%;
  height: 100%;
  transition: .5s;
}

.todo-completed {
  color: #888;
  text-decoration: line-through;
}

.todo-delete-button {
  width: 60px;
  height: 30px;
}

@media screen and (max-width: 420px){
  .todo-container {
    width: 95%;
  }
}

</style>