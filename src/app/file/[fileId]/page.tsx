import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import React from "react";

const Page = () => {
  return (
    <>
      <MaxWidthWrapper className="mt-12 md:px-10">
        <div className="flex-col-reverse sm:flex-row gap-6 flex justify-between items-center">
          <h1 className="text-5xl tracking-tighter font-open font-bold">
            Your flashcards
          </h1>
          <button className="btn btn-primary btn-outline max-w-fit self-end flex items-center group">
            Start studying <span className="text-lg mt-1">📖</span>
          </button>
        </div>
        <div className="border-b border-secondary mt-4" />
      </MaxWidthWrapper>
      {/* Document title */}
      <div></div>
    </>
  );
};

export default Page;
