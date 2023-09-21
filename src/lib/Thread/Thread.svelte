<script lang="ts">
	import { Box, Typography } from '@uui';
	import Input from './Input/Input.svelte';
	import Messages from './Messages/Messages.svelte';
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
	<Typography variant="h2">Converstaion Thread: Thread Name</Typography>
	<Messages />
	<Input />
</Box>
