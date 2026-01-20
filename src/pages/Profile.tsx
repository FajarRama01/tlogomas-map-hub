import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  User,
  GraduationCap,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Globe,
  Code,
  Database,
  Palette,
  Layers,
  ExternalLink,
  Quote,
} from "lucide-react";

const skills = [
  {
    category: "GIS & Pemetaan",
    items: ["QGIS", "ArcGIS", "Google Earth", "GPS Mapping", "Spatial Analysis"],
    icon: MapPin,
    color: "from-primary to-ocean-light",
  },
  {
    category: "Web Development",
    items: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "TypeScript"],
    icon: Code,
    color: "from-accent to-forest-light",
  },
  {
    category: "Data & Database",
    items: ["GeoJSON", "Shapefile", "PostgreSQL", "PostGIS", "Data Analysis"],
    icon: Database,
    color: "from-earth to-earth-light",
  },
  {
    category: "Design",
    items: ["Figma", "UI/UX Design", "Cartography", "Data Visualization"],
    icon: Palette,
    color: "from-ocean-deep to-primary",
  },
];

const education = [
  {
    degree: "S1 Teknik Informatika",
    institution: "Institut Teknologi dan Bisnis Asia Malang",
    year: "2023 - Sekarang",
    description: "Fokus pada pengembangan web dan sistem informasi geografis",
  },
];

const Profile = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-full contour-lines opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Profile Image */}
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-primary to-accent rounded-3xl blur-xl opacity-30" />
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl bg-gradient-to-br from-primary to-ocean-light p-1">
                    <div className="w-full h-full rounded-2xl bg-muted flex items-center justify-center overflow-hidden">
                      {/* <User className="w-24 h-24 text-muted-foreground/50" /> */}
                      <img 
                        src="/Profile_ASIA_PhotoGrid.png"   // <--- Sesuaikan nama file di folder public
                        alt="Foto Profil Muhamad Fajar Ramadlan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="md:col-span-2 text-center md:text-left">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <GraduationCap className="w-4 h-4" />
                  GIS Developer & Student
                </span>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
                  Muhamad Fajar Ramadlan
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Mahasiswa Teknik Informatika dengan passion di bidang Geographic Information System 
                  dan Web Development. Mengembangkan solusi berbasis teknologi spasial untuk 
                  mendukung pengambilan keputusan berbasis data.
                </p>

                {/* Contact Buttons */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <a href="mailto:email@example.com">
                    <Button variant="hero" size="sm">
                      <Mail className="w-4 h-4" />
                      Email
                    </Button>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-muted-foreground/10" />
              <h2 className="font-display text-2xl font-bold mb-6">Tentang Saya</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Saya adalah mahasiswa Teknik Informatika yang memiliki ketertarikan kuat 
                  dalam bidang Sistem Informasi Geografis (SIG) dan pengembangan web. 
                  Kombinasi kedua bidang ini memungkinkan saya untuk menciptakan aplikasi 
                  berbasis peta yang interaktif dan bermanfaat.
                </p>
                <p>
                  Proyek WEBGIS Pemetaan Fasilitas Pendidikan ini merupakan bagian dari 
                  Ujian Akhir Semester (UAS) mata kuliah Sistem Informasi Geografis. 
                  Melalui proyek ini, saya belajar mengintegrasikan teknologi GIS dengan 
                  pengembangan web modern untuk menghasilkan solusi yang bermakna.
                </p>
                <p>
                  Saya percaya bahwa data spasial memiliki potensi besar dalam mendukung 
                  pengambilan keputusan di berbagai bidang, termasuk perencanaan pendidikan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Keahlian & Skill</h2>
            <p className="text-muted-foreground">
              Berbagai keahlian yang saya kembangkan dalam bidang GIS dan pengembangan web.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="card-interactive p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <skill.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-muted text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">Pendidikan</h2>
            <p className="text-muted-foreground">
              Latar belakang pendidikan formal dan akademik.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="card-elevated p-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-ocean-light flex items-center justify-center shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-1">{edu.degree}</h3>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mb-3">{edu.year}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Statement */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="card-elevated p-8 md:p-12 text-center border-2 border-primary/20">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Pernyataan Akademik</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                "Website ini dibuat untuk keperluan akademik Ujian Akhir Semester (UAS) 
                mata kuliah Sistem Informasi Geografis. Seluruh data dan informasi yang 
                disajikan telah diverifikasi dan digunakan semata-mata untuk tujuan pendidikan."
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  <p>Program Studi Teknik Informatika</p>
                  <p>Institut Teknologi dan Bisnis Asia Malang</p>
                  <p>Tahun Akademik 2025/2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
