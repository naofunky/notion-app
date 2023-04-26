import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC } from 'react';
import { sampleTypes } from 'types/types';
import { getDate, getText } from 'utils/property';
import { getCover, getMultiSelected } from '../utils/property';

const Card: FC<sampleTypes> = ({ page }) => {
  return (
    <div className="text-center">
      <Link
        href={`/articles/${getText(page.properties.slug.rich_text)}`}
        className="flex justify-center"
      >
        <div className="border-2 border-solid border-primary text-center max-w-sm overflow-hidden shadow-lg w-full my-4 md:my-0 content-between grid p-2 rounded-30">
          {/* image */}
          <div>
            {' '}
            <Image
              className="static w-full h-auto rounded-30"
              src={getCover(page.cover)}
              alt=""
              object-fit={'cover'}
              style={{ objectFit: 'cover' }}
              width={350}
              height={225}
              quality={30}
            />
          </div>
        </div>
      </Link>
      {/* title & date*/}
      <div className="px-6 pt-4">
        <h2 className="text-base-white font-medium mb-3">
          {getText(page.properties.Name.title)}
        </h2>
        {/* <p className="text-base-white text-xs">
            {getDate(page.properties.published.date)}
          </p> */}
      </div>

      {/* tag */}
      <div className="px-6 pb-4">
        {getMultiSelected(page.properties.tags.multi_select).map(
          (tag, index) => (
            <span
              key={index}
              className="text-sm px-2 py-1 font-normal rounded-lg break-words text-base-white"
            >
              {`[ #${tag} ]`}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export default Card;
