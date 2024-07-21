"use client";

import { FileClock } from "lucide-react";
import { Layers } from "lucide-react";
import { Trash } from "lucide-react";
import { format } from "date-fns/format";
import { deleteFileById } from "@/lib/actions/file.action";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

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
        <div className="flex items-center gap-6 p-6">
          <div className="aspect-square size-10 rounded-full bg-gradient-to-r from-primary to-secondary shadow-sm flex-shrink-0" />
          <div className="text-lg font-medium font-open truncate">
            {JSON.parse(name)}
          </div>
        </div>
        <div className="border-b border-primary/30" />
        <div className="flex justify-between items-center flex-wrap px-3 py-2 my-4 gap-3">
          <div className="flex items-center text-xs flex-1 justify-center">
            <FileClock className="size-5 mr-2" />
            <div className="truncate font-open">{format(createdAt, "PP")}</div>
          </div>
          <div className="flex items-center text-xs flex-1 justify-center">
            <Layers className="size-5 mr-2" />
            <div className=" font-open">Cards</div>
          </div>
          <div
            className="flex items-center text-xs flex-1 justify-center btn btn-sm text-red-700"
            aria-label="delete-document"
            onClick={async () =>
              await deleteFileById({
                fileId: JSON.parse(_id),
                path: pathname,
                clerkId: userId,
              })
            }
          >
            <Trash className="size-5 mr-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentCard;
