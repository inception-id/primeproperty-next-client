'use client'
import {createContext} from "react";
import {useCompletion} from "ai/react";

type TTranslateProvider = {
    children: React.ReactNode;
}

export const TranslateContext = createContext<any>(null);

const TranslateProvider = ({children}: TTranslateProvider) => {
    const context = useCompletion()
    return (
        <TranslateContext.Provider value={context}>
            {children}
        </TranslateContext.Provider>
    )
};

export default TranslateProvider;