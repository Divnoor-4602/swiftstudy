import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center text-center">
        <h1 className="max-w-4xl mt-7 font-open font-extrabold text-3xl sm:text-5xl text-base-content md:text-5xl text-center">
          Stop worrying about the material and get started with SwiftStudy
        </h1>
        <div className="mt-16 max-w-md text-primary/75">
          Sign up, upload, create and start learning without any hassle!
        </div>
        <div className="mt-16">
          <Link href="/dashboard">
            <button className="btn btn-primary btn-wide group">
              Get Started{" "}
              <ArrowRight className="size-5 group-hover:translate-x-1 duration-200 transition" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CTA;
