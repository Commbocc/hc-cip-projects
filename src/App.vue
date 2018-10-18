<template>
  <div id="app">

    <div v-if="$store.state.loading" class="py-5">
      <div class="container">
        <div class="h1 text-center text-secondary py-5">
          Loading <i class="fas fa-spinner fa-pulse"></i>
        </div>
      </div>
    </div>

    <router-view v-show="!$store.state.loading"></router-view>

  </div>
</template>

<script>
export default {}
</script>

<style src="./assets/main.scss" lang="scss"></style>
