import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@openstatus/ui";

import { Header } from "@/components/dashboard/header";
import AppPageLayout from "@/components/layout/app-page-layout";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <AppPageLayout withHelpCallout>
      <Header
        title="Status Reports"
        description="Overview of all your status reports and updates."
        actions={
          <Button asChild>
            <Link href="./status-reports/new">Create</Link>
          </Button>
        }
      />
      {children}
    </AppPageLayout>
  );
}
