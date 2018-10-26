<template>
  <div>
    <Header/>
    <Content/>
  </div>
</template>

<script>
import Header from '~/components/home/header.vue'
import Content from '~/components/home/content.vue'

export default {
  components: {
    Header,
    Content,
  },
}
</script>
