import { marked } from 'marked';

export function excerptHtml(raw: string) {
  const [before] = raw.split('<!--more-->');
  return marked.parse((before ?? '').trim());
}