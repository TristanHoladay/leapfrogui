import { env } from '$env/dynamic/private';
import OpenAI from 'openai';

export const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY, baseURL: env.BASE_URL });
