<template>
  <div>
    <label for="todoInput">Add a to do item</label>
    <input type="text" name="todoInput" v-model="inputNote">
    <button @click="addNote(inputNote)">Add</button>
    {{ notes }}

    <div>
      <ul>
        <li v-for="note in notes" :key="note.id" >{{note.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

import * as vue from 'vue'

export default {
  setup() {
    const inputNote = vue.ref('')
    const notes = vue.ref([
      {id: 1,title: 'Say hi to coworkers'},
      {id: 2,title: 'Car Keys are on the couch'},
      {id: 3,title: 'Water bottle is by the door'}])
    
    // const id = computed (
    //   () = {
    //     const length = 
    //   }
    // )

    function addNote(newNote) {
      notes.value.push({
        id: 43,
        title: newNote})
      // console.log(newNote);
      inputNote.value = ''
    }


  return { notes, inputNote, addNote }
  }
}
</script>