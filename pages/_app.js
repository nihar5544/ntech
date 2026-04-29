import Header from "@/components/header/Header";
import "../public/styles/globals.css";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function App({ Component, pageProps }) {
  let schema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "ntech",
    url: "https://www.ntech.io/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.ntech.io/{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="min-h-screen flex flex-col justify-between max-w-[2000px] mx-auto">
      <Head>
        <title>ntech — Your Trusted Digital Solutions Partner</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="ntech delivers professional web development, web applications, game development, graphic design, SEO, and IT support services for businesses worldwide."
        />
        <meta
          property="og:title"
          content="ntech — Your Trusted Digital Solutions Partner"
        />
        <meta property="og:site_name" content="ntech.io" />
        <meta property="og:url" content="https://www.ntech.io/" />
        <meta
          property="og:description"
          content="ntech delivers professional web development, web applications, game development, graphic design, SEO, and IT support services for businesses worldwide."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.ntech.io/favicon.ico"
        />
      </Head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />
      <Component {...pageProps} />
      <Toaster />

      <Footer />
    </main>
  );
}
