import type { Metadata } from "next";

import BrandPage from "@/components/brand-page/BrandPage";
import { hearingAidBrands } from "@/data/hearingAidBrands";

const brand = hearingAidBrands.signia;

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
};

export default function SigniaHearingAidPage() {
  return <BrandPage brand={brand} />;
}
