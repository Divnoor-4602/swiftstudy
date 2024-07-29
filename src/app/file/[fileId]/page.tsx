import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { demoFlashcards } from "@/constants";
import TypeFlashcard from "@/components/cards/TypeFlashcard";

const Page = () => {
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
          <button className="btn btn-primary btn-outline max-w-fit self-end flex items-center group">
            Start studying <span className="text-lg mt-1">📖</span>
          </button>
        </div>
        <div className="border-b border-secondary mt-4" />
      </MaxWidthWrapper>

      <div className="sm:px-10 px-6 my-16 flex gap-6">
        <TypeFlashcard cards={needRevising} type="Needs revising" />
      </div>
    </>
  );
};

export default Page;
