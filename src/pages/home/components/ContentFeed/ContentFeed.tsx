import { Card, LoadMore } from 'commons';
import { feedLoadMoreSelector } from 'globalState/selectors/feed.selector';
import { FC, useCallback } from 'react';
import { useRecoilValue } from 'recoil';

interface IContentFeed {
	offset: number;
	limit: number;
	list: Pokemon.TranformPokemonItem[];
	fetchFeed: ({ offset, limit }: Feed.ReqParam) => Promise<void>;
}
const ContentFeed: FC<IContentFeed> = ({ offset, limit, list, fetchFeed }) => {
	const loadmoreVisible = useRecoilValue(feedLoadMoreSelector);

	const handleFetchFeed = useCallback(
		(isFetch: boolean) => {
			if (isFetch) {
				fetchFeed({
					offset: offset + limit,
					limit: limit,
				});
			}
		},
		[fetchFeed, limit, offset],
	);

	return (
		<div>
			{list.map((pokemon) => (
				<Card key={pokemon.name} {...pokemon} />
			))}
			<LoadMore visible={loadmoreVisible} cbLoadmore={handleFetchFeed} />
		</div>
	);
};

export default ContentFeed;
