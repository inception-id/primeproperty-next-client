"use client";

import { useEffect } from "react";
export const GoogleTranslateElement = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element",
    );
  };
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
    return () => {
      // cleanup: remove Google Translate iframe and script if needed
      const iframe = document.querySelector(".goog-te-banner-frame");
      if (iframe) iframe.remove();
      document
        .querySelectorAll("script[src*='translate_a']")
        .forEach((el) => el.remove());
    };
  }, []);
  return <div id="google_translate_element" />;
};
