import {Row} from "@tanstack/table-core";
import {TTranslation} from "@/lib/api/translation/createTranslation";
import {Button} from "@/components/ui/button";
import {LuCopy} from "react-icons/lu";
import {copyToClipboard} from "@/lib/copyToClipboard";

type TTranslateTranslatedTextColumnProps = {
    row: Row<TTranslation>
}

const TranslateTranslatedTextColumn = ({row}: TTranslateTranslatedTextColumnProps) => {
    return (
        <div>
            <div className="text-xs mb-2 capitalize">{row.original.target_language}:</div>
            <div className="flex gap-1">
                <div className="flex-1">{row.original.completion}</div>
                <Button type="button" variant="secondary" size="icon" onClick={async () => await copyToClipboard(row.original.completion)}>
                    <LuCopy/>
                </Button>
            </div>
        </div>
    )
};

export default TranslateTranslatedTextColumn;
