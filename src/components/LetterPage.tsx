import { cn } from "@/lib/utils";
import { Flower } from "lucide-react";

interface LetterPageProps {
  r: string;
  m: string;
  s: string;
}

const LetterPage = ({ r, m, s }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-parchment rounded-lg px-10 py-6 sm:py-8 flex flex-col backface-hidden transition-all duration-500 ",
      )}
      style={{
        boxShadow: "0 4px 20px hsl(var(--primary) / 0.1), 0 1px 3px hsl(var(--primary) / 0.08)",
      }}
    >
      {/* Decorative top line */}
      <div className="flex mb-4 gap-2 mx-auto justify-center items-center">

        <div className="w-8 h-px bg-primary/30 mx-auto" />
        <Flower className="text-primary/50 h-4 w-4" size={24} />
        <div className="w-8 h-px bg-primary/30 mx-auto" />
      </div>

      {/* letter body container  */}
      <div className="flex-1 flex flex-col justify-start py-5 gap-6 overflow-y-auto font-body text-foreground leading-relaxed text-md sm:text-base ">
        <p className="font-cursive text-xl">Dear {r},</p>
        <p className="font-body text-lg font-light">{m}</p>
        <div className="self-end min-w-30">
          <p className="font-cursive text-xl">Sincerely,</p>
          <p className="font-cursive text-xl ml-10 mr-2">{s}</p>
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="w-16 h-px bg-primary/30 mx-auto mt-4" />
    </div>
  );
};

export default LetterPage;
