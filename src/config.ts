export const site = {
  title: 'Дудчани',
  description: 'Село Дудчани Нововоронцовського району Херсонської області',
  lang: 'uk',
  locale: 'uk_UA',
  defaultAuthor: 'Mixa',
  headerImage: { src: 'images/header.jpg', width: 1015, height: 276 },
  nav: [
    { label: 'Головна', href: '' },
    { label: 'Про село', href: 'pro-selo' },
  ],
} as const;

/** Усі тексти інтерфейсу — в одному місці (залишені як в оригінальній темі). */
export const ui = {
  menu: 'Menu',
  skip: 'Skip to content',
  search: 'Search',
  searchPlaceholder: 'Search …',
  recentPosts: 'Недавні записи',
  by: 'by',
  postedIn: 'This entry was posted in',
  bookmark: 'Bookmark the',
  permalink: 'permalink',
  postNavigation: 'Post navigation',
  footerBuiltWith: 'Proudly powered by',
  footerTheme: 'Theme: Misty Lake by',
} as const;

const base = () => import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Посилання на сторінку з урахуванням `base` та кінцевим слешем. */
export function withBase(path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return `${base()}/${clean}${clean ? '/' : ''}`;
}

/** Посилання на файл із public/ (без кінцевого слеша). */
export const assetUrl = (path: string): string => `${base()}/${path.replace(/^\/+/, '')}`;

export const formatDate = (d: Date): string =>
  d.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' });

export const formatTime = (d: Date): string =>
  d.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
