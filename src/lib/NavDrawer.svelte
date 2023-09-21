<script lang="ts">
	import { Box, Drawer, IconButton } from '@uui';
	import Conversations from './Conversation/Conversations.svelte';

	let windowWidth: number;

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
		<Conversations />
	</Box>
</Drawer>

<style>
	:global(.convoBtns) {
		width: 50%;
	}
</style>
