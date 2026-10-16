import type { ImgHTMLAttributes } from "react";

type ResponsiveImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet"
> & {
  basePath: string;
  widths: readonly number[];
  pictureClassName?: string;
};

const buildSrcSet = (
  basePath: string,
  widths: readonly number[],
  format: "avif" | "webp",
) =>
  widths.map((width) => `${basePath}-${width}.${format} ${width}w`).join(", ");

const ResponsiveImage = ({
  basePath,
  widths,
  pictureClassName,
  sizes,
  alt,
  decoding = "async",
  ...imageProps
}: ResponsiveImageProps) => {
  const fallbackWidth = widths.at(-1);

  if (!fallbackWidth) {
    return null;
  }

  return (
    <picture className={pictureClassName}>
      <source
        type="image/avif"
        srcSet={buildSrcSet(basePath, widths, "avif")}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={buildSrcSet(basePath, widths, "webp")}
        sizes={sizes}
      />
      <img
        {...imageProps}
        src={`${basePath}-${fallbackWidth}.webp`}
        sizes={sizes}
        alt={alt}
        decoding={decoding}
      />
    </picture>
  );
};

export default ResponsiveImage;
