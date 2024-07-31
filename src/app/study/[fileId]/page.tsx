import Studycard from "@/components/cards/Studycard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

interface StudyProps {
  params: {
    fileId: string;
  };

  searchParams: { [key: string]: string | undefined };
}

const demoCard = {
  _id: "4",
  file: "Chemistry",
  user: "Divnoor",
  question: "What is the chemical symbol for water?",
  answer: "H2O",
  status: "Needs revising",
  lastStudied: "2024-07-23T11:00:00Z",
};

const Page = ({ params }: StudyProps) => {
  const fileId = params.fileId;

  // todo: get the flashcards from the database

  return (
    <>
      <MaxWidthWrapper className="bg-base-100 mt-48 mb-12">
        <Studycard {...demoCard} />
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
