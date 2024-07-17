"use client";

import Link from "next/link";
import logo from "../../public/assets/swiftstudy-logo.svg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100/75  px-10 sticky backdrop-blur-lg inset-0 z-30 items-center">
        <div className="flex-1">
          <Link className="flex gap-1 items-center cursor-pointer" href="/">
            <Image src={logo} alt="SwiftStudy Logo" width={60} height={60} />
            <div className="font-bold">SwiftStudy</div>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal menu-md px-1 items-center gap-4">
            <li>
              <button
                className="btn btn-ghost"
                onClick={() => {
                  const element = document.querySelector("#pricing-section");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Pricing
              </button>
            </li>
            <SignedOut>
              <li>
                <SignUpButton>
                  <button className="btn btn-ghost">Sign up</button>
                </SignUpButton>
              </li>
            </SignedOut>
            <li>
              <SignedOut>
                <Link
                  href={"/dashboard"}
                  className="btn btn-primary flex items-center group cursor-pointer"
                >
                  Get started{" "}
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition duration-150" />
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard" className="btn btn-ghost">
                  Dashboard
                </Link>
              </SignedIn>
            </li>

            <SignedIn>
              <li>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-10 w-10",
                    },
                    variables: {
                      colorPrimary: "#ff7000",
                    },
                  }}
                />
              </li>
            </SignedIn>
          </ul>
        </div>
      </div>
    </>

    // todo: Make a mobile navbar
  );
};

export default Navbar;
