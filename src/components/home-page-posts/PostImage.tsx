import Image from "next/image";

type PostImageProps = {
  alt: string;
  src: string;
};

export function PostImage({ alt, src }: PostImageProps): JSX.Element {
  return (
    <Image
      className="w-full object-cover"
      alt={alt}
      src={src}
      width={540}
      height={360}
    />
  );
}
