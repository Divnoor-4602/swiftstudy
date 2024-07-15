import { pricingPlans } from "@/constants";
import { Check, Info, X } from "lucide-react";
import logo from "../../public/assets/swiftstudy-transparent.svg";
import Image from "next/image";

const Pricing = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl flex flex-col items-center">
        <div
          className="badge badge-primary badge-outline px-4 py-3 font-semibold"
          id="pricing-section"
        >
          Pricing
        </div>
        <h2 className="font-open text-2xl sm:text-5xl font-bold text-center mt-12 max-w-4xl">
          Save hours of studying, sign up, upload and start learning!
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 w-full">
          {pricingPlans.map((plan) => {
            return (
              <>
                <div
                  key={plan.plan}
                  className="bg-neutral p-8 rounded-xl text-neutral-content"
                >
                  <h3 className=" font-open font-bold text-lg">{plan.plan}</h3>
                  <div className="my-6 font-open font-extrabold text-6xl">
                    {plan.price}{" "}
                    <span className="text-xs text-neutral-content/50">USD</span>
                  </div>
                  <div className="text-primary text-lg flex items-center gap-1">
                    {plan.quota} PDFs/mo included
                    <div
                      className="tooltip tooltip-primary"
                      data-tip="How many PDFs can you upload during a month"
                    >
                      <Info className="size-5" />
                    </div>
                  </div>
                  <ul className="flex flex-col gap-5 mt-8">
                    {plan.features.map((feature, idx) => {
                      return (
                        <>
                          <li
                            key={feature.text + idx}
                            className={`${
                              feature.negative ? "text-neutral-content/50" : ""
                            } flex items-center font-medium text-lg`}
                          >
                            {feature.negative ? (
                              <>
                                <X className="size-4 mr-2" />
                              </>
                            ) : (
                              <>
                                <Check className="size-4 mr-2" />
                              </>
                            )}
                            <span>{feature.text}</span>
                            {feature.footnote ? (
                              <div
                                className="tooltip tooltip-info ml-2"
                                data-tip={feature.footnote}
                              >
                                <Info className="size-4" />
                              </div>
                            ) : null}
                          </li>
                        </>
                      );
                    })}
                  </ul>

                  {/* cta */}
                  <button className="btn btn-primary group flex items-center mt-8 btn-block">
                    <Image
                      src={logo}
                      alt="swiftstudy-logo"
                      height={40}
                      width={40}
                      className="group-hover:-rotate-12 duration-150 transition group-hover:scale-105"
                    />
                    <span>Get SwiftStudy</span>
                  </button>
                  <div className="text-sm mt-1 flex items-center justify-center font-medium text-neutral-content/70">
                    Pay once, use indefinitely!
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pricing;

// todo: Add pricing plan details for flashcards and figure out if you want to include tracking or not
