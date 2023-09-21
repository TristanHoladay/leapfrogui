<script lang="ts">
	import { Box, Button, Drawer, IconButton } from '@uui';
	import Radio from './Radio.svelte';
	import Conversations from './Conversation/Conversations.svelte';

	let windowWidth: number;

	$: openDrawer = windowWidth && windowWidth > 900 ? true : false;
	$: iconContent = openDrawer ? 'close' : 'menu';
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
	<Conversations />
</Drawer>

<style>
	:global(.convoBtns) {
		width: 50%;
	}
</style>
