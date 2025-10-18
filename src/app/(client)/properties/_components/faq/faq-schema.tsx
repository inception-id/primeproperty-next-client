import { FAQ_ONE, FAQ_THREE, FAQ_TWO } from "./faq-primepro";
import { FAQ_PROPERTY } from "./faq-property";

export const FaqSchema = () => {
  const schemaLd = () => {
    const FAQS = [...FAQ_PROPERTY, ...FAQ_ONE, ...FAQ_TWO, ...FAQ_THREE];
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "#faq",
      mainEntity: FAQS.map((faq) => {
        return {
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: String(faq.answer),
          },
        };
      }),
    };
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaLd()).replace(/</g, "\\u003c"),
      }}
    />
  );
};
