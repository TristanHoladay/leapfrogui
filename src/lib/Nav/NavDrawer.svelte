<script lang="ts">
	import {
		Box,
		Button,
		Checkbox,
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
	import { page } from '$app/stores';

	let newConvoName = '';
	let windowWidth: number;
	let toggleDeleteDialog: () => void;
	let toggleCreateDialog: () => void;
	let formRef: HTMLFormElement;

	function createConvo() {
		conversations.update((convos) => {
			convos[newConvoName] = { user: 'doug', name: newConvoName, messages: [] };

			return { ...convos };
		});

		goto(`/conversation/${newConvoName}`);
	}

	async function removeFromStore(v: FormDataEntryValue) {
		if ($page.params.convo === v) {
			await goto('/');
		}
		conversations.update((convos) => {
			delete convos[v as string];
			return { ...convos };
		});
	}

	function handleDelete() {
		formRef && new FormData(formRef).forEach((v) => removeFromStore(v));
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
				flexDirection: 'column',
				alignItems: 'flex-start',
				margin: '2rem'
			}
		}}
		style="display: {convoDisplay}"
	>
		<Typography variant="h4">Conversations</Typography>
		{#each Object.entries($conversations) as [name, _]}
			<Radio name="convos" value={name} checked={$page.params.convo === name} />
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
	<DialogTitle slot="title">Delete Conversations</DialogTitle>
	<form bind:this={formRef} slot="content" on:submit|preventDefault={handleDelete}>
		<Box ssx={{ $self: { display: 'flex', flexDirection: 'column' } }}>
			{#each Object.entries($conversations) as [name, _]}
				<Checkbox value={name} label={name} {name} id={`id_${name}`} />
			{/each}
		</Box>
		<DialogActions slot="actions">
			<Button type="submit" on:click={toggleDeleteDialog}>Delete</Button>
		</DialogActions>
	</form>
</Dialog>

<style>
	:global(.convoBtns) {
		width: 50%;
	}
</style>
