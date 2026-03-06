import { useEffect, useState } from "react";
import LetterPage from "./LetterPage";

const LetterViewer = () => {

  // letter content (recipient, message, sender)
  const [r, setR] = useState('');
  const [m, setM] = useState('');
  const [s, setS] = useState('');

  const handleLoad = () => {
    const windowUrl = window.location.search;
    const params = new URLSearchParams(windowUrl);
    setR(params.get("r") || 'friend');
    setM(params.get("m") || "I hope you have a great day!")
    setS(params.get("s") || "your friend")
  }

  useEffect(() => {
    handleLoad()
  }, []);


  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto px-4 h-[65dvh] min-h-[500px]">
      <div
        className="relative w-full flex-1 select-none"
      >
        <LetterPage
          r={r}
          m={m}
          s={s}
        />
      </div>
    </div>
  );
};

export default LetterViewer;
