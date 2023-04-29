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
        className="flex justify-center items-center"
      >
        <div className="bg-gradient-to-t from-[#FF00B7] to-[#4E01F0] text-center overflow-hidden shadow-lg w-[370px] h-[370px] my-4 md:my-0 content-between flex justify-center items-center rounded-30 hover:bg-black hover:bg-opacity-40">
          {/* image */}
          <div className="bg-black w-[367px] h-[367px] flex justify-center items-center rounded-30">
            {' '}
            <Image
              className="static w-full h-full rounded-30"
              src={getCover(page.cover)}
              alt=""
              object-fit={'cover'}
              style={{ objectFit: 'cover' }}
              width={322}
              height={322}
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
