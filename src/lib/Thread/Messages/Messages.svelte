<script lang="ts">
	import Avatar from '$lib/Avatar.svelte';
	import { Box, Paper, Typography } from '@uui';

	let messages: any = [
		{ text: 'this is a prompt', speaker: 'user' },
		{ text: 'this is an answer from leapfrog', speaker: 'leapfrog' }
	];
</script>

<Box ssx={{ $self: { height: 'calc(100vh - 300px)' } }}>
	{#each messages as message}
		<Paper
			elevation={10}
			ssx={{ $self: { display: 'flex', alignItems: 'center', padding: '.5rem', margin: '1rem' } }}
		>
			<Avatar element="i" class="material-symbols-outlined">image</Avatar>
			<Typography>{message.text}</Typography>
		</Paper>
	{/each}
</Box>
