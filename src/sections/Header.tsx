import LogoIcon from "@/assets/logo.svg";
import MenuIcon from "@/assets/icon-menu.svg";
import {Button} from "@/components/Button";

export const Header = () => {
  return (
    <header className=" border-b border-white/15 md:border-none sticky top-0 z-10">
      <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
      <div className="container">
        <div className="flex justify-between items-center py-4 md:backdrop-blur relative">
          <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="w-6 h-6" />
            </div>
            <span className="font-semibold text-lg hidden md:block">Voxyr</span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <div className="hidden md:block">
            <nav className="flex gap-8">
              <a 
                href="#" 
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                AI Calling
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Lead Generation
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Pricing
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                Support
              </a>
            </nav>
          </div>

          {/* Right Section - Button and Menu */}
          <div className="flex gap-4 items-center">
            <Button>Start Free Trial</Button>
            
            {/* Mobile menu icon */}
            <button className="md:hidden p-2 text-white/70 hover:text-white transition-colors duration-200">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};