import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Card from '../../../components/Card';
import Layout from '../../../components/Layout';
import { fetchPages } from '../../../utils/notion';
import { Params, TagProps } from '../../../types/types';
import { getMultiSelected } from '../../../utils/property';
import { Set } from 'typescript';

export async function getStaticPaths() {
  const { results }: { results: Record<string, any>[] } = await fetchPages({});

  const pathSet: any = new Set();
  for (const page of results) {
    for (const tag of getMultiSelected(page.properties.tags.multi_select)) {
      pathSet.add(tag);
    }
  }

  // オブジェクトから配列に変換
  const paths = Array.from(pathSet).map((tag) => {
    return {
      params: {
        tag: tag,
      },
    };
  });

  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { tag } = ctx.params as Params;
  const { results } = await fetchPages({ tag: tag });
  return {
    props: {
      pages: results ? results : [],
      tag: tag,
    },
    revalidate: 10,
  };
};

const Tag: NextPage<TagProps> = ({ pages, tag }) => {
  return (
    <Layout>
      <div className="pt-12">
        <h1 className="text-5xl mb-8 text-center text-base-white">{`#${tag}`}</h1>
        <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
          {/* Card */}
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tag;
