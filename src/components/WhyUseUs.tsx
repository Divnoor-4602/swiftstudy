import { prosCons } from "@/constants";
import { X, Check } from "lucide-react";

const WhyUseUs = () => {
  return (
    <>
      <div className="ml-0 md:ml-10  text-center sm:text-left ">
        <h2 className="mt-2 font-bold text-2xl sm:text-5xl font-open">
          Tired of traditional study methods? 😫
          <br /> Try a smarter way!
        </h2>
      </div>

      {/* comparison section */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-16 mt-20 max-w-6xl mx-auto">
        {prosCons.map((item) => {
          return (
            <>
              <div key={item.id} className={`bg-neutral rounded-lg p-12`}>
                <h3
                  className={`
                ${item.status === "success" ? "text-green-400" : "text-red-400"}
                  text-center sm:text-start text-base md:text-xl font-bold font-open`}
                >
                  {item.title}
                </h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {item.features.map((feature, idx) => {
                    return (
                      <>
                        <li
                          key={feature + idx}
                          className={`
                            ${
                              item.status === "success"
                                ? "text-green-300"
                                : "text-red-300"
                            }
                            text-base flex gap-4 items-center`}
                        >
                          {item.status === "failure" ? (
                            <X className="size-4" />
                          ) : (
                            <Check className="size-4" />
                          )}
                          {feature}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default WhyUseUs;
