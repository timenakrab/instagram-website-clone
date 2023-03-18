import { Card, NoData } from 'commons';
import { FC } from 'react';

interface IContentNotification {
	list: Pokemon.TranformPokemonItem[];
}
const ContentNotification: FC<IContentNotification> = ({ list }) => {
	return (
		<div>
			{list.length ? list.map((pokemon) => <Card key={pokemon.name} {...pokemon} />) : <NoData />}
		</div>
	);
};

export default ContentNotification;
