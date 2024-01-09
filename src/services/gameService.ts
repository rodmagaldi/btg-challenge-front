import { GameRequestBody, GameResponseBody, PlayerChoiceType } from "../types/dto";
import { API_URL, mapChoices } from "./utils";

export const determineWinner = async (playerOneChoice: PlayerChoiceType, playerTwoChoice: PlayerChoiceType) => {
  try {
    const body: GameRequestBody = {
        player_one_choice: mapChoices(playerOneChoice),
        player_two_choice: mapChoices(playerTwoChoice) 
    }

    const request = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    const response: GameResponseBody = await request.json();

    let winner;
    if (response.winner === response.player_one_choice) {
        winner = "Jogador 1";
    } else if (response.winner === response.player_two_choice) {
        winner = "Jogador 2";
    } else {
        winner = "Ninguém";
    }

    return {
        message: response.message,
        winner
    };

  } catch (error) {
    console.error('There was an error communicating with the server:', error);
    throw error;
  }
};
