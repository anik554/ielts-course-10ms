import Logo from "@/assets/10ms.png";
import ModeToggle from "@/components/dark-mode/ModeToggle";
import CallModal from "@/components/models/CallModal";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/context/useLanguage";
import { Phone } from "lucide-react";
const Navbar = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-20 h-14 bg-white dark:bg-gray-900 shadow-sm">
      <div>
        <img src={Logo} alt="Logo" className="h-14 w-auto" />
      </div>
      <div className="flex items-center gap-4">
        <Switch
          checked={language}
          onCheckedChange={() => setLanguage(!language)}
        />
        <Label htmlFor="airplane-mode">{language ? "EN" : "BN"}</Label>
        <ModeToggle />
        <CallModal
          trigger={
            <div className="flex items-center gap-1 text-green-700 text-sm font-medium" style={{ cursor: "pointer" }}>
              <Phone size={18} />
              <span>16910</span>
            </div>
          }
        />

        <Button className="bg-green-700 text-white" size="sm">
          {language ? "Log in" : "লগ-ইন"}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
