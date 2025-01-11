import { LuSearch } from "react-icons/lu";

type TTableDataNotFoundProps = {
    text: string;
}

const TableDataNotFound = ({text}: TTableDataNotFoundProps) => {
    return (
        <div className="w-full h-96 flex items-center justify-center gap-4 text-xl">
            <LuSearch className="text-5xl" />
            {text}
        </div>
    );
};

export default TableDataNotFound;
