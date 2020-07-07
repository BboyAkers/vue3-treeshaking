<template>
  <div class="section">
    <div class="row">
      <div class="row">
        <div class="input-field col s4">
          <input placeholder="Enter Title" id="note_title" v-model="noteTitle" type="text" class="validate">
          <label for="note_title">Note Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <textarea id="note_description" v-model="noteDescription" placeholder="Enter Note Description" class="materialize-textarea validate"></textarea>
          <label for="note_description">Note Description</label>
        </div>
      </div>
      <div class="col s12">
        <button class="waves-effect waves-light btn" @click="addNote(noteTitle, noteDescription, notes)">Add</button>
      </div>
    </div>
    <div class="row">
      <div v-for="note in notes" :key="note.id" class="col s4">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">{{note.title}}</span>
                <p>{{note.description}}</p>
              </div>
              <div class="card-action">
                <button class="waves-effect waves-light btn" @click="removeNote(note.id)">Remove</button>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>

<script>

import * as vue from 'vue'
import { useNotes } from '../use/notes'

export default {
  setup() {
    const noteTitle = vue.ref('')
    const noteDescription = vue.ref('')

    const { 
      add: addNote,
      remove: removeNote,
      notesArray: notes,
      notes: notesMap
    } = useNotes([
      { title: 'Say hi to coworkers', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { id: 2, title: 'Car Keys are on the couch', description: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s' },
      { title: 'Water bottle is by the door', description: 'Lorem Ipsum is not simply random text.' }
    ])

    console.log(notesMap)
    
    return { notes, noteTitle, noteDescription, addNote, removeNote }
  }
}
</script>