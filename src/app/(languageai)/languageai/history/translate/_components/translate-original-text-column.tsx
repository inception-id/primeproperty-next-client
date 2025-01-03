import {Row} from "@tanstack/table-core";
import {TTranslation} from "@/lib/api/translation/createTranslation";
import {formatDateToIndonesian} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {LuCopy} from "react-icons/lu";
import {copyToClipboard} from "@/lib/copyToClipboard";

type TTranslateOriginalTextColumnProps = {
    row: Row<TTranslation>
}

const TranslateOriginalTextColumn = ({row}: TTranslateOriginalTextColumnProps) => {
    return (
        <div>
            <div className="text-xs mb-2">{formatDateToIndonesian(row.original.created_at, true)}</div>
            {row.original.content_language && <div className="text-xs mb-2 capitalize">{row.original.content_language}:</div>}
            <div className="flex gap-1">
                <div className="flex-1">{row.original.content}</div>
                <Button type="button" size="icon" variant="secondary" onClick={async () => await copyToClipboard(row.original.content)}>
                    <LuCopy/>
                </Button>
            </div>
        </div>
    )
};

export default TranslateOriginalTextColumn;