import { ParsedUrlQuery } from 'querystring';
import { ReactNode } from 'react';
import { BlockType } from 'notion-block-renderer';

export type LayoutProps = {
  children: ReactNode;
};

export type PageProps = {
  slug: string;
  name: string;
  author: string;
  cover: string;
  published: string;
  tags: string[];
  content: string;
};

// index.tsx内にpropsで渡すための型定義
export type IndexProps = {
  pages: PageType[];
};

export type TagProps = IndexProps & { tag: string };

export type sampleTypes = {
  page: PageType;
};

export type ArticleProps = {
  page: PageType;
  blocks: BlockType[];
};

export type ArticleMetaProps = sampleTypes;

// blocksのデータを入れるための
export type BlocksProps = {
  block: BlockType;
};

export type Params = ParsedUrlQuery & {
  slug?: string;
  tag?: string;
};

// fetchしたデータの型定義
// cover内のオブジェクトをとる時に、fileなのかextarnalなのかわからないので指定する
export type FileType = {
  file?: { url: string };
  external?: { url: string };
};

// リッチテキストの装飾をした時にここの型が切り替わる
export type AnnotationType = {
  bold: boolean;
  code: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  color: string;
};

// マークダウンテキストになるであろう部分
export type RichTextType = {
  plain_text: string;
  href: string | null;
  annotations: AnnotationType;
};

// Notion内でカスタマイズするプロパティ
export type PropertyType = {
  Name: { title: RichTextType[] };
  author: { rich_text: RichTextType[] };
  slug: { rich_text: RichTextType[] };
  published: { date: { start: string } };
  Public: { checkbox: boolean };
  tags: { multi_select: [{ name: string }] };
};

export type PageType = {
  id: string;
  cover: FileType | null;
  properties: PropertyType;
};
