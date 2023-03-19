declare namespace Pokemon {
	interface ResponseListApi {
		name: string;
		url: string;
	}

	interface ResponseListApi {
		name: string;
		url: string;
	}

	interface TranformPokemonItem extends ResponseListApi {
		id: string;
		avatar: string;
		picture: string;
	}

	interface PaginationList {
		offset: number;
		limit: number;
	}

	type TypeName =
		| 'normal'
		| 'fire'
		| 'fighting'
		| 'water'
		| 'flying'
		| 'grass'
		| 'poison'
		| 'electric'
		| 'ground'
		| 'psychic'
		| 'rock'
		| 'ice'
		| 'bug'
		| 'dragon'
		| 'ghost'
		| 'dark'
		| 'steel'
		| 'fairy'
		| string;
	interface Type {
		slot: number;
		type: {
			name: TypeName;
		};
	}
	interface Stats {
		base_stat: number;
		effort: number;
		stat: {
			name: string;
		};
	}
	interface Data {
		id: string;
		name: string;
		sprites: {
			back_default: string | null;
			back_female: string | null;
			back_shiny: string | null;
			back_shiny_female: string | null;
			front_default: string | null;
			front_female: string | null;
			front_shiny: string | null;
			front_shiny_female: string | null;
			other: {
				dream_world: {
					front_default: string | null;
					front_female: string | null;
				};
				home: {
					front_default: string | null;
					front_female: string | null;
					front_shiny: string | null;
					front_shiny_female: string | null;
				};
				'official-artwork': {
					front_default: string | null;
					front_shiny: string | null;
				};
			};
		};
		stats: Stats[];
		types: Type[];
	}
}
