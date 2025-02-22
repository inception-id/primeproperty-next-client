type TranslateTitleColumnProps = {
  row: {
    title: string | null;
    created_at: string;
  };
};

const TranslateTitleColumn = ({ row }: TranslateTitleColumnProps) => {
  return (
    <div>
      {row.title ? (
        <div className="whitespace-pre-line">{row.title}</div>
      ) : (
        <div className="opacity-50">No title</div>
      )}
    </div>
  );
};

export default TranslateTitleColumn;
