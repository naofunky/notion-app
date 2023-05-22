import Image from 'next/image';
import { ArticleMetaProps } from '../types/types';
import {
  getCover,
  getDate,
  getText,
  getMultiSelected,
} from '../utils/property';
import Link from 'next/link';

const ArticleMeta = ({ page }: ArticleMetaProps) => {
  return (
    <>
      {/* page name */}
      <h1 className="my-8 text-base-white">
        {getText(page.properties.Name.title)}
      </h1>
      {/* page cover */}
      <Image
        className="w-full max-w-screen-lg rounded-lg aspect-video my-4 "
        src={getCover(page.cover)}
        alt=""
        object-fit={'cover'}
        style={{ objectFit: 'cover' }}
        width={640}
        height={360}
        quality={50}
      />

      <div className="px-6 py-4 rounded text-sm text-base-white">
        <div className="flex flex-wrap">
          {/* published */}
          <div className="mr-5">Published</div>
          <div className="col-span-2">
            {getDate(page.properties.published.date)}
          </div>

          {/* author */}
          <div className="mr-5">Author</div>
          <div className="col-span-2">
            {getText(page.properties.author.rich_text)}
          </div>

          {/* tags */}
          <div className="mr-5">Tags</div>
          <div className="col-span-2">
            {/* change later */}
            {getMultiSelected(page.properties.tags.multi_select).map(
              (tag: string, index: number) => (
                <Link
                  key={index}
                  href={`/tags/${tag}`}
                  className="text-base-white border-b border-solid border-white mr-3"
                >
                  <span>{`#${tag}`}</span>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleMeta;
