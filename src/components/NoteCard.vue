<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">{{note.title}}</span>
      <p>{{note.description}}</p>
    </div>
    <div class="card-action">
      <button class="waves-effect waves-light btn" @click="removeNote(note.id)">Remove</button>
    </div>
  </div>
</template>
<script>
// import * as vue from 'vue'
export default {
  props: {
    note: {
      type: Object,
      require: true
    }
  },
  setup() {
    
  }
}
</script>