import { useState } from "react";
import Swal from 'sweetalert2'

import { Choices } from "./components/Choices"
import { determineWinner } from "./services/gameService";
import { PlayerChoiceType } from "./types/dto";

function App() {

  const [selectedChoicePlayerOne, setSelectedChoicePlayerOne] = useState<PlayerChoiceType | null>(null);
  const [selectedChoicePlayerTwo, setSelectedChoicePlayerTwo] = useState<PlayerChoiceType | null>(null);

  const handleChoicePlayerOne = (choice: PlayerChoiceType) => {
    setSelectedChoicePlayerOne(choice);
  };

  const handleChoicePlayerTwo = (choice: PlayerChoiceType) => {
    setSelectedChoicePlayerTwo(choice);
  };

  const handlePlayGame = async () => {
    if (!selectedChoicePlayerOne || !selectedChoicePlayerTwo) {
      Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      }).fire({
        icon: "error",
        title: "Ambos os jogadores devem escolher sua jogada."
      });
      return
    }

    try {
      const result = await determineWinner(selectedChoicePlayerOne, selectedChoicePlayerTwo)

      const modal = await Swal.fire({
        title: `${result.winner} venceu!`,
        text: result.message,
        confirmButtonText: 'Jogar novamente'
      })
  
      if (modal.isConfirmed || modal.isDismissed) {
        setSelectedChoicePlayerOne(null);
        setSelectedChoicePlayerTwo(null);
      }
    } catch (err) {
      Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
      }).fire({
        icon: "error",
        title: "Erro de comunicação com o servidor."
      });
      return
    }    
  }

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-1/2 mt-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Pedra, Papel, Tesoura, Lagarto ou Spock!</h1>
        
        <Choices
          playerNumber="1"
          selectedChoice={selectedChoicePlayerOne} 
          onChoiceSelect={handleChoicePlayerOne}
        />

        <Choices
          playerNumber="2"
          selectedChoice={selectedChoicePlayerTwo} 
          onChoiceSelect={handleChoicePlayerTwo} 
        />

        <button 
          onClick={handlePlayGame}
          className="mt-8 rounded-md bg-purple-dark text-white py-2 px-4 transition duration-75 hover:bg-purple-light"
        >
          Jogar!
        </button>
      
      </div>
    </div>
    
  )
}

export default App
