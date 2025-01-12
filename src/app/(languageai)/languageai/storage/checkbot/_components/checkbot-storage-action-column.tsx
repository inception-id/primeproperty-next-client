import { Row } from "@tanstack/table-core";
import {TCheckbotStorage} from "@/lib/api/checkbot/create-checkbot-storage";
import CheckbotStorageDeleteDialog
    from "@/app/(languageai)/languageai/storage/checkbot/_components/checkbot-storage-delete-dialog";

type TCheckbotStorageActionColumnProps = {
  row: Row<TCheckbotStorage>;
};

const CheckbotStorageActionColumn = ({
  row,
}: TCheckbotStorageActionColumnProps) => {
  return (
    <div className="flex flex-col gap-1">
        <CheckbotStorageDeleteDialog checkbotId={row.original.id} />
      {/*<TranslateStorageUpdateDialog row={row} />*/}
    </div>
  );
};

export default CheckbotStorageActionColumn;
