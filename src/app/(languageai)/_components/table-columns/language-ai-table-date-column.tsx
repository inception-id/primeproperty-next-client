import { formatDateToIndonesian } from "@/lib/utils";

type LanguageAiTableDateColumnProps = {
  showUpdatedAt: boolean;
  row: {
    created_at: string;
    updated_at: string;
  };
};

const LanguageAiTableDateColumn = ({
  row,
  showUpdatedAt,
}: LanguageAiTableDateColumnProps) => {
  return (
    <div className="text-xs flex flex-col gap-1 w-20">
      <div>
        <div>Created:</div>
        <div>{formatDateToIndonesian(row.created_at, true)}</div>
      </div>
      {showUpdatedAt && (
        <div>
          <div>Updated:</div>
          <div>{formatDateToIndonesian(row.updated_at, true)}</div>
        </div>
      )}
    </div>
  );
};

export default LanguageAiTableDateColumn;
