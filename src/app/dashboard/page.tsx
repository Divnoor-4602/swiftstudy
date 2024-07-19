"use server";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getUserFiles } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { FileUp, Ghost } from "lucide-react";
import DocumentCard from "@/components/cards/DocumentCard";

const Page = async () => {
  const { userId }: { userId: string | null } = auth();

  if (!userId) return null;

  const files = await getUserFiles({ clerkId: userId });

  return (
    <>
      <MaxWidthWrapper className="mt-12">
        <div className="flex-col-reverse sm:flex-row gap-6 flex justify-between items-center">
          <h1 className="text-5xl tracking-tighter font-open font-bold">
            Your cards
          </h1>
          <button className="btn btn-primary max-w-fit self-end flex items-center group">
            Upload files
            <FileUp className="size-6 group-hover:animate-pulse" />
          </button>
        </div>
        <div className="border-b border-secondary mt-4" />
      </MaxWidthWrapper>

      {files && files.length > 0 ? (
        <>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-20 mt-12">
            {files.sort().map((card: any) => {
              return (
                <li key={card._id}>
                  <DocumentCard
                    _id={card._id}
                    name={card.name}
                    user={card.user}
                    question={card.question}
                    answer={card.answer}
                    uploadStatus={card.uploadStatus}
                    url={card.url}
                    key={card.key}
                    createdAt={card.createdAt}
                  />
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <>
          <div className="mt-16 flex flex-col items-center gap-2">
            <Ghost className="size-8" />
            <h3 className="font-semibold text-xl">Pretty empty around here</h3>
            <p>Let&apos;s upload your first document.</p>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
