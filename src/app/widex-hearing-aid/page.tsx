import type { Metadata } from "next";

import BrandPage from "@/components/brand-page/BrandPage";
import { hearingAidBrands } from "@/data/hearingAidBrands";

const brand = hearingAidBrands.widex;

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
};

export default function WidexHearingAidPage() {
  return <BrandPage brand={brand} />;
}
