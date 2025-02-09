import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import AccountLogoutButton from "@/app/(inception)/account/_components/AccountLogoutButton";
import { Suspense } from "react";
import AccountProfileFallback from "@/app/(inception)/account/_components/account-profile-fallback";
import AccountProfileSection from "@/app/(inception)/account/_components/account-profile-section";

export const revalidate = 0;

const AccountPage = () => {
  return (
    <section className="mt-12 lg:mt-16 p-4 lg:py-0">
      <Suspense fallback={<AccountProfileFallback />}>
        <AccountProfileSection />
      </Suspense>
      <div className="flex flex-col gap-4 w-fit">
        <Link
          href="/account/change-password"
          className={buttonVariants({ variant: "outline" })}
        >
          Change Password
        </Link>
        <AccountLogoutButton />
      </div>
    </section>
  );
};

export default AccountPage;
