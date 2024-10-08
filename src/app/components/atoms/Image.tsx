import React from 'react';
import ImageNext, { StaticImageData } from 'next/image';

type ImageProps = {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, width, height, className }) => (
  <ImageNext src={src} alt={alt} width={width} height={height} className={className} />
);

export default Image;
