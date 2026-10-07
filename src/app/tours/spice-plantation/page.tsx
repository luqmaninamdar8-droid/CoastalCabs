import type { Metadata } from "next";
import { TourArticle } from "@/components/TourArticle";
import { getTour } from "@/lib/site";

const slug = "spice-plantation";
const tour = getTour(slug);

export const metadata: Metadata = {
  title: tour?.title ?? "Tour",
  description: tour?.summary,
};

export default function SpiceTourPage() {
  return <TourArticle slug={slug} />;
}
