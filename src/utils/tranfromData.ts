const pathImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

export const tranfromPokemonList = (
	list: Pokemon.ResponseListApi[],
): Pokemon.TranformPokemonItem[] => {
	return list.map((itm) => {
		const url: string = itm.url;
		const urlParts: string[] = url.split('/');
		const id: string = urlParts[urlParts.length - 2];

		return {
			id,
			avatar: `${pathImage}/other/official-artwork/${id}.png`,
			picture: `${pathImage}/other/home/${id}.png`,
			...itm,
		};
	});
};

export const tranfromAutoComplete = (
	list: Pokemon.TranformPokemonItem[],
): Search.AutoComplete[] => {
	return list.map((itm) => ({
		label: itm.name,
		id: itm.id,
	}));
};
