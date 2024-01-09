import { ChoiceButton } from "./ChoiceButton";
import { FaRegHandRock, FaRegHandPaper, FaRegHandScissors, FaRegHandLizard, FaRegHandSpock } from "react-icons/fa";

interface ChoicesProps {
    playerNumber: string;
    selectedChoice: string | null;
    onChoiceSelect: (choice: string) => void;
  }

export function Choices({playerNumber, selectedChoice, onChoiceSelect}: ChoicesProps) {
    return (
        <div className="flex flex-col gap-4 my-4 items-center pb-8 border-b-2">
            <h3>Escolha a jogada do Jogador {playerNumber}:</h3>
            <div className="max-w-96 flex justify-center flex-wrap">
                <ChoiceButton 
                    icon={<FaRegHandRock />}
                    text="Pedra"
                    selected={selectedChoice === "Pedra"} 
                    onClick={() => onChoiceSelect("Pedra")}
                    />
                <ChoiceButton
                    icon={<FaRegHandPaper />}
                    text="Papel"
                    selected={selectedChoice === "Papel"} 
                    onClick={() => onChoiceSelect("Papel")}
                    />
                <ChoiceButton
                    icon={<FaRegHandScissors />}
                    text="Tesoura"
                    selected={selectedChoice === "Tesoura"} 
                    onClick={() => onChoiceSelect("Tesoura")}
                />
                <ChoiceButton
                    icon={<FaRegHandLizard />}
                    text="Lagarto"
                    selected={selectedChoice === "Lagarto"} 
                    onClick={() => onChoiceSelect("Lagarto")}
                />
                <ChoiceButton
                    icon={<FaRegHandSpock />}
                    text="Spock"
                    selected={selectedChoice === "Spock"} 
                    onClick={() => onChoiceSelect("Spock")}
                />
            </div>
        </div>
    )
}