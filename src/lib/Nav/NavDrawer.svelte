<script lang="ts">
	import {
		Box,
		Button,
		Dialog,
		DialogActions,
		DialogTitle,
		Drawer,
		IconButton,
		TextField,
		Typography
	} from '@uui';
	import Radio from '$lib/Radio.svelte';
	import { goto } from '$app/navigation';
	import { conversations } from '$lib/stores/conversation.store';
	import type { Conversation } from '$lib/Types/conversation';

	let newConvoName = 'est';
	let windowWidth: number;
	let toggleDeleteDialog: () => void;
	let toggleCreateDialog: () => void;

	function createConvo() {
		conversations.update((convos) => {
			convos[newConvoName] = { user: 'doug', name: newConvoName, messages: [] };

			return { ...convos };
		});

		goto(`/conversation/${newConvoName}`);
	}

	$: openDrawer = windowWidth && windowWidth > 900 ? true : false;
	$: iconContent = openDrawer ? 'close' : 'menu';
	$: logoDisplay = openDrawer ? 'block' : 'none';
	$: convoDisplay = openDrawer ? 'flex' : 'none';
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Drawer
	elevation={2}
	open={openDrawer}
	ssx={{
		$self: {
			width: '500px',
			height: 'calc(100vh - 64px)'
		}
	}}
	rail
>
	<IconButton
		iconClass="material-symbols-outlined"
		{iconContent}
		slot="header"
		on:click={() => (openDrawer = !openDrawer)}
	/>
	<img
		src="leapfrogai_logo.png"
		alt="leapfrog logo"
		width="20%"
		style="display: {logoDisplay}; margin-left: 1rem;"
	/>
	<Box
		style="display: {convoDisplay}"
		ssx={{ $self: { flexDirection: 'column', gap: '1rem', alignItems: 'center' } }}
	>
		<Button variant="outlined" class="convoBtns" on:click={toggleCreateDialog}
			>New Conversation</Button
		>
		<Button variant="outlined" class="convoBtns" on:click={toggleDeleteDialog}
			>Delete Conversation</Button
		>
	</Box>
	<Box
		ssx={{
			$self: {
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'flex-start',
				margin: '2rem'
			}
		}}
	>
		<Typography variant="h4">Conversations</Typography>
		{#each Object.entries($conversations) as [name, _]}
			<Radio name="convos" value={name} />
		{/each}
	</Box>
</Drawer>

<Dialog bind:toggleDialog={toggleCreateDialog}>
	<DialogTitle slot="title">Create New Conversation</DialogTitle>
	<TextField slot="content" label="name" variant="outlined" bind:value={newConvoName} />
	<DialogActions slot="actions">
		<Button
			on:click={() => {
				createConvo();
				toggleCreateDialog();
			}}>Create</Button
		>
	</DialogActions>
</Dialog>

<Dialog bind:toggleDialog={toggleDeleteDialog}>
	<DialogTitle slot="title">Delete Conversation: Conversation Name</DialogTitle>
	<Typography slot="content">Are you sure?</Typography>
	<DialogActions slot="actions">
		<Button on:click={toggleDeleteDialog}>NO</Button>
		<Button on:click={toggleDeleteDialog}>YES</Button>
	</DialogActions>
</Dialog>

<style>
	:global(.convoBtns) {
		width: 50%;
	}
</style>
