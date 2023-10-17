<script lang="ts">
	import { goto } from '$app/navigation';
	import { conversations } from '$lib/stores/conversation.store';
	import { page } from '$app/stores';

	import {
		Button,
		Modal,
		RadioButton,
		RadioButtonGroup,
		SideNav,
		SideNavDivider,
		SideNavItems,
		TextInput
	} from 'carbon-components-svelte';
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
	$: convoDisplay = openDrawer ? 'flex' : 'none';
</script>

<svelte:window bind:innerWidth={windowWidth} />

<SideNav rail={windowWidth < 900} expansionBreakpoint={900} bind:isOpen={openDrawer}>
	<SideNavItems>
		<div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
			<Button kind="secondary" class="convoBtns" on:click={() => (openCreateModal = true)}
				>New Conversation</Button
			>
			<Button kind="secondary" class="convoBtns" on:click={() => (openDeleteModal = true)}
				>Delete Conversation</Button
			>
		</div>
		<SideNavDivider />
		<div
			style="display: {convoDisplay}; flex-direction: column; align-items: flex-start; margin: 2rem;"
		>
			<h4>Conversations</h4>
			{#each Object.entries($conversations) as [name, _]}
				<RadioButtonGroup orientation="vertical">
					<RadioButton
						name="convos"
						value={name}
						labelText={name}
						checked={$page.params.convo === name}
					/>
				</RadioButtonGroup>
			{/each}
		</div>
	</SideNavItems>
</SideNav>

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
