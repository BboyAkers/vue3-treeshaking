<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">{{note.title}}</span>
      <p>{{descriptionTruncated }}</p>
    </div>
    <div class="card-action">
      <button class="waves-effect waves-light btn" @click="$emit('remove',note.id)">Remove</button>
    </div>
  </div>
</template>
<script>
import * as vue from 'vue'
import helperMethods from '../use/helper';
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const descriptionTruncated = vue.computed(() => {
      return helperMethods.truncateText(props.note.description)
    })
  return { descriptionTruncated }
  }
}
</script>
