import { Heart } from "lucide-react";
import { DAD_NAME } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gold-200/60 bg-ivory px-6 py-10 text-center">
      <p className="flex items-center justify-center gap-1.5 text-sm text-ink-600">
        Made with
        <Heart size={14} className="fill-gold-600 text-gold-600" />
        by his loving family
      </p>
      <p className="mt-1 text-xs text-ink-400">
        &copy; {currentYear} — In celebration of {DAD_NAME}
      </p>
    </footer>
  );
}
