import { decode, JwtPayload } from "jsonwebtoken";
import { env } from "@/lib/env";
import { redirect } from "next/navigation";
import { verifySupertokensSession } from "@/lib/supertokens/verifySupertokensSession";
import AdminSidebar from "@/app/(admin)/admin/_sidebar";
import { fetchCookieToken } from "@/lib/fetchCookieToken";

type TInceptionBaseLayout = {
  children: React.ReactNode;
};

const AdminLayout = async ({ children }: TInceptionBaseLayout) => {
  const isSessionVerified = await verifySupertokensSession();
  if (isSessionVerified.status === "OK") {
    const accessToken = await fetchCookieToken();
    const decoded = decode(accessToken) as JwtPayload;
    if (decoded.email === env.ADMIN_EMAIL)
      return (
        <main className="flex w-full relative h-screen">
          <AdminSidebar />
          {children}
        </main>
      );
  }
  redirect("/");
};

export default AdminLayout;
