<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">{{ fancyTitleQuotes }}</span>
      <p>{{ descriptionTruncated }}</p>
    </div>
    <div class="card-action">
      <button class="waves-effect waves-light btn red" @click="$emit('remove',note.id)">Remove</button>
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
    const fancyTitleQuotes = vue.computed(() => {
      return helperMethods.fancyQuotes(props.note.title)
    })
  return { descriptionTruncated, fancyTitleQuotes }
  }
}
</script>
