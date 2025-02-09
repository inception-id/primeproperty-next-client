import {formatDateToIndonesian} from "@/lib/utils";
import {decode, JwtPayload} from "jsonwebtoken";
import {fetchCookieToken} from "@/lib/fetchCookieToken";

const AccountProfileSection = async () => {
    try {
        const token = await fetchCookieToken() as string;
        const decoded = decode(token) as JwtPayload;
        return (
            <div>
                <div className="opacity-50">Email</div>
                <div className="mb-4">{decoded.email}</div>

                <div className="opacity-50">Date Joined</div>
                <div className="mb-4">{formatDateToIndonesian(decoded.created_at)}</div>
            </div>
        )
    } catch (e: any) {
        console.error(e.message)
        return <div>
            <div className="opacity-50">Email</div>
            <div className="mb-4">(fail to retrieve data)</div>

            <div className="opacity-50">Date Joined</div>
            <div className="mb-4">(fail to retrieve data)</div>
        </div>
    }
};

export default AccountProfileSection;