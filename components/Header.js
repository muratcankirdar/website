import Link from 'next/link';
import Image from 'next/image';
import { social_links } from '@/utils/constants';
import classNames from 'classnames';

export default function Header() {
  const { LINKEDIN, GITHUB } = social_links;

  return (
    <header className={classNames('flex flex-row justify-between p-4 border-b')}>
      <h2 className='text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>
        Murat Can Kırdar
      </h2>

      <div className='flex flex-row gap-2 items-center text-white'>
        <Link href={LINKEDIN} target={'_blank'}>
          {'LinkedIn'}
        </Link>

        <Link href={GITHUB} target={'_blank'}>
          {'Github'}
        </Link>
      </div>
    </header>
  );
}
