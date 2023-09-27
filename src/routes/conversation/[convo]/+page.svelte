<script lang="ts">
	import { Box, IconButton, TextField, TextFieldIcon, Typography } from '@uui';
	import Messages from '$lib/Messages/Messages.svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import type { Message } from '$lib/Types/completion';
	import { conversations } from '$lib/stores/conversation.store';
	import type { ActionData } from './$types';

	let inputVal: string;

	function updateMessages(message: Message) {
		conversations.update((convos) => {
			let convoName = $page.params.convo;
			convos[convoName].messages.push(message);
			return { ...convos };
		});
	}

	function updateFromRes(result: any) {
		if (result.data) updateMessages(result.data.message);
	}
</script>

<Box
	ssx={{
		$self: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			gap: '1rem',
			width: '100%'
		}
	}}
>
	<Typography variant="h2">Converstaion Thread: {$page.params.convo}</Typography>
	<Messages />
	<form
		method="POST"
		action="?/createCompletion"
		use:enhance={() => {
			return async ({ update, result }) => {
				await update();
				updateFromRes(result);
			};
		}}
	>
		<TextField variant="outlined" label="Ask Something" name="input" bind:value={inputVal}>
			<TextFieldIcon variant="trailing" slot="trailingIcon" class="txtIcon">
				<IconButton
					iconClass="material-symbols-outlined"
					iconContent="send"
					on:click={() => updateMessages({ role: 'user', content: inputVal })}
				/>
			</TextFieldIcon>
		</TextField>
	</form>
</Box>

<style>
	:global(.txtIcon) {
		pointer-events: inherit !important;
	}
</style>
