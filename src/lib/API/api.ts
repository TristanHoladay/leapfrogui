import type { CompletionReq } from '$lib/Types/completion';
import OpenAI from 'openai';
// import { env } from '$env/dynamic/private';

export const openai = new OpenAI({
	apiKey: 'my_key',
	baseURL: 'https://leapfrogai.bigbang.dev/openai/v1',
	dangerouslyAllowBrowser: true
});

export async function createCompletion(completion: CompletionReq) {
	const data = await openai.chat.completions.create(completion);

	console.log(data);
}

export async function getModels() {
	const data = await openai.models.list();
	console.log(data);
}
