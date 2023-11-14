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
		
		const data = { 
			choices: [
				{message: {role: 'assistant', content: 'You exceeded your current quota, please check your plan and billing details.'}}
			]
		}
		return {
			message: data.choices[0].message
		};
	}
};
