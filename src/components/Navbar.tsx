"use client";

import Link from "next/link";
import logo from "../../public/assets/swiftstudy-logo.svg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Menu } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* navbar */}
          <div className="navbar bg-base-100/75 px-2  sm:px-10 sticky backdrop-blur-lg inset-0 z-30 items-center gap-4 ">
            <div className="flex-1">
              <Link className="flex gap-1 items-center cursor-pointer" href="/">
                <Image
                  src={logo}
                  alt="SwiftStudy Logo"
                  width={60}
                  height={60}
                />
                <div className="font-bold max-sm:hidden">SwiftStudy</div>
              </Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal menu-md px-1 items-center gap-4 max-sm:hidden">
                <li>
                  <button
                    className="btn btn-ghost"
                    onClick={() => {
                      const element =
                        document.querySelector("#pricing-section");
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
              </ul>
            </div>
            <SignedIn>
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
            </SignedIn>
            <div className="flex-none sm:hidden">
              <label
                htmlFor="my-drawer"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <Menu className="size-8 cursor-pointer" />
              </label>
            </div>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu menu-lg bg-base-200 min-h-full w-80 p-4 flex flex-col justify-between">
            <div>
              <Link className="flex gap-1 items-center cursor-pointer" href="/">
                <Image
                  src={logo}
                  alt="SwiftStudy Logo"
                  width={60}
                  height={60}
                />
                <div className="font-bold ">SwiftStudy</div>
              </Link>
              {/* Sidebar content here */}
              <div className="mt-8 flex flex-col gap-2">
                <li>
                  <Link href={"/dashboard"} className="font-semibold">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className="font-semibold">
                    Pricing
                  </Link>
                </li>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <SignedIn>
                <SignOutButton>
                  <button className="btn btn-block btn-secondary ">
                    Sign out
                  </button>
                </SignOutButton>
              </SignedIn>
              <SignedOut>
                <SignUpButton>
                  <button className="btn btn-block btn-primary btn-outline">
                    Sign up
                  </button>
                </SignUpButton>
                <SignInButton>
                  <button className="btn btn-block btn-accent btn-outline">
                    Sign in
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
