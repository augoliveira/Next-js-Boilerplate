import Link from 'next/link';

export const DemoBanner = () => (
  <div className="sticky top-0 z-50 bg-gray-900 p-4 text-center text-base/7 font-semibold text-gray-100 [&_a:hover]:text-indigo-500 [&_a]:text-green-300">
    Live Demo of Next.js Boilerplate -
    {' '}
    <Link href="/sign-up" className="text-2xl font-extrabold">Explore the Authentication</Link>
  </div>
);
