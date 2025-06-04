import Watermark, { WatermarkProps } from "@uiw/react-watermark";
import Image from "next/image";
import { ImageProps } from "next/image";

type WatermarkImageProps = {
  watermarkProps: WatermarkProps;
  imageProps: ImageProps;
};

export const WatermarkImage = ({
  watermarkProps,
  imageProps,
}: WatermarkImageProps) => {
  const { ...restOfWatermarkProps } = watermarkProps;
  const { alt, ...restOfImageProps } = imageProps;
  return (
    <Watermark
      image="/images/watermark.png"
      rotate={0}
      onContextMenu={(e) => e.preventDefault()}
      {...restOfWatermarkProps}
    >
      <Image alt={alt} {...restOfImageProps} />
    </Watermark>
  );
};
