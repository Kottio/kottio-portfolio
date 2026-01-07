import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation Data Engineering Full Stack - Construisez sur de vraies données | KOTTIO",
  description:
    "La seule formation data engineering où vous construisez des pipelines complets sur une vraie application SaaS avec accès à un read replica de production. Tarif de lancement : 40€. Apprenez dlt, dbt, PostgreSQL, Metabase en pratique.",
  keywords: [
    "formation data engineering",
    "data pipeline",
    "dlt",
    "dbt",
    "PostgreSQL",
    "Metabase",
    "formation data analyst",
    "analytics engineer",
    "docker data",
    "python data engineering",
  ],
  authors: [{ name: "Thomas Cottiaux - KOTTIO" }],
  openGraph: {
    title: "Formation Data Engineering Full Stack - KOTTIO",
    description:
      "Arrêtez d'apprendre avec des datasets Kaggle. Construisez sur de vraies données de production. Tarif de lancement : 40€",
    type: "website",
    locale: "fr_FR",
    url: "https://kottio.com/course",
    siteName: "KOTTIO",
    images: [
      {
        url: "/fullStackData/schemacourse.png",
        width: 1200,
        height: 630,
        alt: "Formation Data Engineering Full Stack - Pipeline complet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation Data Engineering Full Stack - KOTTIO",
    description:
      "La seule formation data engineering sur de vraies données de production. Tarif de lancement : 40€",
    images: ["/fullStackData/schemacourse.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
