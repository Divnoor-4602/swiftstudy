import Link from "next/link";
import logo from "../../public/assets/swiftstudy-logo.svg";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 px-10 sticky backdrop-blur-lg inset-0 z-30 items-center">
        <div className="flex-1">
          <Link className="flex gap-1 items-center cursor-pointer" href="/">
            <Image src={logo} alt="SwiftStudy Logo" width={60} height={60} />
            <div className="font-bold">SwiftStudy</div>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal menu-md px-1 items-center gap-4">
            <li>
              <Link href="/pricing" className="btn btn-ghost">
                Pricing
              </Link>
            </li>
            <li>
              <SignedIn>
                <SignOutButton>
                  <button className="btn btn-ghost">Sign out</button>
                </SignOutButton>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <button className="btn btn-ghost">Sign in</button>
                </SignInButton>
              </SignedOut>
            </li>
            <li>
              <Link
                href={"/"}
                className="btn btn-primary flex items-center group "
              >
                Get started{" "}
                <ArrowRight className="size-5 group-hover:translate-x-1 transition duration-150" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>

    // todo: Make a mobile navbar
  );
};

export default Navbar;
