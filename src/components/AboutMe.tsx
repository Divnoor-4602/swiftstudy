import Image from "next/image";
import logo from "../../public/assets/avatar-demo.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="text-center max-w-lg mt-8 flex flex-col gap-3 text-neutral-content">
          <p>
            I realised going through hundreds of ppt slides and PDFs to learn
            the course material was too much for me to handle.
          </p>
          <p>Other platforms were too time consuming 🕐.</p>

          <p>
            I built SwiftStudy to let my fellow students generate and study
            flashcards wihtout any hassle so
            <span className="bg-secondary ml-2 px-2 z-30 rounded-xl">
              they can focus on learning 📚
            </span>{" "}
          </p>
        </div>
        <div className="flex gap-3 items-center mt-8">
          <Image
            src={logo}
            alt="logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <span className="font-bold font-open text-sm text-primary">
              Divnoor Singh Nagra
            </span>
            <span className="text-xs font-open text-primary/50">
              Indie developer
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

// todo: Add a real avatar image
