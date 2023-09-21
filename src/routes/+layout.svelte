<script lang="ts">
	import '../app.css';
	import 'material-symbols/';
	import Navbar from '$lib/Navbar.svelte';
	import { Box, Drawer, IconButton, ListItem, Theme } from '@uui';
	import NavDrawer from '$lib/NavDrawer.svelte';

	let windowWidth: number;

	$: isDrawerOpen = windowWidth && windowWidth > 900 ? true : false;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<Theme theme="dark" preferredTheme={false}>
	<Navbar>
		<IconButton
			on:click={() => (isDrawerOpen = !isDrawerOpen)}
			iconContent="menu"
			iconClass="material-symbols-outlined"
			ssx={{ $md: { $self: { display: 'none !important' } } }}
		/>
	</Navbar>
	<NavDrawer {isDrawerOpen} />
	<main>
		<slot />
	</main>
</Theme>
