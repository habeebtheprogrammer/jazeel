import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/site";

export default function FloatingContact() {
  const href = whatsappLink("Assalamu alaikum, I'd like to know more about Jazeel Quran Academy.");
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-2.5 rounded-full bg-[#25D366] py-3 pl-3.5 pr-5 text-white shadow-[0_18px_40px_-16px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-0.5"
    >
      <FaWhatsapp className="size-6" />
      <span className="text-sm font-semibold">Chat with us</span>
    </a>
  );
}
