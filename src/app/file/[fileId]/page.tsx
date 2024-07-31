import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { demoFlashcards } from "@/constants";
import TypeFlashcard from "@/components/cards/TypeFlashcard";
import Link from "next/link";

interface FileProps {
  params: {
    fileId: string;
  };

  searchParams: { [key: string]: string | undefined };
}

const Page = ({ params }: FileProps) => {
  const needRevising = demoFlashcards.filter((flashcard) => {
    return flashcard.status === "Needs revising";
  });

  const goodForNow = demoFlashcards.filter((flashcard) => {
    return flashcard.status === "Revise soon";
  });

  const mastered = demoFlashcards.filter((flashcard) => {
    return flashcard.status === "Mastered";
  });

  return (
    <>
      <MaxWidthWrapper className="mt-12 md:px-10">
        <div className="flex-col-reverse sm:flex-row gap-6 flex justify-between items-center">
          <h1 className="text-5xl tracking-tighter font-open font-bold">
            Your flashcards
          </h1>
          <Link
            className="btn btn-primary btn-outline max-w-fit self-end flex items-center group"
            href={`/study/${params.fileId}`}
          >
            Start studying <span className="text-lg mt-1">📖</span>
          </Link>
        </div>
        <div className="border-b border-secondary mt-4" />

        {/* menu bar */}
        <div className="flex items-center justify-center">
          <ul className="menu menu-vertical lg:menu-horizontal menu-md bg-base-300 rounded-box mt-8 ">
            <li>
              <a>Needs Studying</a>
            </li>
            <li>
              <a>Good for now</a>
            </li>
            <li>
              <a>Mastered</a>
            </li>
          </ul>
        </div>
      </MaxWidthWrapper>

      <div className="sm:px-10 px-6 my-16 flex gap-12 flex-col ">
        <TypeFlashcard cards={needRevising} type="Needs revising" />
        <TypeFlashcard cards={goodForNow} type="Revise soon" />
        <TypeFlashcard cards={needRevising} type="Mastered" />
      </div>
    </>
  );
};

export default Page;
