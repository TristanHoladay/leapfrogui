<script lang="ts">
	import { page } from '$app/stores';
	import Avatar from '$lib/Avatar.svelte';
	import type { Conversation } from '$lib/Types/conversation';
	import { conversations } from '$lib/stores/conversation.store';
	import { Paper } from '@uui';

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

<div class="messages">
	{#if messages}
		{#each messages as message}
			<Paper
				elevation={10}
				ssx={{
					$self: {
						display: 'flex',
						alignItems: 'center',
						padding: '.5rem',
						margin: '1rem',
						width: 'fit-content'
					}
				}}
			>
				<Avatar content={`${getImage(message.role)}.png`} />
				<body1>{message.content}</body1>
			</Paper>
		{/each}
	{/if}
</div>

<style>
	.messages {
		height: calc(100vh - 300px);
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: start;
		overflow-y: scroll;
	}
</style>
