import { FC } from 'react';

interface Props {}

const Header: FC<Props> = () => {
  return (
    <header className="flex flex-row justify-between rounded-lg border px-6 py-2 md:py-3 m-2">
      <span className="font-bold">Murat Can</span>

      <div className="flex flex-row gap-2">
        <a href="https://github.com/muratcankirdar">Github</a>

        <a href="https://linkedin.com/in/muratcank">Linkedin</a>
      </div>
    </header>
  );
};

export default Header;
