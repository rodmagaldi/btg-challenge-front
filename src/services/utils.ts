import { APIChoiceType, PlayerChoiceType } from "../types/dto";

export const API_URL = 'http://localhost:5000';

type PlayerChoiceMap = {
    [key in PlayerChoiceType]: APIChoiceType;
  };

export const mapChoices = (input: PlayerChoiceType): APIChoiceType => {
    const mapper: PlayerChoiceMap = {
        "Pedra": "rock",
        "Papel": "paper",
        "Tesoura": "scissors",
        "Lagarto": "lizard",
        "Spock": "spock",
    }

    return mapper[input]
}
