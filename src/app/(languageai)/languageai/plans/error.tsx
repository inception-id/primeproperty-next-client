"use client";
import Link from "next/link";
import { TypographyLead } from "@/components/ui/typography/lead";
import { typographyPClassName } from "@/components/ui/typography/typography-p";
import { useEffect } from "react";

type TErrorPageProps = {
  error: unknown;
};

export default function LanguageaiPlanError({ error }: TErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-5xl m-auto">
      <TypographyLead>There&apos;s something wrong</TypographyLead>
      <div className={typographyPClassName}>
        Kindly contact{" "}
        <Link href="/support" className="underline">
          support
        </Link>{" "}
        to fix this issue.
      </div>
    </div>
  );
}
