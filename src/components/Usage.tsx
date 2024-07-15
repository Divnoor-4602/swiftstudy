"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import demoFeature from "../../public/assets/features.webp";
import { useState } from "react";
import { ShieldCheck, User, BookHeart, Zap } from "lucide-react";

const Usage = () => {
  const [active, setActive] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.id);
    setActive((prev) => e.target.id);
  };

  return (
    <>
      {/* how to use section */}
      <div className="mx-auto max-w-5xl mt-24 flex justify-evenly flex-col lg:flex-row gap-12 px-6">
        <div className="w-full lg:max-w-lg flex flex-col gap-3">
          <div className="collapse collapse-plus border-b-[0.5px] rounded-none border-primary/50 pb-3">
            <input
              id="sign-in"
              type="radio"
              name="my-accordion-3"
              defaultChecked
              onChange={(e) => handleChange(e)}
            />
            <div className="collapse-title text-base md:text-lg font-medium inline-flex gap-1 items-center px-0">
              1. Sign in using your{" "}
              <FontAwesomeIcon
                icon={faGoogle}
                className="size-5 text-accent-content"
              />{" "}
              or{" "}
              <FontAwesomeIcon
                icon={faApple}
                className="size-6 text-accent-content"
              />{" "}
              account
            </div>
            <div className="collapse-content px-0">
              <p className="text-sm md:text-base leading-6">
                Add your Google or Apple accounts with just one click without
                any hassle of managing passwords
              </p>
              <div className="flex gap-1 items-center text-xs mt-2 text-accent-content">
                <ShieldCheck className="size-5" />
                Secured using Clerk
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus border-b-[0.5px] rounded-none border-primary/50 pb-3 ">
            <input
              type="radio"
              name="my-accordion-3"
              id="upload"
              onChange={(e) => handleChange(e)}
            />
            <div className="collapse-title text-base md:text-lg font-medium inline-flex gap-1 items-center px-0">
              2. Upload your PDF file 📄
            </div>
            <div className="collapse-content px-0">
              <p className="text-sm md:text-base leading-6">
                Quickly drag and drop your PDF to our dropzone
              </p>
              <div className="flex gap-1 items-center text-xs mt-2 text-accent-content">
                <User className="size-5" />
                Manage and access your documents
              </div>
            </div>
          </div>
          <div className="collapse collapse-plus ">
            <input
              type="radio"
              name="my-accordion-3"
              id="start"
              onChange={(e) => handleChange(e)}
            />
            <div className="collapse-title text-base md:text-lg font-medium inline-flex gap-1 items-center px-0">
              3. Start studying, it&apos;s that easy 🙇‍♂️
            </div>
            <div className="collapse-content px-0">
              <p className="text-sm md:text-base leading-6">
                Go through your flashcards and ace your exams!
              </p>
              <div className="flex gap-1 items-center text-xs mt-2 text-accent-content">
                <Zap className="size-5" />
                Quick flashcards at your disposal
              </div>{" "}
              <div className="flex gap-1 items-center text-xs mt-2 text-accent-content">
                <BookHeart className="size-5" />
                Study with spaced repetition!
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto ring-2 p-1 rounded-lg ring-inset ring-accent">
          <Image
            src={demoFeature}
            alt="demo fetaure"
            width={400}
            height={400}
            quality={100}
            className="rounded-md shadow-2xl ring-accent ring-1 "
          />
        </div>
      </div>
    </>
  );
};

export default Usage;
