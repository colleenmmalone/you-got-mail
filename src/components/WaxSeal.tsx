import { cn } from "@/lib/utils";
import { seal } from "../assets/index";

interface WaxSealProps {
  cracking: boolean;
  className?: string;
}

const WaxSeal = ({ cracking, className }: WaxSealProps) => {
  return (
    <div
      className={cn(
        "relative w-16 h-16 transition-transform",
        cracking && "animate-seal-crack",
        className
      )}
    >
      {/* Heart emblem */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={seal} alt="Wax Seal" />


      </div>
    </div>
  );
};

export default WaxSeal;
