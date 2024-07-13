import type { IArticle } from './list';

declare global {
  interface Window {
    LATEST_ARTICLES: IArticle[];
  }
}
