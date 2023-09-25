import type { Conversation } from '$lib/Types/conversation';
import { writable } from 'svelte/store';

export const conversations = writable<Map<string, Conversation>>(new Map<string, Conversation>());
