import { images } from "@/constant";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="p-5 center-content h-[90vh]">
      <Image
        src={images.no_content}
        alt="no-content"
        width={250}
        height={250}
      />
    </div>
  );
};

export default page;
