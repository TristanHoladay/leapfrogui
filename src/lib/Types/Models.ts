const expdata = [
	{
		created: 0,
		id: 'repeater',
		object: '',
		owned_by: 'Defense Unicorns',
		permission: [],
		root: '',
		parent: ''
	},
	{
		created: 0,
		id: 'text-embedding-ada-002',
		object: '',
		owned_by: 'Defense Unicorns',
		permission: [],
		root: '',
		parent: ''
	},
	{
		created: 0,
		id: 'all-MiniLM-L6-v2',
		object: '',
		owned_by: 'Defense Unicorns',
		permission: [],
		root: '',
		parent: ''
	}
];

export type Model = {
	id: string;
	created: number;
	object: 'model';
	owned_by: string;
	permission: string[];
	root: boolean;
	parent: unknown;
};
