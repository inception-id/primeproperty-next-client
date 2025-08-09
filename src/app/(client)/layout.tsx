import { Footer } from "./_footer";
import { Header } from "./_header";
import { createOrganizationSchema } from "./properties/_lib/create-organization-schema";
import { createPropertiesFaqSchema } from "./properties/_lib/create-propertis-faq-schema";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const orgLd = createOrganizationSchema();
  const faqLd = createPropertiesFaqSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;
