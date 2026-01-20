import { Link } from "react-router-dom";
import { MapPin, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-ocean flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">SIG Pendidikan</h3>
                <p className="text-sm opacity-70">Kelurahan Tlogomas</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-md leading-relaxed mb-4">
              Sistem Informasi Geografis Pemetaan Fasilitas Pendidikan di Kelurahan Tlogomas, Kota Malang. 
              Proyek ini dikembangkan untuk keperluan akademik Ujian Akhir Semester (UAS) mata kuliah SIG.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              {[
                { name: "Beranda", path: "/" },
                { name: "Informasi Proyek", path: "/project" },
                { name: "Metodologi", path: "/methodology" },
                { name: "WEBGIS", path: "/webgis" },
                { name: "Profil", path: "/profile" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">Informasi</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>
                <span className="block opacity-60 text-xs">Mata Kuliah</span>
                Sistem Informasi Geografis
              </li>
              <li>
                <span className="block opacity-60 text-xs">Program Studi</span>
                Teknik Informatika
              </li>
              <li>
                <span className="block opacity-60 text-xs">Tahun</span>
                {currentYear}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
            <p>
              © {currentYear} SIG Pendidikan Tlogomas. Dikembangkan untuk keperluan akademik.
            </p>
            <p className="flex items-center gap-1">
              <span>Built with</span>
              <span className="text-red-400">♥</span>
              <span>menggunakan QGIS & React</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
