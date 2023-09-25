import type { Message } from './completion';

export type Conversation = {
	user: string;
	name: string;
	messages: Message[];
};
