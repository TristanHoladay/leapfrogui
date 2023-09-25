import { env } from '$env/dynamic/private';
import OpenAI from 'openai';

export const openai = new OpenAI({ apiKey: 'mykey', baseURL: env.LEAPFROGAI_URL });
