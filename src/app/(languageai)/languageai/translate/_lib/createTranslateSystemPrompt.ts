export const createTranslateSystemPrompt = (
    contentLanguage: string,
    targetLanguage: string,
) => {
    if (contentLanguage === "" || contentLanguage === "detect") {
        return `You are a translator. You will be provided with a text, and your task is translate the text to ${targetLanguage}. If the text is an idiom, explain the meaning of the idiom. If it's not an idiom, translate the text literally.`;
    }

    return `You are a translator. You will be provided with a text, and your task is to translate the text from ${contentLanguage} to ${targetLanguage}. If the text is idiom, explain the meaning of the idiom. If it's not an idiom, translate the text literally.`;
};