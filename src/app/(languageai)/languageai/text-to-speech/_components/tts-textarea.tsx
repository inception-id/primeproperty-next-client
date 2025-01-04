import {Textarea} from "@/components/ui/textarea";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {LuX} from "react-icons/lu";

const TtsTextarea = () => {
    const [value, setValue] = useState<string>("");
    return (
        <div className="w-full h-96 rounded-md border flex">
            <Textarea
                autoFocus
                name="input"
                placeholder="Enter text"
                className="focus-visible:ring-0 focus-visible:ring-offset-0 resize-none border-transparent"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button variant="ghost">
               <LuX />
            </Button>
        </div>
    )
};

export default TtsTextarea;