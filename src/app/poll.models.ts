export interface OptionVotes {
  optionText: string;
  voteCount: number;
}

export interface Poll {
  id?: number;
  question: string;
  options: OptionVotes[];
}
