import { RichTextType, PageType } from '../types/types';
export const getText = (richTextArray: RichTextType[]) => {
  try {
    const textArray = richTextArray.map((text) => text.plain_text);
    return textArray.join('');
  } catch (error) {
    console.log(error);
  }
  //   失敗してもうまくいってもstringがいくようにしている
  return '';
};

// 型定義したものの中のものを明記して型定義する方法もある
export const getCover = (cover: PageType['cover']) => {
  if (cover && cover.file) return cover.file.url;
  if (cover && cover.external) return cover.external.url;
  return '/noimage.png';
};

export const getDate = (date: { start: string }) => {
  try {
    return date.start;
  } catch (error) {
    console.log(error);
  }
  return '-';
};

export const getMultiSelected = (multiSelected: [{ name: string }]) => {
  try {
    return multiSelected.map((select) => select.name);
  } catch (error) {
    console.log(error);
  }
  return [];
};
