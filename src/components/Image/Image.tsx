import { LazyLoadImage } from 'react-lazy-load-image-component'

interface IImage {
  src: string
  alt: string
  width?: string
  height?: string
  className?: string
}

export default function Image({
  src,
  alt,
  width,
  height,
  className,
}: IImage): JSX.Element {
  return src.includes('http') ? (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  ) : (
    <LazyLoadImage
      src={`/${src}`}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  )
}
