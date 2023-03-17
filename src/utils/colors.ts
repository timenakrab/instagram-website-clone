const primary = {
	lighter: '#FCFFE6',
	light: '#ECF576',
	main: '#DBDB23',
	dark: '#A89D00',
	darker: '#5C5000',
	gradient: 'linear-gradient(135deg, #ECF576 0%, #A89D00 100%)',
	transparent: {
		'8': 'rgba(219, 219, 35, 0.08)',
		'12': 'rgba(219, 219, 35, 0.12)',
		'16': 'rgba(219, 219, 35, 0.16)',
		'24': 'rgba(219, 219, 35, 0.24)',
		'32': 'rgba(219, 219, 35, 0.32)',
		'48': 'rgba(219, 219, 35, 0.48)',
	},
};

const secondary = {
	lighter: '#CBC7CB',
	light: '#B9B5B9',
	main: '#A8A2A8',
	dark: '#868286',
	darker: '#656165',
	gradient: 'linear-gradient(135deg, #CBC7CB 0%, #656165 100%)',
	transparent: {
		'8': 'rgba(168, 162, 168, 0.08)',
		'12': 'rgba(168, 162, 168, 0.12)',
		'16': 'rgba(168, 162, 168, 0.16)',
		'24': 'rgba(168, 162, 168, 0.24)',
		'32': 'rgba(168, 162, 168, 0.32)',
		'48': 'rgba(168, 162, 168, 0.48)',
	},
};

const info = {
	lighter: '#D0F2FF',
	light: '#74CAFF',
	main: '#2998FF',
	dark: '#0C53B7',
	darker: '#04297A',
	gradient: 'linear-gradient(135deg, #74CAFF 0%, #0C53B7 100%)',
	transparent: {
		'8': 'rgba(24, 144, 255, 0.08)',
		'12': 'rgba(24, 144, 255, 0.12)',
		'16': 'rgba(24, 144, 255, 0.16)',
		'24': 'rgba(24, 144, 255, 0.24)',
		'32': 'rgba(24, 144, 255, 0.32)',
		'48': 'rgba(24, 144, 255, 0.48)',
	},
};

const success = {
	lighter: '#E9FCD4',
	light: '#AAF27F',
	main: '#54D62C',
	dark: '#229A16',
	darker: '#08660D',
	gradient: 'linear-gradient(135deg, #AAF27F 0%, #229A16 100%)',
	transparent: {
		'8': 'rgba(84, 214, 44, 0.08)',
		'12': 'rgba(84, 214, 44, 0.12)',
		'16': 'rgba(84, 214, 44, 0.16)',
		'24': 'rgba(84, 214, 44, 0.24)',
		'32': 'rgba(84, 214, 44, 0.32)',
		'48': 'rgba(84, 214, 44, 0.48)',
	},
};

const warning = {
	lighter: '#FFF7CD',
	light: '#FFE16A',
	main: '#FFC107',
	dark: '#B78103',
	darker: '#7A4F01',
	gradient: 'linear-gradient(135deg, #FFE16A 0%, #B78103 100%)',
	transparent: {
		'8': 'rgba(255, 193, 7, 0.08)',
		'12': 'rgba(255, 193, 7, 0.12)',
		'16': 'rgba(255, 193, 7, 0.16)',
		'24': 'rgba(255, 193, 7, 0.24)',
		'32': 'rgba(255, 193, 7, 0.32)',
		'48': 'rgba(255, 193, 7, 0.48)',
	},
};

const error = {
	lighter: '#FFE7D9',
	light: '#FFA48D',
	main: '#FF4D35',
	dark: '#B72136',
	darker: '#7A0C2E',
	gradient: 'linear-gradient(135deg, #FFA48D 0%, #B72136 100%)',
	transparent: {
		'8': 'rgba(255, 72, 66, 0.08)',
		'12': 'rgba(255, 72, 66, 0.12)',
		'16': 'rgba(255, 72, 66, 0.16)',
		'24': 'rgba(255, 72, 66, 0.24)',
		'32': 'rgba(255, 72, 66, 0.32)',
		'48': 'rgba(255, 72, 66, 0.48)',
	},
};

const gray = {
	'100': '#F9FAFB',
	'200': '#F4F6F8',
	'300': '#DFE3E8',
	'400': '#C4CDD5',
	'500': '#919EAB',
	'600': '#637381',
	'700': '#454F5B',
	'800': '#212B36',
	'900': '#161C24',
	transparent: {
		'8': 'rgba(145, 158, 171, 0.08)',
		'12': 'rgba(145, 158, 171, 0.12)',
		'16': 'rgba(145, 158, 171, 0.16)',
		'24': 'rgba(145, 158, 171, 0.24)',
		'32': 'rgba(145, 158, 171, 0.32)',
		'48': 'rgba(145, 158, 171, 0.48)',
	},
};

const common = {
	black: '#000000',
	white: '#ffffff',
	transparent: {
		white: {
			'8': 'rgba(255, 255, 255, 0.08)',
			'12': 'rgba(255, 255, 255, 0.12)',
			'16': 'rgba(255, 255, 255, 0.16)',
			'24': 'rgba(255, 255, 255, 0.24)',
			'32': 'rgba(255, 255, 255, 0.32)',
			'48': 'rgba(255, 255, 255, 0.48)',
		},
		black: {
			'8': 'rgba(0, 0, 0, 0.08)',
			'12': 'rgba(0, 0, 0, 0.12)',
			'16': 'rgba(0, 0, 0, 0.16)',
			'24': 'rgba(0, 0, 0, 0.24)',
			'32': 'rgba(0, 0, 0, 0.32)',
			'48': 'rgba(0, 0, 0, 0.48)',
		},
	},
};

const text = {
	onlight: {
		primary: gray[800],
		secondary: gray[600],
		disabled: gray[500],
	},
	ondark: {
		primary: common.white,
		secondary: gray[300],
		disabled: '#AAAAAA',
	},
};

const divider = {
	onlight: {
		default: gray.transparent[24],
	},
	ondark: {
		default: gray.transparent[24],
	},
};

const background = {
	onlight: {
		default: common.white,
		paper: common.white,
		neutral: gray[100],
	},
	ondark: {
		default: gray[900],
		paper: gray[800],
		neutral: gray.transparent[12],
	},
};

const actionState = {
	onlight: {
		active: gray[600],
		hover: gray.transparent[8],
		selected: gray.transparent[16],
		disabled: gray.transparent[48],
		disabledBackground: gray.transparent[24],
		focus: gray.transparent[24],
	},
	ondark: {
		active: gray[500],
		hover: gray.transparent[8],
		selected: gray.transparent[16],
		disabled: gray.transparent[48],
		disabledBackground: gray.transparent[24],
		focus: gray.transparent[24],
	},
};

const colors = {
	primary,
	secondary,
	info,
	success,
	warning,
	error,
	gray,
	text,
	common,
	divider,
	background,
	actionState,
};

export default colors;
