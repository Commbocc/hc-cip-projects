<template>
  <div id="hc-main" class="d-flex flex-column">

    <header>
      <!-- https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/G1 -->
      <nav is="hc-navbar" logo-href="./" skip-content-link="#main-content"></nav>

      <ol is="hc-banner" :title="$store.state.pageTitle">
        <!-- ancestors -->
        <li class="breadcrumb-item"><a href="https://www.hillsboroughcounty.org/">Home</a></li>
        <li v-if="!isIndex" class="breadcrumb-item"><a href="./">Capital Improvement Projects</a></li>
      </ol>
    </header>

    <div id="main-content" class="bg-white flex-grow-1">
      <div v-if="$store.state.loading" class="py-5">
        <div class="container">
          <div class="h1 text-center text-secondary py-5">
            Loading <i class="fas fa-spinner fa-pulse"></i>
          </div>
        </div>
      </div>

      <router-view :key="$route.fullPath" v-show="!$store.state.loading"></router-view>
    </div>

    <footer is="hc-footer" class="d-print-none mt-auto"></footer>

  </div>
</template>

<script>
export default {
  computed: {
    isIndex () {
      return (this.$route.name == "Index")
    }
  }
}
</script>

<style src="./assets/main.scss" lang="scss"></style>
