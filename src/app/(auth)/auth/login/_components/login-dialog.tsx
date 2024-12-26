'use client'
import {Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import LoginForm from "@/app/(auth)/auth/login/_components/LoginForm";
import Link from "next/link";
import GoogleAuthButton from "@/app/(auth)/auth/login/_components/google-auth-button";
import {useLoginStore} from "@/app/(auth)/auth/login/_lib/useLoginStore";
import {useShallow} from "zustand/react/shallow";

const LoginDialog = () => {
    const {openLoginDialog} = useLoginStore(
        useShallow((state) => ({
            openLoginDialog: state.openLoginDialog,
        }))
    )
    return (
        <Dialog open={openLoginDialog}>
            <DialogContent>
                <DialogTitle className="mb-4 font-bold">Sign in to continue</DialogTitle>
                <LoginForm/>
                <div className="mb-4">
                    <span>Don&apos;t have an account?</span>
                    <Link href="/auth/register" className="underline ml-1">
                        Register
                    </Link>
                </div>
                <div className="flex items-center justify-center">
                    <GoogleAuthButton/>
                </div>
            </DialogContent>
        </Dialog>
    )
};

export default LoginDialog;