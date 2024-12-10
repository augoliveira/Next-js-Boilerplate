'use client';
import type { ComponentProps } from 'react';

import cn from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

const NextImage = (props: ComponentProps<typeof Image>) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      src={props.src}
      priority
      className={cn(
        props.className,
        'duration-700 ease-in-out',
        isLoading ? 'scale-105 blur-lg' : 'scale-100 blur-0',
      )}
      onLoad={() => setLoading(false)}
    />
  );
};

export default NextImage;
