<template>
  <div class="mb-5">
    <h1 class="mb-5">Admin View</h1>
    <NoteCard :admin="true"
              :note="note"
              :noteIndex="noteIndex"
              v-for="(note, noteIndex) in getNotes"
              :key="`${noteIndex}${note.name}`"
              v-on:index="indexToDel = $event"
    />
    <a href="#" class="btn btn-primary" @click="addNote">Add Note</a>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Delete Note?</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Sure?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="deleteNote(indexToDel)" data-dismiss="modal">Delete</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import NoteCard from "@/components/NoteCard";

export default {
  name: 'AdminView',
  components: {NoteCard},
  data: () => ({
    indexToDel: null,
  }),
  computed: {
    ...mapGetters(['getNotes']),
  },
  methods: {
    ...mapActions(['addNote', 'deleteNote']),
  },
}
</script>

<style lang="scss" scoped>
.card-body li {
  cursor: text;
}
</style>