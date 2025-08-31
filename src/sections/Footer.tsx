import Logo from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import Ysocial from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex gap-3 items-center lg:flex-1">
            <Logo className="w-8 h-8" />
            <div className="font-semibold text-lg">AI Services</div>
          </div>

          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Company
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              ChangeLog
            </a>
          </nav>

          <div className="flex gap-5 lg:flex-1">
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              <XSocial />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              <InstaSocial />
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Ysocial />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
