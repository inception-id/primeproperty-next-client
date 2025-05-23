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
  const { fontColor, ...restOfWatermarkProps } = watermarkProps;
  const { alt, ...restOfImageProps } = imageProps;
  return (
    <Watermark
      // content={content ?? "primepro_id"}
      image="/images/primepro-watermark.png"
      rotate={0}
      fontColor={fontColor ?? "#ffffff75"}
      onContextMenu={(e) => e.preventDefault()}
      {...restOfWatermarkProps}
    >
      <Image alt={alt} {...restOfImageProps} />
    </Watermark>
  );
};
