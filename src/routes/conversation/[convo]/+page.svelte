<script lang="ts">
	import { Box, IconButton, TextField, TextFieldIcon, Typography } from '@uui';
	import Messages from '$lib/Messages/Messages.svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import type { Message } from '$lib/Types/completion';
	import { conversations } from '$lib/stores/conversation.store';
	import type { ActionData } from './$types';
	import { afterUpdate } from 'svelte';

	let inputVal: string;
	export let form: ActionData;

	function updateMessages(message: Message) {
		conversations.update((convos) => {
			let convoName = $page.params.convo;
			convos[convoName].messages.push(message);
			return { ...convos };
		});
	}

	afterUpdate(() => {
		if (form && form.message) {
			updateMessages(form.message);
		}
	});
</script>

<Box
	ssx={{
		$self: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			gap: '1rem'
		}
	}}
>
	<Typography variant="h2">Converstaion Thread: {$page.params.convo}</Typography>
	<Messages />
	<form method="POST" action="?/createCompletion" use:enhance>
		<TextField variant="outlined" label="Ask Something" name="input" bind:value={inputVal}>
			<TextFieldIcon variant="trailing" slot="trailingIcon" class="txtIcon"
				><IconButton
					iconClass="material-symbols-outlined"
					iconContent="send"
					on:click={() => updateMessages({ role: 'user', content: inputVal })}
				/></TextFieldIcon
			>
		</TextField>
	</form>
</Box>

<style>
	:global(.txtIcon) {
		pointer-events: inherit !important;
	}
</style>
