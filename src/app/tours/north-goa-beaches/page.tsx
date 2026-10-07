import type { Metadata } from "next";
import { TourArticle } from "@/components/TourArticle";
import { getTour } from "@/lib/site";

const slug = "north-goa-beaches";
const tour = getTour(slug);

export const metadata: Metadata = {
  title: tour?.title ?? "Tour",
  description: tour?.summary,
};

export default function NorthGoaTourPage() {
  return <TourArticle slug={slug} />;
}
