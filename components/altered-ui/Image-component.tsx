import Image, { StaticImageData } from "next/image";
import { AspectRatio } from "@/components/shadcn-ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface ImageComponentProps extends React.HTMLAttributes<HTMLElement> {
  src: string | StaticImageData;
  size?: number; // Define your size options
  ratio?: number;
  className?: string; // Extract className separately
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down"; // Add objectFit option
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  size = 450,
  ratio = 16 / 9,
  objectFit = "contain", // Default value for objectFit
  className,
  ...props
}) => {
  return (
    <div style={{ width: `${size}px` }} className="relative">
      <AspectRatio ratio={ratio}>
        <Image
          src={src}
          alt="Image"
          className={cn(`rounded-md object-cover general-image`, className)}
          style={{ objectFit: "contain" }}
          fill
        />
      </AspectRatio>
    </div>
  );
};

export default ImageComponent;
