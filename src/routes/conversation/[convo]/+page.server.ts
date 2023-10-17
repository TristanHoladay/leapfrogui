import { openai } from '$lib/API/openai';
import { conversations } from '$lib/stores/conversation.store';
import type { ChatCompletionCreateParamsNonStreaming } from 'openai/resources/chat';

export const actions = {
	createCompletion: async (req: any) => {
		// const formData = Object.fromEntries(await req.request.formData());
		// const completion: ChatCompletionCreateParamsNonStreaming = {
		// 	model: 'gpt-3.5-turbo',
		// 	messages: [{ role: 'user', content: formData.input, name: 'doug' }]
		// };
		// const data = await openai.chat.completions.create(completion);
		// return {
		// 	message: data.choices[0].message
		// };
	}
};
