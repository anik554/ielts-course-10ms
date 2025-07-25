import Logo from "@/assets/10ms.png";
import ModeToggle from "@/components/dark-mode/ModeToggle";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Phone } from "lucide-react";
const Navbar = () => {
  return (
     <div className="sticky top-0 z-50 flex items-center justify-between px-20 h-14 bg-white dark:bg-gray-900 shadow-sm">
        <div>
        <img src={Logo} alt="Logo" className="h-14 w-auto" />
      </div>
      <div className="flex items-center gap-4">
        <Switch />
        <ModeToggle />
        <div className="flex items-center gap-1 text-green-700 text-sm font-medium">
          <Phone size={18} />
          <span>16910</span>
        </div>
        <Button variant="destructive" size="sm">Log in</Button>
      </div>
    </div>
  );
};

export default Navbar;
