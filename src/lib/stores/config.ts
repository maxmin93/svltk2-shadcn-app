import { persisted } from 'svelte-persisted-store';
// https://www.npmjs.com/package/svelte-persisted-store

import type { Style } from '$lib/types/styles';
import type { Theme } from '$lib/types/themes';

type Config = {
	style: Style['name'];
	theme: Theme['name'];
	radius: number;
};

export const config = persisted<Config>('config', {
	style: 'default',
	theme: 'zinc',
	radius: 0.5
});
