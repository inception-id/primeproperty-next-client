import {LuSearch} from "react-icons/lu";

const EmptyHistory= () => {
    return (
        <div className="w-full h-96 flex items-center justify-center gap-4 text-xl">
            <LuSearch className="text-5xl"/>
            No History Found
        </div>
    )
};

export default EmptyHistory;