import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/shared/SectionHeader";
import {
  FileText,
  Target,
  AlertCircle,
  MapPin,
  Database,
  Layers,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react";

const timelineSteps = [
  {
    step: 1,
    title: "Identifikasi Masalah",
    description: "Mengidentifikasi kebutuhan pemetaan fasilitas pendidikan di Kelurahan Tlogomas",
    icon: AlertCircle,
  },
  {
    step: 2,
    title: "Pengumpulan Data",
    description: "Mengumpulkan data spasial dan atribut fasilitas pendidikan",
    icon: Database,
  },
  {
    step: 3,
    title: "Digitasi & Analisis",
    description: "Melakukan digitasi dan analisis spasial menggunakan QGIS",
    icon: Layers,
  },
  {
    step: 4,
    title: "Visualisasi & Publikasi",
    description: "Memvisualisasikan dan mempublikasikan hasil dalam bentuk WEBGIS",
    icon: BarChart3,
  },
];

const benefits = [
  {
    icon: Users,
    title: "Masyarakat Umum",
    description: "Memudahkan pencarian dan akses informasi fasilitas pendidikan terdekat",
  },
  {
    icon: Target,
    title: "Pemerintah Daerah",
    description: "Mendukung pengambilan keputusan dalam perencanaan pendidikan",
  },
  {
    icon: TrendingUp,
    title: "Akademisi",
    description: "Menyediakan data spasial untuk penelitian dan pengembangan",
  },
];

const Project = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1/2 contour-lines opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Informasi Proyek
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Tentang Proyek Pemetaan
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Proyek ini merupakan bagian dari Ujian Akhir Semester (UAS) mata kuliah 
              Sistem Informasi Geografis yang bertujuan untuk memetakan fasilitas 
              pendidikan di Kelurahan Tlogomas, Kota Malang.
            </p>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Latar Belakang"
                title="Mengapa Proyek Ini Penting?"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Pendidikan merupakan salah satu aspek penting dalam pembangunan suatu 
                  wilayah. Ketersediaan fasilitas pendidikan yang memadai dan mudah 
                  diakses menjadi faktor kunci dalam meningkatkan kualitas sumber daya manusia.
                </p>
                <p>
                  Kelurahan Tlogomas sebagai salah satu wilayah di Kota Malang memiliki 
                  berbagai fasilitas pendidikan mulai dari tingkat dasar hingga perguruan tinggi. 
                  Namun, informasi mengenai sebaran spasial fasilitas-fasilitas tersebut 
                  belum tersedia secara terstruktur dan mudah diakses.
                </p>
                <p>
                  Melalui proyek ini, diharapkan dapat tersedia sistem informasi geografis 
                  yang menyajikan data fasilitas pendidikan secara komprehensif, akurat, 
                  dan dapat diakses oleh berbagai pihak yang membutuhkan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Fasilitas Dipetakan", value: "29+" },
                { label: "Kategori Pendidikan", value: "4" },
                { label: "Atribut Data", value: "10+" },
                { label: "Akurasi Data", value: "100%" },
              ].map((stat, index) => (
                <div key={index} className="card-elevated p-6 text-center">
                  <div className="font-display text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Identification */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Permasalahan"
            title="Identifikasi Masalah"
            description="Beberapa permasalahan yang melatarbelakangi proyek pemetaan ini."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Keterbatasan Akses Informasi",
                description: "Informasi mengenai lokasi dan detail fasilitas pendidikan di Kelurahan Tlogomas belum tersedia dalam bentuk yang mudah diakses dan interaktif.",
              },
              {
                title: "Data Tidak Terstruktur",
                description: "Data fasilitas pendidikan yang ada belum dikelola secara spasial dan terstruktur sehingga sulit untuk dianalisis.",
              },
              {
                title: "Kurangnya Visualisasi Spasial",
                description: "Belum tersedia visualisasi peta yang menunjukkan sebaran fasilitas pendidikan secara komprehensif.",
              },
            ].map((problem, index) => (
              <div key={index} className="card-interactive p-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Ruang Lingkup"
            title="Batasan Proyek"
            description="Batasan dan ruang lingkup dalam pelaksanaan proyek pemetaan."
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="card-elevated p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Wilayah Studi
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Kelurahan Tlogomas",
                      "Kecamatan Lowokwaru",
                      "Kota Malang",
                      "Provinsi Jawa Timur",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-lg mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-primary" />
                    Objek Pemetaan
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Sekolah Dasar (SD/MI)",
                      "Sekolah Menengah Pertama (SMP/MTs)",
                      "Sekolah Menengah Atas (SMA/SMK/MA)",
                      "Perguruan Tinggi",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Proses"
            title="Tahapan Pemetaan"
            description="Langkah-langkah dalam pelaksanaan proyek pemetaan fasilitas pendidikan."
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-8">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="relative z-10 hidden md:flex">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-ocean-light flex items-center justify-center shadow-lg">
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="card-interactive p-6 flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold md:hidden">
                          {step.step}
                        </span>
                        <h3 className="font-display font-semibold text-lg">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Manfaat"
            title="Manfaat Pemetaan"
            description="Manfaat yang dapat diperoleh dari proyek pemetaan ini."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-interactive p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project;
