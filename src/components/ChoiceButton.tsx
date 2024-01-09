import { ReactElement } from "react";

interface ChoiceButtonProps {
    icon: ReactElement;
    text: string;
    selected: boolean;
    onClick: () => void;
}

export function ChoiceButton({icon, text, selected, onClick}: ChoiceButtonProps) {
    return (
        <button 
            className={`
                rounded-md flex items-center
                gap-2 p-2 border-2 mx-2 my-2 transition duration-75 hover:text-white
                ${selected ? 'bg-purple-dark text-white' : 'hover:bg-purple-light'}
            `}
            onClick={onClick}
        >
            <>
            {icon}
            </>
            <>
            {text}
            </>
        </button>
    )
  }
  