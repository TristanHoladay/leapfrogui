<script lang="ts">
	import { page } from '$app/stores';
	import Avatar from '$lib/Avatar.svelte';
	import type { Conversation } from '$lib/Types/conversation';
	import { conversations } from '$lib/stores/conversation.store';
	import { Box, Paper, Typography } from '@uui';

	function getImage(role: string) {
		if (role === 'assistant') {
			return role;
		} else {
			return 'user';
		}
	}

	let convos: Record<string, Conversation>;

	conversations.subscribe((val) => {
		convos = val;
	});

	$: messages = convos && convos[$page.params.convo].messages;
</script>

<Box ssx={{ $self: { height: 'calc(100vh - 300px)' } }}>
	{#if messages}
		<Typography>working!!!!</Typography>
		{#each messages as message}
			<Paper
				elevation={10}
				ssx={{ $self: { display: 'flex', alignItems: 'center', padding: '.5rem', margin: '1rem' } }}
			>
				<Avatar class="material-symbols-outlined" content={`${getImage(message.role)}.png`} />
				<Typography>{message.content}</Typography>
			</Paper>
		{/each}
	{/if}
</Box>
