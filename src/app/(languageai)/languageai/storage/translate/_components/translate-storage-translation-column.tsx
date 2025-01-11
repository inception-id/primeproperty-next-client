import { Row } from "@tanstack/table-core";
import { Button } from "@/components/ui/button";
import { LuCopy } from "react-icons/lu";
import { copyToClipboard } from "@/lib/copyToClipboard";
import {TTranslationStorage} from "@/lib/api/translation/createTranslationStorage";

type TTranslateTranslationColumnProps = {
    row: Row<TTranslationStorage>;
};

const TranslateStorageTranslationColumn = ({
                                           row,
                                       }: TTranslateTranslationColumnProps) => {
    return (
        <div>
            <div className="text-xs mb-2 capitalize">
                {row.original.target_language}:
            </div>
            <div className="flex gap-1">
                <div className="flex-1">{row.original.updated_completion}</div>
                <Button
                    type="button"
                    variant="secondary"
                    size="icon"
                    onClick={async () => await copyToClipboard(row.original.updated_completion)}
                >
                    <LuCopy />
                </Button>
            </div>
        </div>
    );
};

export default TranslateStorageTranslationColumn;
