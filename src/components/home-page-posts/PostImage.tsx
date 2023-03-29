import Image, { ImageProps } from "next/image";

type PostImageProps = ImageProps & {
  alt: string;
  src: string;
};

export function PostImage({ alt, src, ...rest }: PostImageProps): JSX.Element {
  return (
    <Image
      {...rest}
      className="w-full object-cover"
      alt={alt}
      src={src}
      width={540}
      height={360}
    />
  );
}
