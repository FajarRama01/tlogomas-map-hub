import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  Database,
  Map,
  Layers,
  Settings,
  Globe,
  FileJson,
  Code,
  Monitor,
  CheckCircle2,
  ArrowDown,
  Compass,
} from "lucide-react";

const dataCollection = [
  {
    title: "Data Primer",
    items: [
      "Survei lapangan lokasi fasilitas pendidikan",
      "Pengambilan koordinat dengan GPS",
      "Dokumentasi foto fasilitas",
      "Wawancara pengelola fasilitas",
    ],
  },
  {
    title: "Data Sekunder",
    items: [
      "Peta administrasi Kelurahan Tlogomas",
      "Data pendidikan dari Dinas Pendidikan",
      "Citra satelit dari Google Earth",
      "Data BPS Kota Malang",
    ],
  },
];

const attributes = [
  { name: "ID", description: "Identitas unik fasilitas" },
  { name: "Nama", description: "Nama lengkap fasilitas" },
  { name: "Jenis", description: "Kategori pendidikan (SD/SMP/SMA/PT)" },
  { name: "Alamat", description: "Alamat lengkap fasilitas" },
  { name: "Latitude", description: "Koordinat lintang" },
  { name: "Longitude", description: "Koordinat bujur" },
  { name: "Status", description: "Negeri atau Swasta" },
  { name: "Akreditasi", description: "Status akreditasi" },
  { name: "Jumlah_Siswa", description: "Jumlah siswa aktif" },
  { name: "Kontak", description: "Nomor telepon" },
];

const workflowSteps = [
  {
    step: 1,
    title: "Pengumpulan Data",
    description: "Mengumpulkan data primer dan sekunder",
    icon: Database,
  },
  {
    step: 2,
    title: "Input Data ke QGIS",
    description: "Memasukkan data ke software QGIS",
    icon: Settings,
  },
  {
    step: 3,
    title: "Digitasi Peta",
    description: "Mendigitasi lokasi fasilitas pendidikan",
    icon: Map,
  },
  {
    step: 4,
    title: "Input Atribut",
    description: "Memasukkan data atribut setiap fasilitas",
    icon: Layers,
  },
  {
    step: 5,
    title: "Analisis Spasial",
    description: "Melakukan analisis overlay dan query",
    icon: Compass,
  },
  {
    step: 6,
    title: "Ekspor GeoJSON",
    description: "Mengekspor data ke format GeoJSON",
    icon: FileJson,
  },
  {
    step: 7,
    title: "Pengembangan WEBGIS",
    description: "Membangun antarmuka web interaktif",
    icon: Code,
  },
  {
    step: 8,
    title: "Publikasi",
    description: "Mempublikasikan WEBGIS secara online",
    icon: Globe,
  },
];

const Methodology = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Settings className="w-4 h-4" />
              Metodologi
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Metodologi & Data
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Penjelasan detail mengenai metode pengumpulan data, proses digitasi, 
              dan implementasi WEBGIS dalam proyek pemetaan fasilitas pendidikan.
            </p>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Pengumpulan Data"
            title="Metode Pengumpulan Data"
            description="Data yang digunakan dalam proyek ini berasal dari berbagai sumber."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {dataCollection.map((category, index) => (
              <div key={index} className="card-elevated p-8">
                <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-ocean-light flex items-center justify-center">
                    <Database className="w-5 h-5 text-primary-foreground" />
                  </div>
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QGIS Digitization */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Digitasi"
            title="Proses Digitasi QGIS"
            description="Proses pembuatan data spasial menggunakan software QGIS."
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="card-elevated p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-semibold text-lg mb-4">Sistem Koordinat</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-muted/50">
                      <div className="text-sm text-muted-foreground mb-1">Sistem Proyeksi</div>
                      <div className="font-semibold">WGS 84 / UTM Zone 49S</div>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50">
                      <div className="text-sm text-muted-foreground mb-1">EPSG Code</div>
                      <div className="font-semibold">EPSG:32749</div>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/50">
                      <div className="text-sm text-muted-foreground mb-1">Format Data</div>
                      <div className="font-semibold">GeoJSON / Shapefile</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-lg mb-4">Proses Digitasi</h3>
                  <ol className="space-y-3">
                    {[
                      "Menambahkan basemap dari OpenStreetMap",
                      "Membuat layer point baru",
                      "Mengaktifkan mode editing",
                      "Menambahkan point lokasi fasilitas",
                      "Mengisi atribut setiap point",
                      "Menyimpan dan mengekspor data",
                    ].map((step, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Attribute Structure */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Atribut"
            title="Struktur Data Atribut"
            description="Atribut data yang dikumpulkan untuk setiap fasilitas pendidikan."
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="card-elevated overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="px-6 py-4 text-left font-display font-semibold">Nama Atribut</th>
                      <th className="px-6 py-4 text-left font-display font-semibold">Deskripsi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attributes.map((attr, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="px-6 py-4">
                          <code className="px-2 py-1 rounded bg-primary/10 text-primary text-sm font-mono">
                            {attr.name}
                          </code>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{attr.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Alur Kerja"
            title="Diagram Alur Metodologi"
            description="Tahapan lengkap proses pemetaan dari awal hingga publikasi."
          />

          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="card-interactive p-6 text-center h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-ocean-light flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="text-xs text-muted-foreground mb-2">Langkah {step.step}</div>
                    <h3 className="font-display font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < workflowSteps.length - 1 && index !== 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <ArrowDown className="w-6 h-6 text-muted-foreground rotate-[-90deg]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WEBGIS Implementation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Implementasi"
            title="Implementasi WEBGIS"
            description="Teknologi dan metode yang digunakan untuk membangun aplikasi WEBGIS."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="card-elevated p-8">
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-3">
                <Monitor className="w-6 h-6 text-primary" />
                Frontend
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "React", desc: "Library JavaScript untuk UI" },
                  { name: "Tailwind CSS", desc: "Framework CSS utility-first" },
                  { name: "Leaflet.js", desc: "Library peta interaktif" },
                  { name: "TypeScript", desc: "Superset JavaScript dengan tipe" },
                ].map((tech, index) => (
                  <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Code className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{tech.name}</div>
                      <div className="text-sm text-muted-foreground">{tech.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-elevated p-8">
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                Data & Hosting
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "GeoJSON", desc: "Format data spasial" },
                  { name: "OpenStreetMap", desc: "Basemap open source" },
                  { name: "Vercel", desc: "Platform deployment" },
                  { name: "GitHub", desc: "Version control" },
                ].map((tech, index) => (
                  <li key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Globe className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold">{tech.name}</div>
                      <div className="text-sm text-muted-foreground">{tech.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Methodology;
