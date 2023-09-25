import { openai } from '$lib/API/openai';
import type { ChatCompletionCreateParamsNonStreaming } from 'openai/resources/chat';

export const actions = {
	createCompletion: async (req: any) => {
		const formData = Object.fromEntries(await req.request.formData());
		const completion: ChatCompletionCreateParamsNonStreaming = {
			model: 'all-MiniLM-L6-v2',
			messages: [{ role: 'user', content: 'does this work at all?', name: 'doug' }]
		};
		const data = await openai.chat.completions.create(completion);
		console.log('data: ', data.choices[0].message);
		// console.log(await openai.models.list());
	}
};

// export async function load() {
// 	return {
// 		models:
// 	};
// }
