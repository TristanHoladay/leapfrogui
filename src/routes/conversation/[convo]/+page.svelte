<script lang="ts">
	import { Box, Typography } from '@uui';
	import Input from '$lib/Input/Input.svelte';
	import Messages from '$lib/Messages/Messages.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { conversations } from '$lib/stores/conversation.store';

	console.log($page.params);

	onMount(() => {
		conversations.subscribe((val) => {
			console.log(val);
		});
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
	<Input />
</Box>
