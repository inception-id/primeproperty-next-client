import Header from "@/app/(inception)/_components/Header";
import { cookies } from "next/headers";
import { decode, JwtPayload } from "jsonwebtoken";
import { env } from "@/lib/env";
import { redirect } from "next/navigation";
import {verifySupertokensSession} from "@/lib/supertokens/verifySupertokensSession";

type TInceptionBaseLayout = {
  children: React.ReactNode;
};

const AdminLayout = async ({ children }: TInceptionBaseLayout) => {
    const isSessionVerified = await verifySupertokensSession();
    if (isSessionVerified.status === "OK") {
        const accessToken = cookies().get("accessToken")?.value as string;
        const decoded = decode(accessToken) as JwtPayload;
        if (decoded.email === env.ADMIN_EMAIL) return <main>{children}</main>;
    }
    redirect("/");
};

export default AdminLayout;
