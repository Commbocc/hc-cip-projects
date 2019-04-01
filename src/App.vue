<template>
  <div class="">

    <nav aria-label="breadcrumb" class="bg-white">
      <ol class="breadcrumb bg-white">
        <li v-if="!isIndex" class="breadcrumb-item">
          <router-link to="/" class="">
            Capital Improvement Projects
          </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">{{ $store.state.pageTitle }}</li>
      </ol>
    </nav>

    <div v-if="$store.state.loading" class="py-5">
      <div class="container">
        <div class="h1 text-center text-secondary py-5">
          Loading <i class="fas fa-spinner fa-pulse"></i>
        </div>
      </div>
    </div>

    <router-view :key="$route.fullPath" v-show="!$store.state.loading"></router-view>

  </div>
</template>

<script>
import router from './router'
import store from './store'

export default {
  router,
  store,
  computed: {
    isIndex () {
      return (this.$route.name == "Index")
    }
  }
}
</script>

<style src="./assets/main.scss" lang="scss"></style>
