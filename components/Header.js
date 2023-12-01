import Link from 'next/link';
import Image from 'next/image';
import { social_links } from '@/utils/constants';
import classNames from 'classnames';

export default function Header() {
  const { LINKEDIN, GITHUB } = social_links;

  return (
    <header className={classNames('flex flex-row justify-between p-4')}>
      <h2 className='text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600'>
        Murat Can Kırdar
      </h2>

      <div className='flex flex-row gap-2 items-center'>
        <Link href={LINKEDIN} target={'_blank'}>
          <Image src='/linkedin.png' alt='LinkedIn Logo' width={24} height={24} />
        </Link>

        <Link href={GITHUB} target={'_blank'}>
          <Image src='/github.svg' alt='GitHub Logo' width={24} height={24} />
        </Link>
      </div>
    </header>
  );
}
