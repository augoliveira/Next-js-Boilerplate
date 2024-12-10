/* eslint-disable react/no-useless-fragment */
import HeroSections from '@/components/HeroSections';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <HeroSections />
        </div>
      </div>
    </>
  );
};
