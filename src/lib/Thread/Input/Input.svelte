<script lang="ts">
	import { createCompletion, getModels } from '$lib/API/api';
	import type { CompletionReq } from '$lib/Types/completion';
	import { TextField, TextFieldIcon } from '@uui';

	let value: string;
	let completion: CompletionReq;

	async function submit() {
		completion = {
			model: 'all-MiniLM-L6-v2',
			messages: [{ role: 'user', content: value, name: 'doug' }]
		};
		await createCompletion(completion);
	}

	function handleEnter(e: CustomEvent<any>) {
		const evt = e as unknown as KeyboardEvent;
		if (evt.key === 'Enter') {
			alert('prompt submitted');
		}
	}
</script>

<TextField variant="outlined" label="Ask Something" bind:value>
	<TextFieldIcon
		variant="trailing"
		slot="trailingIcon"
		class="material-symbols-outlined txtIcon"
		on:click={submit}
		on:keydown={handleEnter}
	>
		send
	</TextFieldIcon>
</TextField>

<style>
	:global(.txtIcon) {
		pointer-events: inherit !important;
	}
</style>
