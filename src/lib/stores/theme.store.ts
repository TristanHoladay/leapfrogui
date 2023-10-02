import { writable } from 'svelte/store';
import type { CarbonTheme } from 'carbon-components-svelte/types/Theme/Theme.svelte';

export const themeVal = writable<CarbonTheme>('white');
