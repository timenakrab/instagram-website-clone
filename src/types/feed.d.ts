declare namespace Feed {
	interface ReqParam {
		offset: number;
		limit: number;
	}

	interface Item {
		id: number;
		api_link: string;
		title: string;
		alt_titles: null;
		thumbnail: {
			lqip: string;
			width: number;
			height: number;
			alt_text: string;
		};
		artist_display: string;
		style_titles: string[];
		image_id: string;
		source_updated_at: Date;
		updated_at: Date;
		timestamp: Date;
	}

	interface Pagination {
		current_page: number;
		limit: number;
		next_url: string;
		offset: number;
		total: number;
		total_pages: number;
	}
}
