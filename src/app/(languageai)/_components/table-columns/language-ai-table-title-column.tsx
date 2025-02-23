type LanguageAiTableTitleColumnProps = {
  row: {
    title: string | null;
  };
};

const LanguageAiTableTitleColumn = ({
  row,
}: LanguageAiTableTitleColumnProps) => {
  return (
    <>
      {row.title ? (
        <div className="whitespace-pre-line">{row.title}</div>
      ) : (
        <div className="opacity-50">No title</div>
      )}
    </>
  );
};

export default LanguageAiTableTitleColumn;
