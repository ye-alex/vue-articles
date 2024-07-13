<script setup lang="ts">
import { Category, type IArticle } from '@/types/list'
import { computed, ref } from 'vue'

const entries = ref<IArticle[]>(window.LATEST_ARTICLES)
const filters = ref({ news: true, essay: true })

const formattedDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  const options: Intl.DateTimeFormatOptions = { month: 'long', day: '2-digit' }

  return date.toLocaleDateString('en-US', options)
}

const isRecentDate = (dateStr: string): boolean => {
  const date = new Date(dateStr)
  const currentDate = new Date()
  const differenceInTime = currentDate.getTime() - date.getTime()
  const differenceInDays = differenceInTime / (1000 * 3600 * 24)

  return differenceInDays <= 7
}

const filteredEntries = computed(() => {
  return entries.value
    ?.filter((entry) => {
      return (
        isRecentDate(entry.publishDate) &&
        ((entry.category === Category.News && filters.value.news) ||
          (entry.category === Category.Essay && filters.value.essay))
      )
    })
    .sort((a, b) => {
      const dateA = new Date(a.publishDate)
      const dateB = new Date(b.publishDate)

      return dateB.getTime() - dateA.getTime()
    })
    .slice(0, 5)
})
</script>

<template>
  <div class="latest-updates">
    <div class="filters">
      <label><input type="checkbox" v-model="filters.news" />News</label>
      <label><input type="checkbox" v-model="filters.essay" />Essays</label>
    </div>
    <ul>
      <li v-if="!filteredEntries.length" class="list-item">No Articles</li>
      <li v-for="entry in filteredEntries" :key="entry.url">
        <a :href="entry.url" :title="entry.title" target="_blank" rel="noopener noreferrer">
          <span class="list-title">{{ entry.title }}</span>
          <span>{{ formattedDate(entry.publishDate) }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.list-item {
  font-weight: 600;
  padding-top: 2rem;
  text-align: center;
}

.filters {
  display: flex;
  justify-content: center;
}

.filters label:first-child {
  margin-right: 1rem;
}

.latest-updates {
  min-height: 200px;
  min-width: 320px;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
}

.latest-updates ul {
  list-style-type: none;
  padding: 0;
}

.latest-updates li:not(:last-child) {
  padding-bottom: 0.5rem;
}

.latest-updates a {
  display: flex;
  justify-content: space-between;
}

.list-title {
  width: 85%;
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
}
</style>
