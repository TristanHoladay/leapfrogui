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
			<Avatar class="material-symbols-outlined" content="defense-unicorns.png" />
			<Typography>{message.text}</Typography>
		</Paper>
	{/each}
</Box>
