import ArticleMeta from 'components/ArticleMeta';
import Layout from 'components/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Params, RichTextType } from 'types/types';
import { ArticleProps } from '../../../types/types';
import { fetchPages, fetchBlocksPageId } from '../../../utils/notion';
import { getText } from 'utils/property';
import NotionBlocks from 'notion-block-renderer';

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await fetchPages({});
  const paths = results.map(
    (page: { properties: { slug: { rich_text: RichTextType[] } } }) => {
      return {
        params: {
          slug: getText(page.properties.slug.rich_text),
        },
      };
    }
  );
  return {
    paths: paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (parameterText) => {
  // パラメータの文字列を取得
  const { slug } = parameterText.params as Params;

  const { results } = await fetchPages({ slug: slug });
  const page = results[0];
  const pageId = page.id;
  const { results: blocks } = await fetchBlocksPageId(pageId);

  return {
    props: {
      page: page,
      blocks: blocks,
    },
    revalidate: 10,
  };
};

const Article = ({ page, blocks }: ArticleProps) => {
  return (
    <Layout>
      <article className="max-w-5xl">
        {/* meta section */}
        <div className="my-12">
          <ArticleMeta page={page} />
        </div>

        {/* article */}

        <div className="my-12">
          <NotionBlocks blocks={blocks} isCodeHighlighter={true} />
        </div>
      </article>
    </Layout>
  );
};

export default Article;
