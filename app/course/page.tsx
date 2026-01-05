"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  GitBranch,
  Layers,
  Rocket,
  Users,
  Zap,
  Terminal,
  BarChart,
  Cloud,
} from "lucide-react";
import CourseEmailCaptureForm from "@/components/sections/CourseEmailCaptureForm";

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <a
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity w-fit"
          >
            <Image
              src={"/face.png"}
              alt="Thomas Cottiaux logo | KOTTIO logo"
              height={50}
              width={50}
              className="h-[50px] w-[50px] lg:h-[60px] lg:w-[60px]"
            />
            <span className="text-black text-2xl lg:text-3xl font-bold ml-2">
              KOTTIO
            </span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20">
        {/* Placeholder for background image - will be added tomorrow */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left side - Main content */}
            <div className="flex-1 max-w-3xl">
              {/* Badge */}

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Arrêtez d'apprendre avec des{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  datasets Kaggle
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Construisez sur de{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  vraies données de production
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                La seule formation data engineering où vous construisez des
                pipelines complets sur une vraie application SaaS avec accès à
                un read replica de production.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-violet-600 mb-1">
                    9 modules
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Setup → Production
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">
                    100%
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Pratique
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                    Réel
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Production SaaS
                  </div>
                </div>
              </div>

              {/* CTA Button - Desktop only */}
              <div className="hidden md:block">
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200"
                >
                  Voir le programme
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right side - Email Form (Desktop) */}
            <div className="hidden md:block flex-shrink-0 w-full md:w-[400px] lg:w-[450px]">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 lg:p-8 border border-gray-200">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  Soyez les premiers
                </h3>
                <p className="text-gray-600 mb-6">
                  Inscrivez-vous à la liste d'attente pour le{" "}
                  <strong>tarif early-bird</strong> et du contenu bonus
                  exclusif.
                </p>

                <CourseEmailCaptureForm />

                <p className="text-center text-xs text-gray-500 mt-4">
                  Pas de spam. Juste des updates sur le lancement.
                </p>

                {/* Benefits */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Tarif early-bird exclusif</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Accès prioritaire Cohorte 1</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Contenu bonus avant lancement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile - Email Form below text */}
            <div className="block md:hidden w-full">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Rejoignez la Cohorte 1
                </h3>
                <p className="text-gray-600 mb-4">
                  Inscrivez-vous pour le <strong>tarif early-bird</strong>.
                </p>

                <CourseEmailCaptureForm />

                <p className="text-center text-xs text-gray-500 mt-3">
                  Pas de spam. Juste des updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Le problème avec les formations data traditionnelles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vous avez déjà suivi des cours data ? Laissez-moi deviner...
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* The Problem */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-2">
                ❌ Approche Traditionnelle
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-700">
                    Datasets Kaggle statiques déjà nettoyés
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-700">
                    Projets déconnectés de la réalité business
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-700">
                    Aucune notion d'architecture scalable
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-700">
                    Environnement local simpliste
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-gray-700">
                    Zéro déploiement en production
                  </span>
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center gap-2">
                ✅ Full Stack Data Builder
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Read replica d'une vraie app SaaS en production
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    API d'événements temps réel de clients B2B
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Stack moderne : Docker, dlt, dbt, Metabase
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Pipeline complet de A à Z
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Déploiement sur DigitalOcean
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Placeholder for screenshot */}
          <div className="bg-slate-100 rounded-2xl p-12 text-center border-2 border-slate-200">
            <Terminal className="w-16 h-16 text-violet-600 mx-auto mb-4" />
            <p className="text-gray-600 text-lg font-semibold mb-2">
              Screenshot de terminal à venir
            </p>
            <p className="text-gray-500 text-sm">
              Docker containers + pipeline dlt en action
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section
        id="curriculum"
        className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Ce que vous allez construire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              9 modules pour passer de zéro à un pipeline data complet en
              production
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Module 1 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-violet-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-violet-100 rounded-lg p-3">
                  <Code className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <div className="text-sm text-violet-600 font-semibold">
                    Module 1
                  </div>
                  <h3 className="font-bold text-gray-900">
                    Setup Environnement
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Docker, Python, Git - Les fondations d'un environnement data
                moderne
              </p>
            </div>

            {/* Module 2 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-indigo-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-100 rounded-lg p-3">
                  <Layers className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="text-sm text-indigo-600 font-semibold">
                    Module 2
                  </div>
                  <h3 className="font-bold text-gray-900">
                    Containers & Infrastructure
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                PostgreSQL, Metabase - Votre infrastructure locale en containers
              </p>
            </div>

            {/* Module 3 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-purple-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-100 rounded-lg p-3">
                  <Database className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm text-purple-600 font-semibold">
                    Module 3
                  </div>
                  <h3 className="font-bold text-gray-900">
                    Ingestion de Données
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                dlt, API patterns - Connectez-vous au read replica et à l'API
                d'événements
              </p>
            </div>

            {/* Module 4 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <BarChart className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-blue-600 font-semibold">
                    Module 4
                  </div>
                  <h3 className="font-bold text-gray-900">
                    Exploration & Métriques
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Définissez les KPIs business et explorez les données comme un
                pro
              </p>
            </div>

            {/* Module 5 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-cyan-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-cyan-100 rounded-lg p-3">
                  <BarChart className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <div className="text-sm text-cyan-600 font-semibold">
                    Module 5
                  </div>
                  <h3 className="font-bold text-gray-900">
                    Dashboards & SQL Avancé
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                CTEs, window functions - Créez des dashboards puissants dans
                Metabase
              </p>
            </div>

            {/* Module 6 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-pink-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-pink-100 rounded-lg p-3">
                  <Zap className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <div className="text-sm text-pink-600 font-semibold">
                    Module 6
                  </div>
                  <h3 className="font-bold text-gray-900">
                    Orchestration & Automation
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Cron jobs, monitoring - Automatisez vos pipelines comme en
                production
              </p>
            </div>

            {/* Module 7 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-100 rounded-lg p-3">
                  <GitBranch className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="text-sm text-orange-600 font-semibold">
                    Module 7
                  </div>
                  <h3 className="font-bold text-gray-900">
                    dbt Transformations
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Transformations production-grade avec tests, documentation et
                lineage
              </p>
            </div>

            {/* Module 8 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-green-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-100 rounded-lg p-3">
                  <Cloud className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-green-600 font-semibold">
                    Module 8
                  </div>
                  <h3 className="font-bold text-gray-900">
                    Déploiement Production
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                DigitalOcean, sécurité - Déployez votre pipeline en production
              </p>
            </div>

            {/* Module 9 */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-violet-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-violet-100 rounded-lg p-3">
                  <Rocket className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <div className="text-sm text-violet-600 font-semibold">
                    Module 9 (Bonus)
                  </div>
                  <h3 className="font-bold text-gray-900">ML Pipelines</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Ajoutez du machine learning à vos pipelines data
              </p>
            </div>
          </div>

          {/* Architecture Diagram Placeholder */}
          <div className="bg-slate-100 rounded-2xl p-12 text-center border-2 border-slate-200">
            <Layers className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
            <p className="text-gray-600 text-lg font-semibold mb-4">
              Architecture Diagram à venir
            </p>
            <div className="text-gray-700 text-sm font-mono space-y-1 bg-white p-4 rounded-lg inline-block">
              <p>API Kottio → dlt → PostgreSQL → dbt → Metabase</p>
              <p className="text-center">↓</p>
              <p className="text-center">Wisdom Wall</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi c'est différent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une formation créée par un consultant data actif, pas un formateur
              théorique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Differentiator 1 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-violet-200 hover:border-violet-400 transition-colors shadow-sm">
              <Database className="w-12 h-12 text-violet-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vraies Données de Production
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Accès à un <strong>read replica</strong> d'une vraie plateforme
                SaaS de conseil data. Pas de CSV fictifs - vous travaillez sur
                les mêmes données que mes clients B2B utilisent pour prendre des
                décisions business.
              </p>
            </div>

            {/* Differentiator 2 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-indigo-200 hover:border-indigo-400 transition-colors shadow-sm">
              <Zap className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stack Moderne & Actuel
              </h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Docker, dlt, dbt, Metabase</strong> - Les outils que les
                entreprises utilisent réellement en 2025. Pas de technologies
                obsolètes ou trop académiques. Ce que vous apprenez est
                directement applicable.
              </p>
            </div>

            {/* Differentiator 3 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-colors shadow-sm">
              <Rocket className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Projet de Bout en Bout
              </h3>
              <p className="text-gray-700 leading-relaxed">
                De l'ingestion à la visualisation, jusqu'au{" "}
                <strong>déploiement en production</strong>. La plupart des
                formations s'arrêtent à "ça marche sur mon laptop". Ici, vous
                déployez réellement sur DigitalOcean.
              </p>
            </div>

            {/* Differentiator 4 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-pink-200 hover:border-pink-400 transition-colors shadow-sm">
              <Users className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Wisdom Wall - Composante Sociale
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Partagez vos découvertes, tips et questions avec la communauté.
                Apprenez des <strong>insights data</strong> des autres
                étudiants. L'apprentissage collaboratif au service de la data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / About Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Photo Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-200 rounded-2xl flex items-center justify-center border-2 border-slate-300">
                  <Users className="w-16 h-16 text-slate-400" />
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Photo à venir
                </p>
              </div>

              {/* About Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Créé par un praticien actif
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Je ne suis pas un formateur à temps plein qui enseigne la
                    data. Je suis un <strong>consultant data actif</strong> qui
                    forme sur ce qu'il fait au quotidien.
                  </p>
                  <p>
                    Diplômé <strong>ESADE Business School</strong>, certifié{" "}
                    <strong>AWS</strong>, j'accompagne des clients{" "}
                    <strong>B2B SaaS</strong> dans la construction de leurs
                    infrastructures data et analytics.
                  </p>
                  <p>
                    Cette formation, c'est exactement ce que j'aurais voulu
                    avoir quand j'ai démarré : un projet réaliste, des vraies
                    données, et un parcours complet jusqu'au déploiement.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Pas de bullshit. Que du concret.
                  </p>
                </div>

                {/* Credentials */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-lg font-semibold text-sm">
                    ESADE Business School
                  </span>
                  <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg font-semibold text-sm">
                    AWS Certified
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-semibold text-sm">
                    B2B SaaS Clients
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              C'est pour vous si...
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 text-center border-2 border-violet-200 hover:border-violet-400 transition-colors">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Data Analyst
              </h3>
              <p className="text-gray-700">
                Vous voulez évoluer vers <strong>Analytics Engineer</strong> et
                maîtriser l'infrastructure derrière vos analyses
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Développeur
              </h3>
              <p className="text-gray-700">
                Vous voulez vous <strong>spécialiser en data</strong> et
                comprendre les pipelines end-to-end
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Data Engineer Junior
              </h3>
              <p className="text-gray-700">
                Vous cherchez une <strong>expérience pratique réaliste</strong>{" "}
                pour renforcer votre portfolio
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              ⚡ Prérequis : Niveau Intermédiaire
            </h3>
            <p className="text-gray-700 mb-4">
              Cette formation n'est{" "}
              <strong>pas pour les débutants absolus</strong>. Vous devez avoir
              :
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>
                  Bases de <strong>Python</strong> (variables, fonctions,
                  boucles)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>
                  Bases de <strong>SQL</strong> (SELECT, JOIN, WHERE)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>
                  Confort avec le <strong>terminal</strong> / ligne de commande
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Rejoignez la Cohorte 1
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Lancement prévu <strong>Printemps 2025</strong>. Soyez les
              premiers informés et bénéficiez du{" "}
              <strong>tarif early-bird exclusif</strong>.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Be the First to Build 🚀
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Inscrivez-vous à la liste d'attente pour recevoir :
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Tarif early-bird</strong> réservé aux premiers
                    inscrits
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Contenu bonus</strong> avant le lancement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Accès prioritaire à la <strong>Cohorte 1</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Updates sur le développement de la formation
                  </span>
                </li>
              </ul>
            </div>

            <CourseEmailCaptureForm />

            <p className="text-center text-sm text-gray-500 mt-6">
              Pas de spam. Que des updates pertinentes sur le lancement. Vous
              pouvez vous désinscrire à tout moment.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💰 Quel est le prix de la formation ?
              </h3>
              <p className="text-gray-700">
                Le prix sera annoncé aux inscrits de la liste d'attente en
                priorité. Les early-birds bénéficieront d'une{" "}
                <strong>réduction significative</strong> sur le tarif final.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ⏱️ Combien de temps dure la formation ?
              </h3>
              <p className="text-gray-700">
                La formation est <strong>self-paced</strong> avec un accès à vie
                au contenu. Comptez environ <strong>8-12 semaines</strong> à
                raison de 5-10h par semaine pour compléter l'ensemble du
                parcours.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🤝 Y a-t-il un support / accompagnement ?
              </h3>
              <p className="text-gray-700">
                Oui ! Accès à un <strong>Discord privé</strong> pour poser vos
                questions, partager vos progrès et interagir avec la communauté.
                Je serai également présent pour répondre aux questions
                techniques.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🖥️ Quel matériel est nécessaire ?
              </h3>
              <p className="text-gray-700">
                Un ordinateur capable de faire tourner <strong>Docker</strong>{" "}
                (Mac, Linux, ou Windows avec WSL2). Minimum 8GB de RAM
                recommandé, 16GB idéal. Tout le reste est dans le cloud.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                📜 Est-ce qu'il y a un certificat à la fin ?
              </h3>
              <p className="text-gray-700">
                Mieux qu'un certificat : un{" "}
                <strong>projet portfolio complet</strong> déployé en production
                que vous pourrez montrer lors d'entretiens. C'est ce qui fait
                vraiment la différence.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                🌍 La formation est-elle en français ou en anglais ?
              </h3>
              <p className="text-gray-700">
                Le contenu principal sera en <strong>français</strong>, mais
                certaines ressources techniques (documentation, outils) seront
                naturellement en anglais, comme dans le monde réel de la data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white border-t-2 border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Prêt à construire sur de vraies données ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Arrêtez les tutoriels Kaggle. Rejoignez la liste d'attente.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Rejoindre la liste d'attente
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
