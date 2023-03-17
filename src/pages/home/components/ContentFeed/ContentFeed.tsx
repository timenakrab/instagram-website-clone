import { Card } from 'commons';
import { FC } from 'react';

interface IContentFeed {
	list: Pokemon.TranformPokemonItem[];
}
const ContentFeed: FC<IContentFeed> = ({ list }) => {
	return (
		<div>
			{list.map((pokemon) => (
				<Card key={pokemon.name} {...pokemon} />
			))}
		</div>
	);
};

export default ContentFeed;
