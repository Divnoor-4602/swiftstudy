import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import logo from "../../../../public/assets/swiftstudy-logo.svg";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import demoImage from "../../../../public/assets/twill-dashboard-preview.jpg";
import Usage from "@/components/Usage";
import WhyUseUs from "@/components/WhyUseUs";
import Pricing from "@/components/Pricing";
import AboutMe from "@/components/AboutMe";
import CTA from "@/components/CTA";

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
        <h1 className="max-w-5xl mt-7 font-open font-extrabold text-3xl sm:text-5xl text-base-content lg:text-6xl tracking-tight sm:flex sm:flex-col gap-2 sm:gap-6">
          <span className="mr-4">Effortlessly master your</span>
          <span>
            material using
            <span className="ml-4 relative">
              <span className="relative font-extrabold text-primary-content z-10 ">
                flashcards
              </span>
              <span className="absolute bg-primary -rotate-1 -left-1 md:-left-2 top-1 bottom-1 -right-1 md:-right-2" />
            </span>
          </span>
        </h1>
        {/* hero content */}
        <p className="text-zinc-400 sm:text-lg mt-8 max-w-prose">
          SwiftStudy transforms PDFs into flashcards. Upload, convert, and
          master your material with spaced repetition.
        </p>

        {/* hero cta */}
        <Link href="/dahsboard">
          <button className="btn btn-primary mt-12 group">
            Get Started{" "}
            <ArrowRight className="size-5 group-hover:translate-x-1 duration-200 transition" />
          </button>
        </Link>
      </MaxWidthWrapper>

      {/* value proposition section */}
      <div>
        <div className="max-w-6xl px-6 lg:px-8 mx-auto">
          <div className="mt-16">
            <Image
              src={demoImage}
              alt="demo preview of the webpage"
              width={1364}
              height={866}
              quality={100}
              className="rounded-md shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* how to use section heading */}
      <div className="my-32 px-6">
        <div className="mx-auto max-w-5xl sm:mt-56">
          <div className="mx-auto text-center max-w-3xl">
            <h2 className="mt-2 font-open font-bold text-2xl sm:text-5xl">
              As simple as uploading a PDF and bam💥 flashcards ready!
            </h2>
            <p className="text-zinc-400 mt-6 sm:text-lg">
              Transform any PDF into flashcards instantly. It&apos;s
              unbelievably easy—try it yourself!
            </p>
          </div>
        </div>
      </div>

      {/* how to use section */}
      <Usage />

      {/* Why use section  */}
      <div className="mt-52 px-6 sm:px-20 bg-base-200 py-32">
        <WhyUseUs />
      </div>

      {/* Pricing */}
      <MaxWidthWrapper className="my-52 px-6">
        <Pricing />
      </MaxWidthWrapper>

      {/*  Final CTA */}
      <div className="bg-base-300 px-6 mt-52 pb-32 pt-40">
        <CTA />
      </div>

      {/* About me */}
      <div className="bg-base-300 pb-32 pt-16  px-6">
        <AboutMe />
      </div>
    </>
  );
};

export default Page;

// todo: Edit the image put a ring border around it and use the actual dashboard image
