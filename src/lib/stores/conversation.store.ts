import type { Conversation } from '$lib/Types/conversation';
import { writable } from 'svelte/store';

export const conversations = writable<Record<string, Conversation>>({});
