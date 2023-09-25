import type { CompletionReq } from '$lib/Types/completion';
import { openai } from './openai';

export async function getModels() {
	const data = await openai.models.list();
	console.log(data);
}
