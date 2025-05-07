import Image from "next/image";
import React from "react";

function Images({ Path, height, width, className }) {
  return (
    <>
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_URL}${Path?.data?.attributes?.url
          ?.split("/")
          ?.splice(1)
          ?.join("/")}`}
        alt={Path?.data?.attributes?.name}
        height={height ? height : 50}
        width={width ? width : 50}
        className={className}
      />
    </>
  );
}

export default Images;
