import {Suspense} from "react";
import {setRequestLocale} from "next-intl/server";
import {About} from "@/components/about";
import {Contact} from "@/components/contact";
import {Hero} from "@/components/hero";
import {HowItWorks} from "@/components/how-it-works";
import {ProductsSection} from "@/components/products-section";
import {ScrollToContact} from "@/components/scroll-to-contact";
import {TrustBar} from "@/components/trust-bar";
import {WhyUs} from "@/components/why-us";

type Props = {
  params: Promise<{locale: string}>;
};

export default async function HomePage({params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Suspense fallback={null}>
        <ScrollToContact />
      </Suspense>
      <Hero />
      <TrustBar />
      <About />
      <ProductsSection />
      <HowItWorks />
      <WhyUs />
      <Contact />
    </>
  );
}
