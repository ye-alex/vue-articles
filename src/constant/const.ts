import { Category, type IArticle } from '@/types/list';

const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);

export const mockArticles: IArticle[] = [
  {
    title: 'Find new ways to travel north',
    publishDate: '2024-07-13T13:51:50.417Z',
    category: Category.News,
    url: '/articles/4738.html'
  },
  {
    title: 'When will it become possible to use time travel in order to fix your earlier mistakes?',
    publishDate: '2024-07-07T12:18:10.317Z',
    category: Category.Essay,
    url: '/articles/7256.html'
  },
  {
    title: '10 ways to write better text',
    publishDate: '2024-07-08T09:00:32.200Z',
    category: Category.News,
    url: '/articles/7247.html'
  },
  {
    title: 'Announcement: we have a new website category',
    publishDate: '2024-07-10T17:12:13.102Z',
    category: Category.News,
    url: '/articles/1749.html'
  },
  {
    title: 'Weekly news',
    publishDate: '2024-07-11T00:23:15.276Z',
    category: Category.News,
    url: '/articles/1538.html'
  },
  {
    title: 'In-depth travel guide for Tanzania',
    publishDate: '2024-07-07T11:12:43.003Z',
    category: Category.Essay,
    url: '/articles/2594.html'
  }
]

export const mockTestArticles: IArticle[] = [
  {
    title: 'Find new ways to travel north',
    publishDate: yesterday.toISOString(),
    category: Category.News,
    url: '/articles/4738.html'
  },
  {
    title: 'When will it become possible to use time travel in order to fix your earlier mistakes?',
    publishDate: yesterday.toISOString(),
    category: Category.Essay,
    url: '/articles/7256.html'
  },
  {
    title: '10 ways to write better text',
    publishDate: new Date().toISOString(),
    category: Category.News,
    url: '/articles/7247.html'
  },
]
