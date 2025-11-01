import Script from "next/script";
import { Footer } from "./_footer";
import { Header } from "./_header";
import { createOrganizationSchema } from "./properties/_lib/create-organization-schema";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const orgLd = createOrganizationSchema();

  return (
    <>
      <Script
        id="organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orgLd).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default ClientLayout;
