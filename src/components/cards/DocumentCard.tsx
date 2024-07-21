"use client";

import { FileClock } from "lucide-react";
import Link from "next/link";
import { Layers } from "lucide-react";
import { Trash } from "lucide-react";
import { format } from "date-fns/format";
import { deleteFileById } from "@/lib/actions/file.action";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { toast } from "sonner";

interface DocumentProps {
  _id: string;
  name: string;
  user: string | undefined;
  uploadStatus: string;
  key: string;
  url: string;
  createdAt: Date;
}

const DocumentCard = ({
  _id,
  name,
  user,
  uploadStatus,
  key,
  url,
  createdAt,
}: DocumentProps) => {
  const pathname = usePathname();

  const { userId } = useAuth();

  return (
    <>
      <div className="rounded-xl bg-base-300 border border-primary/30 shadow-sm">
        <div className="flex items-center gap-6 p-4">
          <div className="aspect-square size-8 rounded-full bg-gradient-to-r from-primary to-accent shadow-sm flex-shrink-0" />
          <div className="md:tooltip rounded-xl" data-tip="Get studying 📚">
            <Link
              className="font-medium font-open truncate"
              href={`/file/${JSON.parse(_id)}`}
            >
              {JSON.parse(name)}
            </Link>
          </div>
        </div>
        <div className="border-b border-primary/30" />
        <div className="flex justify-between items-center flex-wrap px-3 py-1 my-2 gap-3">
          <div className="flex items-center text-xs flex-1 justify-center">
            <FileClock className="size-4 mr-2" />
            <div className="truncate font-open">{format(createdAt, "PP")}</div>
          </div>
          <div className="flex items-center text-xs flex-1 justify-center">
            <Layers className="size-4 mr-2" />
            <div className=" font-open">Cards</div>
          </div>
          <div
            className="flex items-center text-xs flex-1 justify-center btn btn-sm text-red-700"
            aria-label="delete-document"
            onClick={async () => {
              await deleteFileById({
                fileId: JSON.parse(_id),
                path: pathname,
                clerkId: userId,
              });

              toast.success("Document deleted 🗑️", {
                description: "The document has been successfully deleted.",
              });
            }}
          >
            <Trash className="size-4 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentCard;
