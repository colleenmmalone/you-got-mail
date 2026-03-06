// import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
import seal from "../assets/seal.png";
import LetterPage from "./LetterPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import copy from 'copy-to-clipboard';
import { Dialog, DialogPortal } from "@radix-ui/react-dialog";

/* TODO 
add a quick copy for user
seal kiss animation on click
*/

type Inputs = {
  example: string
  exampleRequired: string
}

const FormPage = () => {

  // set initial message content and use as input placeholders 
  const [r, setR] = useState('friend');
  const [m, setM] = useState('I hope you have a great day!');
  const [s, setS] = useState('your friend');
  const charCount = m.length;

  const navigate = useNavigate();

  // styles 
  const shape = "p-[12px] rounded-[6px] w-full"
  const divStyle = `relative pt-3`;
  const labelStyle = "absolute top-0 left-[8px] px-1 py-0 leading-tight bg-background";
  const inputStyle = `${shape} bg-background placeholder:text-muted-foreground/80 focus:border-6 focus:border-lime`;
  const btnStyle = `${shape} cursor-lips active:bg-foreground bg-border text-white`;

  const handleSubmit = () => {
    //TODO open modal that says 'copied to clipboard!'
    //with button to go to letter or close modal
    //learn how to use dialog

    // get url of current page  
    const baseURL = window.location.href
    var url = (`${baseURL}letter?r=${r}&m=${m}&s=${s}`).replace(/ /g, '+');

    // copy to clipboard 
    copy(url)

    // inform user 
    alert("share link was copied! You will now navigate to your letter")

    // navigate to preview 
    navigate(url);
  }
  return (
    <div
      className={cn(
        "relative min-h-[100dvh] w-full overflow-y-scroll py-20",
        "flex flex-col items-center justify-center bg-background shadow-lg",
      )}
    >
      <div
        className={cn(
          "w-full max-w-[400px] flex flex-col gap-[20px] px-4 sm:px-0",
        )}
      >
        <img src={seal} alt="a wax seal with a fleur du lys" className="h-[150px] w-[150px] mx-auto" />
        <p className="text-2xl text-center">Compose Your Love Letter</p>

        {/* recipient  */}
        <div
          className={cn(
            divStyle,
          )}
        >
          <label
            className={cn(
              labelStyle,
            )}
          >
            Recipient
          </label>
          <input
            className={cn(
              inputStyle,
            )}
            style={{ borderWidth: '0.5px' }}
            placeholder={r}
            onChange={(e) => setR(e.target.value)}
          />
        </div>

        {/* message  */}
        <div
          className={cn(
            "gap-0 space-y-0",
            divStyle,
          )}
        >
          <label
            className={cn(
              labelStyle,
            )}
          >
            Message
          </label>
          <textarea
            rows={5}
            maxLength={200}
            className={cn(
              inputStyle,
            )}
            style={{ borderWidth: '0.5px' }}
            placeholder={m}
            onChange={(e) => setM(e.target.value)}
          />
          <p className="absolute top-[calc(100%-5px)] right-0 text-muted-foreground/80 text-xs text-right inset-0 leading-tight" >
            {charCount}/200
          </p>
        </div>

        {/* sender  */}
        <div
          className={cn(
            divStyle,
          )}
        >
          <label
            className={cn(
              labelStyle,
            )}
          >
            Sender
          </label>
          <input
            className={cn(
              inputStyle,
            )}
            style={{ borderWidth: '0.5px' }}
            placeholder={s}
            onChange={(e) => setS(e.target.value)}
          />
        </div>

        {/* button with lips cursor on hover, opens dialog  */}
        <button
          className={cn(
            "flex flex-col gap-[20px] cursor-lips",
            btnStyle,
            "inset-shadow-black inset-shadow-lg"
          )}
          onClick={handleSubmit}
        >
          Seal Letter
        </button>

        <div className="border-[0.5px] border-border/40 h-0 w-full mt-5" />
        <p>Preview:</p>
      </div>

      <div className="relative scale-[80%] h-[360px] w-[330px]">
        <LetterPage
          r={r}
          m={m}
          s={s}
        />
      </div>
    </div>
  );
};

export default FormPage;
