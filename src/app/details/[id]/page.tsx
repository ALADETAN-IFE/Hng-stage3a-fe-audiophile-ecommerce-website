import { Suspense } from "react";
import DetailsPageClient from "./details";
import Typography from "@/components/common/Typography";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function DetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  return (
    <Suspense
      fallback={
        <div className="w-full flex justify-center gap-7 flex-col items-center min-h-80">
          <Typography variant="overline" className=" text-center">
            LOADING...
          </Typography>
        </div>
      }
    >
      <DetailsPageClient id={resolvedParams.id} />
    </Suspense>
  );
}
