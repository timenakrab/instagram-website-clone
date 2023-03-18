const ENVIRONMENT: any = {
	local: {
		REACT_APP_NODE_ENVIRONMENT: 'local',
		REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL ?? 'https://pokeapi.co/api/v2',
	},
	development: {
		REACT_APP_NODE_ENVIRONMENT: 'development',
		REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL ?? 'https://pokeapi.co/api/v2',
	},
	qa: {
		REACT_APP_NODE_ENVIRONMENT: 'qa',
		REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL ?? 'https://pokeapi.co/api/v2',
	},
	production: {
		REACT_APP_NODE_ENVIRONMENT: 'production',
		REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL ?? 'https://pokeapi.co/api/v2',
	},
};
export enum CONFIG_VALUE {
	REACT_APP_NODE_ENVIRONMENT = 'REACT_APP_NODE_ENVIRONMENT',
	REACT_APP_BACKEND_URL = 'REACT_APP_BACKEND_URL',
}

const getValue = (key: CONFIG_VALUE): string => {
	const NODE_ENV = process.env.REACT_APP_NODE_ENVIRONMENT || 'local';
	const value = ENVIRONMENT[NODE_ENV][key];
	if (!value) {
		throw new Error(`config error - missing env.${key}`);
	}

	return value;
};
const config = { getValue };
export default config;
