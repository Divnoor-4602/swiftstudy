import { createFile } from "@/lib/actions/file.action";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  fileUploader: f({ pdf: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const { userId }: { userId: string | null } = auth();

      if (!userId) throw new Error("Unauthorized");

      // return clerk Id if the user is authorized or throw an error

      return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const createdFile = await createFile({
        name: file.name,
        clerkId: metadata.userId,
        uploadStatus: "processing",
        key: file.key,
        url: `https://utfs.io/f/${file.key}`,
      });

      console.log("createdFile", createdFile);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
