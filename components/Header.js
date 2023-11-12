import Link from 'next/link';
import { social_links } from '@/utils/constants';
import classNames from 'classnames';

export default function Header() {
  const { LINKEDIN, GITHUB } = social_links;
  return (
    <header className={classNames('flex flex-row justify-between p-4 border rounded-2xl')}>
      <span>Murat Can Kırdar</span>

      <div className='flex flex-row gap-2'>
        <Link href={LINKEDIN} target={'_blank'}>
          LinkedIn{' '}
        </Link>

        <Link href={GITHUB} target={'_blank'}>
          Github
        </Link>
      </div>
    </header>
  );
}
