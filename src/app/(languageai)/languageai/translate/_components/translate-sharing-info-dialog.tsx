'use client'
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle} from "@/components/ui/dialog";
import {TbUserShare} from "react-icons/tb";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {handleTranslateInfoClose} from "@/app/(languageai)/languageai/translate/_lib/handle-translate-info-close";

type TranslateSharingInfoDialogProps = {
    showDialog: boolean;
}

const TranslateSharingInfoDialog = ({showDialog}: TranslateSharingInfoDialogProps) => {
    return (
       <Dialog open={showDialog}>
           <DialogContent onEscapeKeyDown={handleTranslateInfoClose} onOverlayClick={handleTranslateInfoClose}>
               <DialogTitle className="flex items-center gap-2 text-xl mb-2 font-semibold">
                   <TbUserShare className="text-2xl" />
                   Share your translation
               </DialogTitle>
               <DialogDescription className="flex items-center gap-2 mb-4">
                   You can now share your translation result by clicking share icon and invite your friends
               </DialogDescription>
               <div className="flex items-center justify-end">
                   <DialogClose className={cn(buttonVariants())} onClick={async ()=> await handleTranslateInfoClose()}>
                       Close
                   </DialogClose>
               </div>
           </DialogContent>
       </Dialog>
    )
};

export default TranslateSharingInfoDialog;