import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="w-full bg-muted py-5">
      <Separator />
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
