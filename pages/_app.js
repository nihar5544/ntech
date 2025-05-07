import Header from "@/components/header/Header";
import "../public/styles/globals.css";
import "./_document";
import Head from "next/head";
import Script from "next/script";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function App({ Component, pageProps }) {
  let schema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "coindelta",
    url: "https://www.coindelta.io/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.coindelta.io/{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <main className="min-h-screen flex flex-col justify-between max-w-[2000px] mx-auto">
      <Head>
        <title>Coindelta-Trusted Partner For Web3 Infrastructure</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="Coin Delta is trusted by some of the world's most credible asset management companies and high-net-worth investment professionals participating in staking."
        />
        <meta
          property="og:title"
          content="Coindelta-Trusted Partner For Web3 Infrastructure"
        />
        <meta property="og:site_name" content="coindelta.io" />
        <meta property="og:url" content="https://www.coindelta.io/" />
        <meta
          property="og:description"
          content="Coin Delta is trusted by some of the world's most credible asset management companies and high-net-worth investment professionals participating in staking."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.coindelta.io/favicon.ico"
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
