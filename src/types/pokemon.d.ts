declare namespace Pokemon {
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
		stats: Stats[];
		types: Type[];
	}
}
