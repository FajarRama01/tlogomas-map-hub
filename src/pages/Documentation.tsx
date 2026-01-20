import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  Image,
  Database,
  Map,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  ExternalLink,
  FileJson,
  Layers,
} from "lucide-react";
import mapPreviewImage from "@/assets/map-preview.jpg";
import heroMapImage from "@/assets/hero-map.jpg";

const datasets = [
  {
    name: "Fasilitas Pendidikan",
    format: "GeoJSON",
    records: 29,
    description: "Data lokasi dan atribut fasilitas pendidikan",
  },
  {
    name: "Batas Administrasi",
    format: "GeoJSON",
    records: 1,
    description: "Batas wilayah Kelurahan Tlogomas",
  },
  {
    name: "Jaringan Jalan",
    format: "GeoJSON",
    records: 45,
    description: "Data jaringan jalan di wilayah studi",
  },
];

const outputs = [
  {
    title: "Peta Sebaran Fasilitas",
    description: "Peta yang menunjukkan lokasi seluruh fasilitas pendidikan",
  },
  {
    title: "Peta Per Kategori",
    description: "Peta terpisah untuk setiap jenjang pendidikan",
  },
  {
    title: "WEBGIS Interaktif",
    description: "Aplikasi peta berbasis web yang dapat diakses publik",
  },
  {
    title: "Statistik Fasilitas",
    description: "Data statistik jumlah dan sebaran fasilitas",
  },
];

const limitations = [
  "Data terbatas pada wilayah Kelurahan Tlogomas",
  "Tidak mencakup fasilitas pendidikan non-formal",
  "Akurasi koordinat bergantung pada GPS yang digunakan",
  "Data atribut berdasarkan informasi yang tersedia saat survei",
  "Tidak mencakup analisis aksesibilitas secara mendalam",
];

const futureDevelopment = [
  "Penambahan fitur analisis buffer dan aksesibilitas",
  "Integrasi data real-time dari sumber resmi",
  "Pengembangan aplikasi mobile",
  "Penambahan fitur navigasi ke lokasi fasilitas",
  "Ekspansi ke wilayah kelurahan lain di Kota Malang",
  "Integrasi dengan sistem informasi pendidikan daerah",
];

const Documentation = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 topo-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-earth/10 text-earth text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Dokumentasi
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Dokumentasi Proyek
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Dokumentasi lengkap proyek pemetaan fasilitas pendidikan termasuk 
              deskripsi, dataset, output, dan informasi teknis lainnya.
            </p>
          </div>
        </div>
      </section>

      {/* Project Summary */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Ringkasan"
            title="Deskripsi Proyek"
            description="Gambaran umum mengenai proyek pemetaan fasilitas pendidikan."
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="card-elevated p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Proyek <strong>"Sistem Informasi Geografis Pemetaan Fasilitas Pendidikan 
                  di Kelurahan Tlogomas, Kota Malang"</strong> merupakan proyek akademik yang 
                  dikembangkan sebagai bagian dari Ujian Akhir Semester (UAS) mata kuliah 
                  Sistem Informasi Geografis.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Proyek ini bertujuan untuk memetakan dan menyajikan informasi mengenai 
                  sebaran fasilitas pendidikan di Kelurahan Tlogomas dalam bentuk aplikasi 
                  WEBGIS yang interaktif dan dapat diakses oleh publik.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Pengembangan proyek ini menggunakan software QGIS untuk pembuatan data 
                  spasial dan teknologi web modern untuk implementasi antarmuka pengguna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dataset Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Data"
            title="Gambaran Dataset"
            description="Informasi mengenai dataset yang digunakan dalam proyek."
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-4">
              {datasets.map((dataset, index) => (
                <div key={index} className="card-interactive p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-ocean-light flex items-center justify-center shrink-0">
                        <FileJson className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold">{dataset.name}</h3>
                        <p className="text-sm text-muted-foreground">{dataset.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-3 py-1 rounded-lg bg-muted font-medium">
                        {dataset.format}
                      </span>
                      <span className="text-muted-foreground">
                        {dataset.records} records
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5" />
                Unduh Dataset (GeoJSON)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Peta"
            title="Tampilan Peta"
            description="Contoh tampilan dan layout peta dalam proyek."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5x1 mx-auto">
            {/* <div className="card-elevated overflow-hidden h-auto"> */}
            <div className="card-elevated h-fit">
              <img
                src="/layout_peta.png"
                alt="Layout Peta Overview"
                className="w-full h-auto object-contain rounded-t-xl border-b border-border"
              />
              <div className="p-4">
                <h3 className="font-display font-semibold mb-2">Peta Overview</h3>
                <p className="text-sm text-muted-foreground">
                  Tampilan aerial wilayah studi Kelurahan Tlogomas
                </p>
              </div>
            </div>

            <div className="card-elevated overflow-hidden h-fit">
              <img
                src="/webgis.png"
                alt="Layout WEBGIS"
                className="w-full aspect-video object-cover"
                
              />
              <div className="p-4">
                <h3 className="font-display font-semibold mb-2">Tampilan WEBGIS</h3>
                <p className="text-sm text-muted-foreground">
                  Antarmuka aplikasi WEBGIS interaktif
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outputs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Hasil"
            title="Output Proyek"
            description="Hasil-hasil yang dihasilkan dari proyek pemetaan."
          />

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {outputs.map((output, index) => (
              <div key={index} className="card-interactive p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-2">{output.title}</h3>
                    <p className="text-sm text-muted-foreground">{output.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Keterbatasan"
            title="Batasan Proyek"
            description="Beberapa keterbatasan yang perlu diperhatikan dalam proyek ini."
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="card-elevated p-8 border-l-4 border-l-destructive/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Keterbatasan</h3>
                  <p className="text-sm text-muted-foreground">
                    Beberapa hal yang menjadi batasan dalam proyek ini
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0 mt-2" />
                    {limitation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Pengembangan"
            title="Rencana Pengembangan"
            description="Potensi pengembangan proyek di masa mendatang."
          />

          <div className="max-w-3xl mx-auto mt-12">
            <div className="card-elevated p-8 border-l-4 border-l-accent">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg">Ide Pengembangan</h3>
                  <p className="text-sm text-muted-foreground">
                    Beberapa ide untuk pengembangan proyek ke depan
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {futureDevelopment.map((idea, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-1" />
                    {idea}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Unduh Dokumentasi</h2>
            <p className="text-muted-foreground mb-8">
              Akses dokumentasi lengkap dan data proyek
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg">
                <FileText className="w-5 h-5" />
                Laporan Lengkap (PDF)
              </Button>
              <Button variant="outline" size="lg">
                <Database className="w-5 h-5" />
                Dataset (GeoJSON)
              </Button>
              <Button variant="outline" size="lg">
                <Map className="w-5 h-5" />
                Layout Peta (PNG)
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Documentation;
