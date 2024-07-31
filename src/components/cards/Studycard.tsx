"use client";

import { EyeIcon, GalleryVerticalEnd } from "lucide-react";
import React from "react";
import { useState } from "react";

interface StudycardProps {
  _id: string;
  file: string;
  user: string;
  question: string;
  answer: string;
  status: string;
  lastStudied: string;
}

const Studycard = ({
  _id,
  file,
  user,
  question,
  answer,
  status,
  lastStudied,
}: StudycardProps) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <>
      <div
        className={`${
          showAnswer ? "bg-neutral" : "bg-base-300"
        } rounded-xl shadow-sm w-full  pb-8`}
      >
        {/* card header */}
        <div className="py-10">
          <h1 className="font-bold items-center flex text-center justify-center flex-wrap max-sm:gap-2 text-lg">
            10 Flashcards in{" "}
            <span className="sm:ml-2 inline-flex items-center gap-2 bg-neutral py-1 px-2 rounded-lg text-neutral-content font-semibold border-accent border text-sm ">
              <GalleryVerticalEnd className="size-4" />
              {file}
            </span>{" "}
          </h1>
        </div>
        <div className="border-b border-secondary w-full" />
        {/* card body */}
        {/* question */}
        <div className="w-full flex flex-col mt-12 justify-between  items-center">
          <div
            className={`badge font-bold ${showAnswer ? "badge-success" : ""}`}
          >
            {showAnswer ? "Answer" : "Question"}
          </div>
          <div
            className={`text-xl sm:text-2xl font-semibold text-center mt-4 px-4 ${
              showAnswer ? "text-primary" : "text-neutral-content"
            }`}
          >
            {showAnswer ? answer : question}
          </div>
          {/* actions */}

          {showAnswer ? (
            <div className="mt-32 flex flex-col md:flex-row items-center w-full justify-between md:px-6 flex-wrap gap-4">
              <button className="btn flex-col gap-2 btn-md  py-2">
                <span className="text-2xl">😶</span>
                Blackout
              </button>
              <button className="btn flex-col gap-2 btn-md  py-2">
                <span className="text-2xl">🙂‍↔️</span>
                Forgot
              </button>
              <button className="btn flex-col gap-2 btn-md  py-2">
                <span className="text-2xl">❌</span>
                Incorrect
              </button>
              <button className="btn flex-col gap-2 btn-md  py-2">
                <span className="text-2xl">😬</span>
                Partially correct
              </button>
              <button className="btn flex-col gap-2 btn-md  py-2">
                <span className="text-2xl">😄</span>
                Recalled with effort
              </button>
              <button className="btn flex-col gap-2 btn-md  py-2">
                <span className="text-2xl">👑</span>
                Easy
              </button>
            </div>
          ) : (
            <div className="w-full px-6">
              <button
                className="btn btn-block btn-primary mt-28 "
                onClick={handleShowAnswer}
              >
                <EyeIcon />
                Show Answer
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Studycard;
