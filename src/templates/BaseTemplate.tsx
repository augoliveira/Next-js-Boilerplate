/* eslint-disable tailwindcss/no-custom-classname */
import { AppConfig } from '@/utils/AppConfig';
import { useTranslations } from 'next-intl';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="max-w-screen-full mx-auto">
        <header className="border-b border-gray-300">
          <div className="pb-8 pt-4">
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 xl:text-5xl/[3.5rem]">
              {AppConfig.name}
            </h1>
          </div>

          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.leftNav}
              </ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. `}
          {t.rich('made_with', {
            author: () => (
              <a
                href="https://creativedesignsguru.com"
                className="text-base/7 font-medium text-gray-900 hover:border-b-2 hover:border-blue-700"
              >
                CreativeDesignsGuru
              </a>
            ),
          })}
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};
