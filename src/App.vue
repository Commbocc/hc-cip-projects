<template>
  <div id="app">

    <div is="Project" obj-id="12345"></div>

  </div>
</template>

<script>
import Project from './components/Project'

export default {
  name: 'app',
  components: { Project },
  data () {
    return {}
  }
}
</script>

<style src="./assets/main.scss" lang="scss"></style>
