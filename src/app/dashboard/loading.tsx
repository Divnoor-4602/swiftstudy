import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { FileUp } from "lucide-react";

const loading = () => {
  return (
    <>
      <MaxWidthWrapper className="mt-12 md:px-10">
        <div className="flex-col-reverse sm:flex-row gap-6 flex justify-between items-center">
          <h1 className="text-5xl tracking-tighter font-open font-bold">
            Your files
          </h1>
          <button
            className="btn btn-primary max-w-fit self-end flex items-center group"
            disabled
          >
            Upload files
            <FileUp className="size-6 group-hover:-translate-y-1 transition duration-200" />
          </button>
        </div>
        <div className="border-b border-secondary mt-4" />
      </MaxWidthWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-10 mt-16 gap-6">
        <div className="skeleton w-full h-32"></div>
        <div className="skeleton w-full h-32"></div>
        <div className="skeleton w-full h-32"></div>
        <div className="skeleton w-full h-32"></div>
        <div className="skeleton w-full h-32"></div>
        <div className="skeleton w-full h-32"></div>
      </div>
    </>
  );
};

export default loading;
