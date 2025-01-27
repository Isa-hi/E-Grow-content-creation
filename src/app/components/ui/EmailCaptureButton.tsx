import { ArrowRight } from "lucide-react";
import Link from "next/link";

type props = {
    text?: string;
    center?: boolean;
}

export default function EmailCaptureButton({ text, center }: props) {
  return (
    <Link href="#email-capture" className="mx-auto text-center">
      <button className={`${center ? "mx-auto" : null} bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center`}>
        { text ? text : "Accede a tus recursos gratuitos"}
        <ArrowRight className="ml-2" />
      </button>
    </Link>
  );
}
