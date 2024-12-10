/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react-dom/no-missing-button-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';
import { useRouter } from 'next/navigation';

type Props = {
  buttonData?: string;
};

const ContactUs = ({ buttonData }: Props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push('/contact')}
      className="group relative h-12 w-44 overflow-hidden border-y border-y-secondaryColor text-white"
    >
      <button className="font-titleFont size-full text-sm font-normal uppercase tracking-[2px]">
        {buttonData}
      </button>
      <span className="absolute right-0 inline-block h-full w-px -translate-y-8 bg-secondaryColor transition-transform duration-300 group-hover:translate-y-0"></span>
      <span className="absolute left-0 inline-block h-full w-px translate-y-8 bg-secondaryColor transition-transform duration-300 group-hover:translate-y-0"></span>
    </div>
  );
};

export default ContactUs;
