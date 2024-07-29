interface TypeFlashcardProps {
  type: string;
  cards: any;
}

const TypeFlashcard = ({ type, cards }: TypeFlashcardProps) => {
  return (
    <>
      <div className="flex flex-col w-full gap-8">
        <div>
          <h2 className="text-3xl text-error font-bold tracking-tighter font-open">
            {type === "Needs revising"
              ? "Needs Studying 📚"
              : type === "Revise soon"
              ? "Revise soon"
              : "Mastered"}
          </h2>
          <span className="font-semibold text-sm text-primary/70">
            {" "}
            ({cards.length})
          </span>

          <ul className="mt-10 flex flex-col gap-6 shadow-sm">
            {cards.map((card: any) => {
              return (
                <li
                  key={card._id}
                  className="rounded-xl bg-neutral w-full p-6 grid grid-cols-2 gap-4 text-neutral-content truncate border border-secondary relative"
                >
                  <div className="text-pretty text-sm sm:text-base">
                    {card.question}
                  </div>
                  <div className="text-pretty text-sm sm:text-base">
                    {card.answer} New Yorkers are facing the winter chill with
                    less warmth this year as the citys most revered soup stand
                    unexpectedly shutters, following a series of events that
                    have left the community puzzled.
                  </div>
                  <div
                    className={`absolute size-8 bg-gradient-to-tr ${
                      type === "Needs revising"
                        ? "from-red-500 to-cyan-500"
                        : type === "Revise soon"
                        ? "from-yellow-500 to-orange-500"
                        : "from-primary to-success"
                    }  rounded-full aspect-square bottom-5 left-4`}
                  ></div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TypeFlashcard;
