<script setup lang="ts">
import ListComponent from './components/ListComponent.vue'
import { mockArticles } from './constant/const'

// pass mocked data to the window object
window.LATEST_ARTICLES = mockArticles
</script>

<template>
  <div class="content-wrapper">
    <header class="list-title"><h2>Latest Updates</h2></header>
    <main>
      <ListComponent />
    </main>
  </div>
</template>

<style scoped lang="css">
.content-wrapper {
  padding: 24px;
}

.list-title {
  text-align: center;
}
</style>
