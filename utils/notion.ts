const { Client } = require('@notionhq/client');

// インスタンス
const notion = new Client({ auth: process.env.NOTION_TOKEN_KEY });

// DB
const DATABASE_ID = process.env.NOTION_DATABASE_ID as string;

export const fetchPages = async ({
  slug,
  tag,
}: {
  slug?: string;
  tag?: string;
}) => {
  // 配列で引数があったら代入する
  const and: any = [
    {
      property: 'Public',
      checkbox: {
        equals: true,
      },
    },
    {
      property: 'slug',
      rich_text: {
        is_not_empty: true,
      },
    },
  ];

  // slugがあった場合
  if (slug) {
    and.push({
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    });
  }

  // tagがあった場合
  if (tag) {
    and.push({
      property: 'tags',
      multi_select: {
        contains: tag,
      },
    });
  }

  return await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      and: and,
    },
    sorts: [
      {
        property: 'published',
        direction: 'descending',
      },
    ],
  });
};

export const fetchBlocksPageId = async (pageId: string) => {
  const data = [];

  let cursor = undefined;

  // 一回のfetchで100個分のbocksを持ってくるので、まだある時はもう百個をfetchするというイメージ
  while (true) {
    const {
      results,
      next_cursor,
    }: { results: Record<string, any>[]; next_cursor: string | null } =
      await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: cursor,
      });

    // 返ってきたresultsの中身だけを展開して、配列に含む
    data.push(...results);
    // nullでつぐがない場合は終了させる必要がある
    if (!next_cursor) break;
    cursor = next_cursor;
  }
  return { results: data };
};
