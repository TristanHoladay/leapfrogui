import type { ChatCompletionCreateParamsNonStreaming } from 'openai/resources/chat';

export type Function_Call = {
	name: string;
	arguments: string;
};
export type Message = {
	role: 'system' | 'user' | 'assistant' | 'function';
	content: string | null;
	name?: string;
	function_call?: Function_Call;
};

export type OpenAIFunction = {
	name: string;
	description: string;
	parameters: {
		type: 'object';
		properties: Record<string, any>;
		required: string[];
	};
};

// export type CompletionReq = {
// 	model: string;
// 	messages: Message[];
// 	functions?: OpenAIFunction[];
// 	function_call?: 'none' | 'auto' | FunctionCallOption | undefined;
// 	temperature?: number | null;
// 	top_p?: number | null;
// 	n?: number | null;
// 	stream?: boolean | null;
// 	stop?: string | [] | null;
// 	max_tokens?: number | null;
// 	presence_penalty?: number | null;
// 	frequence_penalty?: number | null;
// 	logit_bias?: Map<string, number>;
// 	user?: string;
// };

export type CompletionReq = ChatCompletionCreateParamsNonStreaming;

export type Choice = {
	index: number;
	message: Partial<Message>;
	finish_reason: string;
};

export type Delta = {
	role: string;
	content: string | null;
	function_call: Function_Call;
};

export type ChoiceChunk = Partial<Choice> & {
	delta: Delta;
};

export type Usage = {
	prompt_tokens: number;
	completion_tokens: number;
	total_tokens: number;
};

export type Completion = {
	id: string;
	object: 'chat.completion';
	created: number;
	model: string;
	choices: Choice[];
	usage: Usage;
};

export type CompletionChunk = Partial<Completion> & {
	object: 'chat.completion.chunk';
	choices: ChoiceChunk[];
};
