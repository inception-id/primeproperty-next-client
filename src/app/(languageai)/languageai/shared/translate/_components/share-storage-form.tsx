import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {LuCopy} from "react-icons/lu";
import {DialogClose} from "@/components/ui/dialog";
import {copyToClipboard} from "@/lib/copyToClipboard";
import {env} from "@/lib/env";
import {useQuery} from "@tanstack/react-query";
import {
    findTranslationStorageSharedUsers,
    TSharedTranslationStorage
} from "@/lib/api/translation/find-translation-storage-shared-users";
import {ChangeEvent, useState} from "react";
import SharedTranslateStorageUsers
    from "@/app/(languageai)/languageai/shared/translate/_components/shared-storage-users";

type ShareTranslateStorageFormProps = {
    storageId: number
}

const ShareTranslateStorageForm = ({storageId}: ShareTranslateStorageFormProps) => {
    const [sharedUsers, setSharedUsers] = useState<TSharedTranslationStorage[]>([])
    const [searchedEmail, setSearchedEmail] = useState("")
    console.log(storageId)
    const {isFetching,data} = useQuery({
        queryKey: ['shareTranslateStorageUsers', storageId],
        queryFn: async () => {
            const sharedUsersApiResponse = await findTranslationStorageSharedUsers(storageId)
            setSharedUsers(sharedUsersApiResponse.data)
            return sharedUsersApiResponse.data
        }
    });

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value.toLowerCase();
        setSearchedEmail(email);
        if (data && data.length > 0) {
            const newSharedUsers = data?.filter((user)=> user.shared_user_email.includes(email));
            setSharedUsers(newSharedUsers);
        }
        return email
    }

    return (
        <form action={(formData) => {console.log(formData); setSearchedEmail("")}}>
            <Input placeholder="Search or add email" name="email" type="email" className="mb-4" value={searchedEmail}
                   onChange={onSearch}
            />

            <div className="mb-4">

                <div className="text-sm mb-2">People with access</div>
                <SharedTranslateStorageUsers isFetching={isFetching} searchedEmail={searchedEmail} sharedUsers={sharedUsers} />
            </div>

            <div className="flex items-center justify-end">
                <Button
                    type="button"
                    variant="outline"
                        onClick={async () => copyToClipboard(`${env.NEXT_PUBLIC_HOST_URL}/languageai/shared/translate`)}>
                    <LuCopy/>
                    Copy link
                </Button>
            </div>
        </form>
    )
};

export default ShareTranslateStorageForm;