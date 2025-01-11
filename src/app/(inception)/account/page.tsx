import { cookies } from "next/headers";
import { decode, JwtPayload } from "jsonwebtoken";
import { formatDateToIndonesian } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import AccountLogoutButton from "@/app/(inception)/account/_components/AccountLogoutButton";
import { env } from "@/lib/env";

const AccountPage = () => {
  const token = cookies().get("accessToken")?.value as string;
  const decoded = decode(token) as JwtPayload;
  return (
    <section className="mt-12 lg:mt-16 p-4 lg:py-0">
      <div className="opacity-50">Email</div>
      <div className="mb-4">{decoded.email}</div>

      <div className="opacity-50">Date Joined</div>
      <div className="mb-4">{formatDateToIndonesian(decoded.created_at)}</div>

      <div className="flex flex-col gap-4 w-fit">
        {decoded.email === env.ADMIN_EMAIL && (
          <Link href="/admin/ai-system-prompt" className={buttonVariants({})}>
            Admin panel
          </Link>
        )}
        <Link
          href="/account/change-password"
          className={buttonVariants({ variant: "secondary" })}
        >
          Change Password
        </Link>
        <AccountLogoutButton />
      </div>
    </section>
  );
};

export default AccountPage;
