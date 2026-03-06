import { useState } from "react";
import WaxSeal from "./WaxSeal";
import LetterViewer from "./LetterViewer";
import { envelopeBody, envelopeTop, envelopeTopOpen } from "../assets/index";
import { Link, useNavigate } from "react-router-dom";

type Phase = "sealed" | "cracking" | "opening" | "rising" | "letter";

const EnvelopePage = () => {
  const [phase, setPhase] = useState<Phase>("sealed");

  const handleOpen = () => {
    if (phase !== "sealed") return;
    setPhase("cracking");
    setTimeout(() => setPhase("opening"), 400);
    setTimeout(() => setPhase("rising"), 900);
    setTimeout(() => setPhase("letter"), 1500);
  };

  const isEnvelopeVisible = phase !== "letter";
  const showLetter = phase === "letter";


  return (
    <>
      <div className="relative min-h-[calc(100dvh-30px)] w-full overflow-hidden flex items-center justify-center bg-background">
        {/* Background radial glow */}
        <div
          className=" inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--secondary) / 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Envelope */}
        <div
          className={`absolute flex flex-col items-center transition-all duration-700 ${isEnvelopeVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            } ${phase === "rising" ? "scale-90 opacity-50" : ""}`}
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && handleOpen()}
          aria-label="Open envelope"
        >
          {/* Envelope body */}
          <div
            className={`relative w-64 h-44 bg-envelope-inner  p-0 ${phase === "sealed" ? "animate-float" : ""
              }`}
            style={{ perspective: "800px" }}
          >
            {/* Envelope bottom and side flaps  */}
            <div className="absolute inset-0 w-full h-full p-0 m-0" >
              <img src={envelopeBody} alt="Envelope body" className="w-full h-full object-cover" />
            </div>


            {/* Top flap */}
            <div
              className={`absolute inset-x-0 top-0 z-20 origin-top transition-transform duration-500 ${phase === "opening" || phase === "rising"
                ? "[transform:rotateX(180deg)]"
                : ""
                }`}
              style={{
                transformStyle: "preserve-3d",
                perspective: "800px",
              }}
            >
              <img src={envelopeTop} alt="Envelope flap" className="w-full h-auto object-cover" />
              {/* <img src={envelopeTopOpen} alt="Envelope flap" className="w-full h-auto object-cover" /> */}
            </div>


            {/* Wax seal */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[60%] -translate-y-1/2 z-30">
              <WaxSeal cracking={phase === "cracking"} />
            </div>
          </div>

          {/* Tap hint */}
          {phase === "sealed" && (
            <p className="mt-8 text-sm text-muted-foreground font-display animate-pulse-soft tracking-widest uppercase">
              Tap to open
            </p>
          )}
        </div>



        {/* Letter viewer */}
        <div
          className={`w-full transition-all duration-700 ${showLetter
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-20 pointer-events-none"
            }`}
        >
          {showLetter && <LetterViewer />}
        </div>

      </div>
      {phase === "letter"
        ?
        <div
          className="flex text-sm text-muted-foreground font-display animate-pulse-soft tracking-widest uppercase"
        >

          <Link
            to="/"
            className="mx-auto "
          >
            Send a Letter Back
          </Link>
        </div>
        :
        <></>
      }
    </>
  );
};

export default EnvelopePage;
