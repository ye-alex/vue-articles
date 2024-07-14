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
  <div class="list-wrapper">
    <div class="list-filter">
      <label><input type="checkbox" v-model="filters.news" />News</label>
      <label><input type="checkbox" v-model="filters.essay" />Essays</label>
    </div>
    <ul>
      <li v-if="!filteredEntries.length" class="list-item">No Articles</li>
      <li v-for="entry in filteredEntries" :key="entry.url">
        <a :href="entry.url" :title="entry.title" target="_blank" rel="noopener noreferrer">
          <p class="list-title">{{ entry.title }}</p>
          <p class="list-date">{{ formattedDate(entry.publishDate) }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="css">
.list-filter {
  text-align: center;
  font-size: 18px;
}

.list-filter label:first-child {
  margin-right: 16px;
}

.list-wrapper {
  border: 1px solid black;
  border-radius: 16px;
  padding: 16px;
}

.list-wrapper p {
  margin: 0;
}

.list-wrapper a {
  display: flex;
  justify-content: space-between;
}

.list-item {
  font-weight: 600;
  text-align: center;
}

.list-wrapper ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 0;
}

.list-title {
  width: 80%;
  overflow: hidden;
  text-wrap: nowrap;
  text-overflow: ellipsis;
}

.list-date {
  text-wrap: nowrap;
}

/* fill a title on movile devices */
@media (min-width: 280px) and (max-width: 480px) {
  .list-title {
    width: 67%;
  }
}
</style>
