import { UserButton } from "@clerk/nextjs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import logo from "../../../../public/assets/swiftstudy-logo.svg";
import { ArrowRight } from "lucide-react";

const Page = () => {
  return (
    <>
      <MaxWidthWrapper className="mt-28 sm:mt-40 mb-12 flex flex-col justify-center items-center text-center">
        {/* hero badge */}
        <div className="badge badge-secondary px-6 py-4 animate-pulse">
          <p className=" font-semibold pointer-events-none flex gap-2 items-center">
            <Image src={logo} alt="logo" width={20} height={20} />
            SwiftStudy is now public! 🎉
          </p>
        </div>
        {/* hero text */}
        <h1 className="max-w-4xl mt-7 font-extrabold text-5xl text-base-content md:text-6xl tracking-tighter">
          <div className="flex flex-col gap-3">
            <p className="mr-4">Effortlessly master your</p>
            <span>
              material using
              <span className="ml-3 relative">
                <span className="bg-primary inset-0 absolute -rotate-1" />
                <span className="relative text-primary-content z-10 px-3">
                  flashcards
                </span>
              </span>
            </span>
          </div>
        </h1>
        {/* hero content */}
        <p className="text-zinc-400 sm:text-lg mt-8 max-w-prose">
          SwiftStudy transforms PDFs into flashcards. Upload, convert, and
          master your material with spaced repetition.
        </p>

        {/* hero cta */}
        <button className="btn btn-primary mt-12 group">
          Get Started{" "}
          <ArrowRight className="size-5 group-hover:translate-x-1 duration-200 transition" />
        </button>
      </MaxWidthWrapper>

      {/* value proposition section */}
    </>
  );
};

export default Page;
