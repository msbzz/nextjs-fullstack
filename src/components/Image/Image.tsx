import { BaseCompoment } from "@src/theme/BaseCompoment";
import { StyleSheet } from "@src/theme/StyleSheet";

interface ImageProps{
  src: string;
  alt :string;
  styleSheet?:StyleSheet

}

export default function Image({src,alt, ...props}:ImageProps){
  return (
    <BaseCompoment
    as='img'
    src={src}
    alt={alt}
    {...props}
    />
  )
}
