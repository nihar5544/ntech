import Image from "next/image";
import React, { useState } from "react";

function Images({ Path, height, width, className }) {
  const [hasError, setHasError] = useState(false);
  let src, alt;

  if (typeof Path === "string") {
    src = Path;
    alt = "";
  } else {
    const url = Path?.data?.attributes?.url?.split("/")?.splice(1)?.join("/");
    src = url ? `${process.env.NEXT_PUBLIC_BASE_URL}${url}` : null;
    alt = Path?.data?.attributes?.name || "";
  }

  if (!src || hasError) return null;

  return (
    <Image
      src={src}
      alt={alt}
      height={height ?? 50}
      width={width ?? 50}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

export default Images;
