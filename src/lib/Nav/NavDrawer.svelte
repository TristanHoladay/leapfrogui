<script lang="ts">
	import { Box, Drawer, Typography } from '@uui';
	import Radio from '$lib/Radio.svelte';
	import { goto } from '$app/navigation';
	import { conversations } from '$lib/stores/conversation.store';
	import { page } from '$app/stores';
	import CloseLarge from 'carbon-icons-svelte/lib/CloseLarge.svelte';
	import Menu from 'carbon-icons-svelte/lib/Menu.svelte';
	import { Button, Modal, TextInput } from 'carbon-components-svelte';
	import { Checkbox } from 'carbon-components-svelte';

	let newConvoName = '';
	let windowWidth: number;
	let openDeleteModal = false;
	let openCreateModal = false;
	let deleteList: string[] = [];

	function createConvo() {
		conversations.update((convos) => {
			convos[newConvoName] = { user: 'doug', name: newConvoName, messages: [] };

			return { ...convos };
		});

		goto(`/conversation/${newConvoName}`);
		newConvoName = '';
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

	function controlDeleteList(e: CustomEvent<boolean>, name: string) {
		if (e.detail === true) {
			deleteList.push(name);
		} else {
			deleteList = deleteList.filter((c) => c !== name);
		}
	}

	function handleDelete() {
		deleteList.forEach((v) => {
			removeFromStore(v);
		});
		deleteList = [];
	}

	$: openDrawer = windowWidth && windowWidth > 900 ? true : false;
	$: iconContent = openDrawer ? CloseLarge : Menu;
	$: iconDesc = openDrawer ? 'close' : 'open';
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
	<Button
		slot="header"
		kind="ghost"
		icon={iconContent}
		iconDescription={iconDesc}
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
		<Button kind="tertiary" class="convoBtns" on:click={() => (openCreateModal = true)}>
			New Conversation
		</Button>
		<Button kind="tertiary" class="convoBtns" on:click={() => (openDeleteModal = true)}>
			Delete Conversation
		</Button>
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

<Modal
	bind:open={openDeleteModal}
	modalHeading="Delete Conversations"
	primaryButtonText="Confirm"
	on:click:button--secondary={() => (openDeleteModal = false)}
	on:submit={() => {
		openDeleteModal = false;
		handleDelete();
	}}
>
	{#each Object.entries($conversations) as [name, _]}
		<Checkbox value={name} labelText={name} on:check={(e) => controlDeleteList(e, name)} />
	{/each}
</Modal>

<Modal
	size="sm"
	bind:open={openCreateModal}
	modalHeading="Delete Conversations"
	primaryButtonText="Confirm"
	on:click:button--secondary={() => (openCreateModal = false)}
	on:click:button--primary={() => {
		openCreateModal = false;
		createConvo();
	}}
	selectorPrimaryFocus="#convo-name"
>
	<TextInput id="convo-name" labelText="name" bind:value={newConvoName} />
</Modal>

<style>
	:global(.convoBtns) {
		width: 45%;
	}
</style>
