import { NextRequest, NextResponse } from 'next/server';
import { RecipeUserId } from 'supertokens-node';
import EmailPassword from 'supertokens-node/recipe/emailpassword';
import {ensureSuperTokensInit} from "@/lib/supertokens/ensureSupertokensInit";
import {verifySupertokensSession} from "@/lib/supertokens/verifySupertokensSession";

type ChangePasswordDto = {
    accessToken: string;
    email: string;
    oldPassword: string;
    newPassword: string;
    userId: string;
};

ensureSuperTokensInit()

export async function POST(req: NextRequest) {
    try {
        const { email, oldPassword, newPassword, userId, accessToken }: ChangePasswordDto = await req.json();
        const isSessionVerified = await verifySupertokensSession(accessToken);
        if (isSessionVerified.status !== "OK") {
            return NextResponse.json({ status: 401, data: isSessionVerified, message: isSessionVerified.message});
        }


            // Validate old credentials
            const isCredentialValid = await EmailPassword.verifyCredentials(
                'public',
                email,
                oldPassword
            );

            if (isCredentialValid.status !== 'OK') {
                return NextResponse.json({ status: 401, data: isCredentialValid, message: isCredentialValid.status});
            }

            // Update password
            const recipeUserId = new RecipeUserId(userId);
            const updateResponse = await EmailPassword.updateEmailOrPassword({
                recipeUserId,
                password: newPassword,
                tenantIdForPasswordPolicy: 'public',
            });

            return NextResponse.json({status: 200, data: updateResponse, message: "Password updated"});
    } catch (error: any) {
        return NextResponse.json({ status: 400, data: null, message: error.message });
    }
}
