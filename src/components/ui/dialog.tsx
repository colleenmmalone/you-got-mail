import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { SetStateAction, Dispatch } from 'react';


interface DialogProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Dialog = ({isOpen, setIsOpen =() => {}}: DialogProps) => {

    const isShown = `${isOpen===true ? 'flex' : 'hidden'}`
    return (
        <>
        <div
            className={cn(
                "w-[100vw] h-[100vh] fixed z-10 top-0",
                ` ${isShown} justify-center align-center`,
                "bg-[#e6cacb] opacity-[80%] backdrop-blur-3xl"
            )}
        >
        </div>

            {/* Heart emblem */ }
    <div
                className={cn(
                    "fixed z-20 top-[50%]",
                    `${isShown}  justify-center align-center`,
                    "bg-background opacity-[100%]"
                )}
    >
        <X onClick={setIsOpen(false)}
        hello
    </div>
    </>
    );
};

export default Dialog;
