import { cookies } from "next/headers";
import { decode, JwtPayload } from "jsonwebtoken";
import { env } from "@/lib/env";
import { redirect } from "next/navigation";
import { verifySupertokensSession } from "@/lib/supertokens/verifySupertokensSession";
import AdminSidebar from "@/app/(admin)/admin/_sidebar";

type TInceptionBaseLayout = {
  children: React.ReactNode;
};

const AdminLayout = async ({ children }: TInceptionBaseLayout) => {
  const isSessionVerified = await verifySupertokensSession();
  if (isSessionVerified.status === "OK") {
    const accessToken = cookies().get("accessToken")?.value as string;
    const decoded = decode(accessToken) as JwtPayload;
    if (decoded.email === env.ADMIN_EMAIL)
      return (
        <main className="flex w-full relative min-h-screen">
          <AdminSidebar />
          {children}
        </main>
      );
  }
  redirect("/");
};

export default AdminLayout;
