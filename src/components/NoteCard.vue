<template>
    <div class="card mb-4" :class="{'bg-light': allDone(noteIndex)}">
      <div class="card-body" :data-noteindex="noteIndex">
        <button v-if="admin" type="button" class="close" aria-label="Close" data-toggle="modal" data-target="#exampleModal"
                @click="sendIndex(noteIndex)"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h3 class="card-title" v-text="note.title" contentEditable="true" :data-noteindex="noteIndex" @blur="change"></h3>
        <p class="card-text" v-text="note.text" contentEditable="true" :data-noteindex="noteIndex" @blur="change"></p>
        <ul>
          <li v-for="(todo, todoIndex) in note.todos" :key="`${todoIndex} ${todo.text}`"
              v-text="todo.text"
              :class="{'finished': todo.status}"
              :style="{'cursor': admin ? 'text' : 'pointer'}"
              :contentEditable="admin"
              :data-todoindex="todoIndex"
              :data-noteindex="noteIndex"
              @blur="change"
              @click="clientToggleTodo([noteIndex, todoIndex])"
          ></li>
        </ul>
        <a href="#" class="card-link" @click="addTodo" v-if="admin">Add TODO</a>
      </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'NoteCard',
  props: {
    admin: Boolean,
    note: Object,
    noteIndex: Number,
  },
  computed: {
    ...mapGetters(['getNotes']),
  },
  methods: {
    ...mapActions(['toggleTodo', 'changeText', 'addTodoStore', 'addNote', 'deleteNoteStore']),
    sendIndex(noteIndex) {
      //сделал так для разнообразия))
      this.$emit('index', noteIndex);
    },
    allDone(index) {
      return this.getNotes[index].todos.every(el => el.status);
    },
    change(e) {
      const noteIndex = e.target.dataset.noteindex;
      const todoIndex = e.target.dataset.todoindex || null;
      const where = e.target.className.substring(5, e.target.className.length);
      const text = e.target.innerText;
      this.changeText([noteIndex, where, text, todoIndex])
    },
    addTodo(e) {
      this.addTodoStore(+e.target.parentElement.dataset.noteindex);
    },
    clientToggleTodo(val) {
      if (!this.admin) {
        this.toggleTodo(val);
      }
    },
  },
}
</script>

<style lang="scss">
</style>
