import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { getUserFiles } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { Ghost } from "lucide-react";
import DocumentCard from "@/components/cards/DocumentCard";
import UploadButton from "@/components/UploadButton";

const Page = async () => {
  const { userId }: { userId: string | null } = auth();

  if (!userId) return null;

  const files = await getUserFiles({ clerkId: userId });

  return (
    <>
      <MaxWidthWrapper className="mt-12 md:px-10">
        <div className="flex-col-reverse sm:flex-row gap-6 flex justify-between items-center">
          <h1 className="text-5xl tracking-tighter font-open font-bold">
            Your files
          </h1>
          <UploadButton />
        </div>
        <div className="border-b border-secondary mt-4" />
      </MaxWidthWrapper>

      {files && files.length > 0 ? (
        <>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 sm:px-10 mt-16 gap-6">
            {files.sort().map((card: any) => {
              return (
                <li key={card._id}>
                  <DocumentCard
                    _id={JSON.stringify(card._id)}
                    name={JSON.stringify(card.name)}
                    user={JSON.stringify(card.user)}
                    uploadStatus={JSON.stringify(card.uploadStatus)}
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
