<script lang="ts">
	import Radio from '$lib/Radio.svelte';
	import { Box, Button, Dialog, DialogActions, DialogTitle, Typography } from '@uui';
	import ConvoDialog from './ConvoDialog/ConvoDialog.svelte';

	let convos = [{ name: 'Converstaion 1' }, { name: 'Conversation 2' }];

	let toggleDialog: () => void;
</script>

<Button variant="outlined" class="convoBtns">New Conversation</Button>
<Button variant="outlined" class="convoBtns" on:click={toggleDialog}>Delete Conversation</Button>
<Box ssx={{ $self: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' } }}>
	{#each convos as convo}
		<Radio name="convos" value={convo.name} />
	{/each}
</Box>

<Dialog bind:toggleDialog>
	<DialogTitle slot="title">Delete Conversation: Conversation Name</DialogTitle>
	<Typography slot="content">Are you sure?</Typography>
	<DialogActions slot="actions">
		<Button on:click={toggleDialog}>NO</Button>
		<Button on:click={toggleDialog}>YES</Button>
	</DialogActions>
</Dialog>
