<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">{{ fancyTitleQuotes }}</span>
      <p>{{ descriptionTruncated }}</p>
    </div>
    <div class="card-action">
      <button class="waves-effect waves-light btn" @click="$emit('remove',note.id)">Remove</button>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import { truncateText, fancyQuotes } from '../use/helper';
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const descriptionTruncated = computed(() => {
      return truncateText(props.note.description)
    })
    const fancyTitleQuotes = computed(() => {
      return fancyQuotes(props.note.title)
    })
  return { descriptionTruncated, fancyTitleQuotes }
  }
}
</script>
