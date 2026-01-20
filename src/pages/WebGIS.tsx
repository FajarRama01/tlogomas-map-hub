import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Map,
  ExternalLink,
  MousePointer,
  Layers,
  Info,
  ZoomIn,
  ZoomOut,
  Navigation,
  Search,
  Download,
  Printer,
} from "lucide-react";
import mapPreviewImage from "@/assets/map-preview.jpg";

const instructions = [
  {
    icon: ZoomIn,
    title: "Zoom In/Out",
    description: "Gunakan scroll mouse atau tombol +/- untuk memperbesar atau memperkecil peta",
  },
  {
    icon: MousePointer,
    title: "Pan/Geser Peta",
    description: "Klik dan tahan lalu geser untuk memindahkan tampilan peta",
  },
  {
    icon: Info,
    title: "Lihat Informasi",
    description: "Klik pada marker fasilitas untuk melihat informasi detail",
  },
  {
    icon: Layers,
    title: "Layer Control",
    description: "Aktifkan atau nonaktifkan layer yang ingin ditampilkan",
  },
  {
    icon: Search,
    title: "Pencarian",
    description: "Gunakan fitur pencarian untuk menemukan fasilitas tertentu",
  },
  {
    icon: Navigation,
    title: "Lokasi Saya",
    description: "Temukan lokasi Anda saat ini pada peta",
  },
];

const legend = [
  { color: "bg-blue-500", label: "Sekolah Dasar (SD/MI)" },
  { color: "bg-green-500", label: "Sekolah Menengah Pertama (SMP/MTs)" },
  { color: "bg-yellow-500", label: "Sekolah Menengah Atas (SMA/SMK/MA)" },
  { color: "bg-red-500", label: "Perguruan Tinggi" },
];

const WebGIS = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Map className="w-4 h-4" />
              WEBGIS Interaktif
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Peta Fasilitas Pendidikan
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Jelajahi peta interaktif yang menampilkan sebaran fasilitas pendidikan 
              di Kelurahan Tlogomas, Kota Malang.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="card-elevated overflow-hidden">
            {/* Map Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-ocean-light flex items-center justify-center">
                  <Map className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display font-semibold">WEBGIS Tlogomas</h2>
                  <p className="text-sm text-muted-foreground">Pemetaan Fasilitas Pendidikan</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* <Button variant="outline" size="sm">
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Unduh</span>
                </Button>
                <Button variant="outline" size="sm">
                  <Printer className="w-4 h-4" />
                  <span className="hidden sm:inline">Cetak</span>
                </Button> */}
                <a
                  href="/WEBGIS/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="sm">
                    <ExternalLink className="w-4 h-4" />
                    Fullscreen
                  </Button>
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            {/* <div className="relative aspect-[16/9] bg-muted">
              <img
                src={mapPreviewImage}
                alt="WEBGIS Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/50">
                <div className="text-center text-primary-foreground">
                  <Map className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h3 className="font-display text-2xl font-semibold mb-2">
                    Peta WEBGIS
                  </h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Klik tombol di bawah untuk membuka peta interaktif
                  </p>
                  <a
                    href="/WEBGIS/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="hero" size="lg">
                      <Navigation className="w-5 h-5" />
                      Buka Peta Interaktif
                      <ExternalLink className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div> */}
            <div className="w-full h-[80vh] bg-muted relative">
              <iframe
                src="/WEBGIS/index.html"
                title="Peta WebGIS Tlogomas"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-6 text-center">Legenda Peta</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {legend.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                >
                  <div className={`w-4 h-4 rounded-full ${item.color}`} />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Cara Menggunakan Peta</h2>
            <p className="text-muted-foreground">
              Panduan penggunaan fitur-fitur pada peta interaktif WEBGIS.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {instructions.map((instruction, index) => (
              <div key={index} className="card-interactive p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                  <instruction.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{instruction.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {instruction.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold mb-8 text-center">Fitur WEBGIS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Peta Interaktif",
                  description: "Peta yang dapat di-zoom, digeser, dan diklik untuk melihat informasi detail setiap fasilitas.",
                },
                {
                  title: "Multi-Layer",
                  description: "Tampilkan berbagai layer seperti batas wilayah, jalan, dan fasilitas pendidikan.",
                },
                {
                  title: "Popup Informasi",
                  description: "Informasi lengkap setiap fasilitas muncul saat marker diklik.",
                },
                {
                  title: "Responsif",
                  description: "Dapat diakses dari berbagai perangkat baik desktop maupun mobile.",
                },
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-xl bg-muted/50 border border-border">
                  <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebGIS;
