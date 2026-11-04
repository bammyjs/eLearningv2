import { useId, type HTMLAttributes, type ReactNode } from "react";
import Icon, { type IconProps } from "./Icon";

const BUBBLE_PATH =
  "M52 27.9994C52 46.8557 44.5931 52 27.9994 52C11.4057 52 4 46.8545 4 27.9994C4 9.14433 11.4045 4 27.9994 4C44.5943 4 52 9.14433 52 27.9994Z";

const BUBBLE_PATH_UNIT =
  "M0.92857 0.5C0.92857 0.83671 0.7963 0.92857 0.5 0.92857C0.20367 0.92857 0.07143 0.83669 0.07143 0.5C0.07143 0.16329 0.20365 0.07143 0.5 0.07143C0.79633 0.07143 0.92857 0.16329 0.92857 0.5Z";

const FILL_ACTIVE = "#2661EF";
const FILL_IDLE = "#E3E7EB";

export type FlexBubbleProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  fill?: string;
  filled?: boolean;
  stroke?: string;
  strokeWidth?: number;
  src?: string;
  alt?: string;
  videoSrc?: string;
  poster?: string;
  autoPlayVideo?: boolean;
  videoControls?: boolean;
  icon?: string;
  iconVariant?: IconProps["variant"];
  iconSizeClass?: string;
  iconClassName?: string;
  children?: ReactNode;
  contentClassName?: string;
};

function toCssSize(value: number | string) {
  return typeof value === "number" ? `${value}px` : value;
}

export default function FlexBubble({
  size,
  width,
  height,
  fill,
  filled = false,
  stroke = "white",
  strokeWidth = 8,
  src,
  alt = "",
  videoSrc,
  poster,
  autoPlayVideo = false,
  videoControls = false,
  icon,
  iconVariant = "cute-regular",
  iconSizeClass = "text-xl md:text-2xl",
  iconClassName = "",
  children,
  className = "",
  contentClassName = "",
  style,
  ...rest
}: FlexBubbleProps) {
  const rawId = useId().replace(/:/g, "");
  const contentClipId = `flex-bubble-content-${rawId}`;
  const maskId = `flex-bubble-mask-${rawId}`;
  const bubbleFill = fill ?? (filled ? FILL_ACTIVE : FILL_IDLE);
  const hasFillMedia = Boolean(src || videoSrc);
  const clipContent = hasFillMedia || Boolean(children);
  const stackInOneCell = Boolean(children) && (hasFillMedia || (!src && !videoSrc && !icon));

  const boxStyle = {
    ...style,
    ...(size != null ? { width: toCssSize(size), height: toCssSize(size) } : {}),
    ...(width != null ? { width: toCssSize(width) } : {}),
    ...(height != null ? { height: toCssSize(height) } : {}),
  };

  return (
    <div
      className={`relative inline-grid place-items-center ${className}`}
      style={boxStyle}
      {...rest}
    >
      <svg
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <clipPath id={contentClipId} clipPathUnits="objectBoundingBox">
            <path d={BUBBLE_PATH_UNIT} />
          </clipPath>
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="56"
            height="56"
            fill="black"
          >
            <rect fill="white" width="56" height="56" />
            <path d={BUBBLE_PATH} />
          </mask>
        </defs>
        <path d={BUBBLE_PATH} fill={bubbleFill} />
        {strokeWidth > 0 ? (
          <path
            d={BUBBLE_PATH}
            stroke={stroke}
            strokeWidth={strokeWidth}
            mask={`url(#${maskId})`}
          />
        ) : null}
      </svg>

      {(src || videoSrc || icon || children) && (
        <div
          className={`relative z-10 h-full w-full min-h-0 ${
            stackInOneCell
              ? "grid grid-cols-1 grid-rows-1 [&>*]:col-start-1 [&>*]:row-start-1 [&>img]:absolute [&>img]:inset-0 [&>img]:h-full [&>img]:w-full [&>img]:min-h-0 [&>img]:object-cover [&>*:not(img)]:relative [&>*:not(img)]:z-10 [&>*:not(img)]:h-full [&>*:not(img)]:w-full [&>*:not(img)]:min-h-0"
              : "grid place-items-center"
          } ${contentClassName}`}
          style={clipContent ? { clipPath: `url(#${contentClipId})` } : undefined}
        >
          {videoSrc ? (
            <video
              src={videoSrc}
              poster={poster}
              autoPlay={autoPlayVideo}
              controls={videoControls}
              muted={autoPlayVideo}
              loop={autoPlayVideo}
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          ) : null}
          {src && !videoSrc ? (
            <img src={src} alt={alt} className="h-full w-full object-cover" />
          ) : null}
          {icon ? (
            <Icon
              name={icon}
              variant={iconVariant}
              sizeClass={iconSizeClass}
              className={iconClassName}
            />
          ) : null}
          {children}
        </div>
      )}
    </div>
  );
}
