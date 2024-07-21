"use client";

import { File, Cloud, FileUp, Loader2 } from "lucide-react";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { useUploadThing } from "@/lib/uploadthing";
import { toast } from "sonner";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const UploadDropzone = () => {
  const router = useRouter();

  const [isUploading, setIsUploading] = useState<boolean>(false);

  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const { startUpload } = useUploadThing("fileUploader", {
    onUploadBegin: () => {
      toast.info("Uploading file...", {
        description: "Please wait while we upload the file.",
      });
    },
    onUploadError: () => {
      toast.error("Failed to upload the file 😰", {
        description: "Please try again later.",
      });
    },
    onClientUploadComplete: async (res) => {
      toast.success("File uploaded successfully 🎉", {
        description: "Redirecting to your file...",
      });

      const [fileResponse] = res;

      const { serverData: file } = fileResponse;

      setIsUploading(false);

      setUploadProgress(100);

      router.push(`/file/${file._id}`);
    },
  });

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + 5;
      });
    }, 500);

    return interval;
  };

  return (
    <>
      <Dropzone
        multiple={false}
        onDrop={async (acceptedFiles) => {
          setIsUploading(true);
          const progressInterval = startSimulatedProgress(); // Simulate upload progress
          await startUpload(acceptedFiles);
          clearInterval(progressInterval);
        }}
      >
        {({ getRootProps, getInputProps, acceptedFiles }) => {
          return (
            <div
              {...getRootProps()}
              className="border h-72  border-dashed rounded-lg border-primary/50 m-4 p-2"
            >
              <div className="flex items-center justify-center h-full w-full">
                <div className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-base-200  hover:bg-base-300 transition-colors duration-150">
                  <div className="flex flex-col items-center pb-6 pt-5">
                    <Cloud className="size-8 text-primary/80" />
                    <p className="text-sm my-2 text-center">
                      <span className="font-semibold">Click to upload </span>
                      or drag and drop
                    </p>
                    <p className="text-xs text-neutral-content/80">
                      PDF (up to 4MB)
                    </p>
                  </div>

                  {acceptedFiles && acceptedFiles[0] ? (
                    <>
                      <div className="max-w-xs bg-neutral text-neutral-content/80 flex overflow-hidden rounded-md items-center outline outline-[1px] outline-secondary divide-x divide-secondary">
                        <div className="px-3 py-1 h-full grid place-items-center">
                          <File className="size-3 text-primary" />
                        </div>
                        <div className="truncate text-xs py-2 px-3">
                          {acceptedFiles[0].name}
                        </div>
                      </div>
                    </>
                  ) : null}

                  {isUploading ? (
                    <>
                      <div className="w-full mt-4 max-w-xs mx-auto">
                        <progress
                          className="progress progress-accent"
                          value={uploadProgress}
                          max="100"
                        ></progress>
                      </div>
                    </>
                  ) : null}

                  <input
                    {...getInputProps()}
                    type="file"
                    id="dropzone-file"
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Dropzone>
    </>
  );
};

const UploadButton = () => {
  return (
    <>
      <button
        className="btn btn-primary max-w-fit self-end flex items-center group"
        onClick={() =>
          (document.getElementById(
            "upload_modal"
          ) as HTMLDialogElement)!.showModal()
        }
      >
        Upload files
        <FileUp className="size-6 group-hover:-translate-y-1 transition duration-200" />
      </button>
      <dialog id="upload_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <UploadDropzone />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default UploadButton;
