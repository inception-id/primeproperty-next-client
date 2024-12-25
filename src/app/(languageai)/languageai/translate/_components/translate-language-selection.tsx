import {useQuery} from "@tanstack/react-query";
import {findAllLanguages} from "@/lib/api/languages/findAllLanguages";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {LuArrowRight} from "react-icons/lu";

const TranslateLanguageSelection = () => {
    const {data} = useQuery({queryKey: ["translateLanguageSelection"], queryFn: async ()=> {
        try {
        const languages = await findAllLanguages()
           return  languages.data
        } catch (e:any) {
           console.error(e)
            return  []
        }
        }})
    return (
        <div className="flex items-center p-2 gap-2">
            <Select name="content_language">
                <SelectTrigger className="capitalize">
                    <SelectValue placeholder="Detect language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="detect">Detect language</SelectItem>
                    {data && data?.length > 0 && data?.map((language)=>
                    <SelectItem value={language.title} key={`detect_${language.id}`} className="capitalize">{language.title}</SelectItem>
                    )}
                </SelectContent>
            </Select>
            <LuArrowRight className="text-3xl"/>
            <Select name="target_language">
                <SelectTrigger className="capitalize">
                    <SelectValue placeholder="Target language"  />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="detect">Target language</SelectItem>
                    {data && data?.length > 0 && data?.map((language)=>
                        <SelectItem value={language.title} key={`detect_${language.id}`} className="capitalize">{language.title}</SelectItem>
                    )}
                </SelectContent>
            </Select>
        </div>
    )
};

export default TranslateLanguageSelection;