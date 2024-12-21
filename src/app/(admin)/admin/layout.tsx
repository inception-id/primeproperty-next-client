import Header from "@/app/(inception)/_components/Header";
import {cookies} from "next/headers";
import {decode, JwtPayload} from "jsonwebtoken";
import {env} from "@/lib/env";
import {redirect} from "next/navigation";

type TInceptionBaseLayout = {
    children: React.ReactNode;
};

const AdminLayout = ({children}: TInceptionBaseLayout) => {
    const accessToken = cookies().get("accessToken")?.value as string
    const decoded = decode(accessToken) as JwtPayload;

    if (decoded.email !== env.ADMIN_EMAIL) {
        redirect("/")
    }

    return (
        <main>{children}</main>
    );
};

export default AdminLayout;
