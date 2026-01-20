import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import {
  MapPin,
  Target,
  BarChart3,
  Users,
  Globe,
  School,
  GraduationCap,
  Building2,
  BookOpen,
  Layers,
  MousePointer,
  Info,
  Map,
  ArrowRight,
  Code,
  Database,
  FileJson,
  ExternalLink,
  Compass,
  Navigation,
} from "lucide-react";
import heroMapImage from "@/assets/hero-map.jpg";
import mapPreviewImage from "@/assets/map-preview.jpg";

const objectives = [
  {
    icon: MapPin,
    title: "Pemetaan Spasial",
    description: "Memetakan fasilitas pendidikan secara spasial dengan koordinat yang akurat",
  },
  {
    icon: BarChart3,
    title: "Informasi Geografis",
    description: "Menyediakan informasi geografis yang akurat dan terstruktur",
  },
  {
    icon: Users,
    title: "Kepentingan Publik",
    description: "Mendukung keperluan publik dan akademik dalam perencanaan pendidikan",
  },
  {
    icon: Globe,
    title: "Aksesibilitas Data",
    description: "Meningkatkan aksesibilitas data spasial pendidikan bagi masyarakat",
  },
];

const facilities = [
  {
    icon: School,
    title: "Sekolah Dasar",
    subtitle: "SD/MI",
    count: 3,
    color: "from-primary to-ocean-light",
  },
  {
    icon: BookOpen,
    title: "Sekolah Menengah Pertama",
    subtitle: "SMP/MTs",
    count: 1,
    color: "from-accent to-forest-light",
  },
  {
    icon: GraduationCap,
    title: "Sekolah Menengah Atas",
    subtitle: "SMA/SMK/MA",
    count: 3,
    color: "from-earth to-earth-light",
  },
  {
    icon: Building2,
    title: "Pendidikan Tinggi",
    subtitle: "Universitas/Politeknik",
    count: 3,
    color: "from-ocean-deep to-primary",
  },
];

const tools = [
  { name: "QGIS", description: "Desktop GIS" },
  { name: "GeoJSON", description: "Data Format" },
  { name: "Leaflet", description: "Web Mapping" },
  { name: "HTML/CSS/JS", description: "Frontend" },
  { name: "React", description: "UI Framework" },
  { name: "Tailwind", description: "Styling" },
];

const mapFeatures = [
  { icon: MousePointer, label: "Zoom In/Out" },
  { icon: Info, label: "Popup Info" },
  { icon: Layers, label: "Layer Control" },
  { icon: Map, label: "Legenda" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroMapImage}
            alt="Peta Tlogomas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep/95 via-primary/90 to-forest/80" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-10 z-10" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
              <Compass className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">
                Proyek UAS Sistem Informasi Geografis
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
              Sistem Informasi Geografis{" "}
              <span className="relative">
                <span className="relative z-10">Pemetaan Fasilitas Pendidikan</span>
                <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/30 -z-10 rounded" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 animate-slide-up font-display" style={{ animationDelay: "0.1s" }}>
              Kelurahan Tlogomas, Kota Malang
            </p>

            {/* Description */}
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Menyajikan pemetaan komprehensif fasilitas pendidikan menggunakan teknologi 
              Geographic Information System (GIS) untuk mendukung perencanaan dan 
              aksesibilitas informasi pendidikan.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/webgis">
                <Button variant="hero" size="xl" className="group">
                  <Navigation className="w-5 h-5" />
                  Lihat WEBGIS
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/project">
                <Button variant="heroOutline" size="xl">
                  <Info className="w-5 h-5" />
                  Tentang Proyek
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              {[
                { value: 10, label: "Fasilitas Pendidikan", suffix: "+" },
                { value: 4, label: "Kategori", suffix: "" },
                { value: 1, label: "Kelurahan", suffix: "" },
                { value: 100, label: "Data Spasial", suffix: "%" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-primary-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full contour-lines opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            badge="Tentang Proyek"
            title="Mengenal Sistem Informasi Geografis"
            description="Sistem Informasi Geografis (SIG) adalah sistem yang dirancang untuk menangkap, menyimpan, memanipulasi, menganalisis, mengelola, dan mempresentasikan semua jenis data geografis."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="card-interactive p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-ocean-light flex items-center justify-center mb-6">
                <Database className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Definisi SIG</h3>
              <p className="text-muted-foreground leading-relaxed">
                SIG merupakan sistem komputer yang memiliki kemampuan untuk mengolah, menyimpan, 
                dan menganalisis informasi geografis yang bereferensi keruangan.
              </p>
            </div>

            <div className="card-interactive p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-forest-light flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Data Spasial Pendidikan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Data spasial sangat penting dalam perencanaan pendidikan untuk mengetahui 
                sebaran, aksesibilitas, dan kebutuhan fasilitas pendidikan di suatu wilayah.
              </p>
            </div>

            <div className="card-interactive p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-earth to-earth-light flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">Wilayah Studi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kelurahan Tlogomas merupakan salah satu kelurahan di Kecamatan Lowokwaru, 
                Kota Malang yang memiliki berbagai fasilitas pendidikan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Tujuan"
            title="Tujuan Pemetaan"
            description="Proyek ini bertujuan untuk memetakan dan menyajikan informasi fasilitas pendidikan secara komprehensif."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="card-interactive p-6 text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <objective.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{objective.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Pratinjau"
                title="Peta Interaktif WEBGIS"
                description="Jelajahi peta interaktif yang menampilkan lokasi fasilitas pendidikan di Kelurahan Tlogomas dengan berbagai fitur navigasi dan informasi."
                centered={false}
              />

              <div className="grid grid-cols-2 gap-4 mt-8">
                {mapFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/webgis" className="inline-block mt-8">
              <a href="/WEBGIS/index.html" target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
                <Button variant="hero" size="lg" className="group">
                  <Map className="w-5 h-5" />
                  Buka Peta Interaktif
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              </Link>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border h-[500px] bg-gray-100">
                
                {/* KODE BARU: IFRAME PETA */}
                <iframe 
                  src="/WEBGIS/index.html" 
                  title="Peta WebGIS Tlogomas"
                  className="w-full h-full border-0"
                  allowFullScreen
                ></iframe>
              {/* <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"> */}
                {/* <img
                  src={mapPreviewImage}
                  alt="Preview Peta WEBGIS"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Kategori"
            title="Fasilitas Pendidikan"
            description="Berbagai kategori fasilitas pendidikan yang dipetakan dalam proyek ini."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="card-interactive p-6 group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <facility.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{facility.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{facility.subtitle}</p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-display font-bold text-primary">
                    <AnimatedCounter end={facility.count} />
                  </span>
                  <span className="text-muted-foreground mb-1">fasilitas</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Teknologi"
            title="Tools & Teknologi"
            description="Perangkat dan teknologi yang digunakan dalam pengembangan proyek WEBGIS ini."
          />

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold">{tool.name}</div>
                  <div className="text-xs text-muted-foreground">{tool.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep via-primary to-forest" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Siap Menjelajahi Peta Interaktif?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
              Akses WEBGIS sekarang untuk melihat sebaran fasilitas pendidikan di 
              Kelurahan Tlogomas secara interaktif dan komprehensif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/webgis">
                <Button variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  <Navigation className="w-5 h-5" />
                  Akses WEBGIS Sekarang
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/documentation">
                <Button variant="heroOutline" size="xl">
                  <FileJson className="w-5 h-5" />
                  Lihat Dokumentasi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
