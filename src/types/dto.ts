export type PlayerChoiceType = "Pedra" | "Papel" | "Tesoura" | "Lagarto" | "Spock"
export type APIChoiceType = "rock" | "paper" | "scissors" | "lizard" | "spock"

export interface GameRequestBody {
    player_one_choice: APIChoiceType,
    player_two_choice: APIChoiceType
}

export interface GameResponseBody {
    message: string,
    player_one_choice: APIChoiceType,
    player_two_choice: APIChoiceType,
    winner: APIChoiceType | null
}