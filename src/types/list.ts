export enum Category {
  News = 'news',
  Essay = 'essay'
}

export interface IArticle {
  title: string
  publishDate: string
  category: Category
  url: string
}