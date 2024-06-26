"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Info } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@openstatus/ui";

export function InfoBanner() {
  const params = useParams<{ workspaceSlug: string }>();
  return (
    <Alert className="bg-muted/50">
      <Info className="h-4 w-4" />
      <AlertTitle>You&apos;re workspace name is empty</AlertTitle>
      <AlertDescription>
        To inform your team about the workspace name, please set it in the{" "}
        <Link
          href={`/app/${params.workspaceSlug}/settings/general`}
          className="text-foreground inline-flex items-center font-medium underline underline-offset-4 hover:no-underline"
        >
          general
        </Link>{" "}
        settings.
      </AlertDescription>
    </Alert>
  );
}
