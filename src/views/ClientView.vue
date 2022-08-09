<template>
  <div>
    <h1 class="mb-5">Client View</h1>
    <NoteCard :admin="false"
              :note="note"
              :noteIndex="noteIndex"
              v-for="(note, noteIndex) in getNotes"
              :key="`${noteIndex}${note.name}`"
    />
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import NoteCard from "@/components/NoteCard";

export default {
  name: 'ClientView',
  components: {NoteCard},
  computed: {
    ...mapGetters(['getNotes']),
  },
}
</script>