import type { Metadata } from "next";
import { TourArticle } from "@/components/TourArticle";
import { getTour } from "@/lib/site";

const slug = "dudhsagar";
const tour = getTour(slug);

export const metadata: Metadata = {
  title: tour?.title ?? "Tour",
  description: tour?.summary,
};

export default function DudhsagarTourPage() {
  return <TourArticle slug={slug} />;
}
