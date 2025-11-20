export interface IGamePokedex {
  id: number;
  name: string;
  pokemon_entries: {
    entry_number: number;
    pokemon_species: {
      name: string;
      url: string;
    };
  }[];
}
