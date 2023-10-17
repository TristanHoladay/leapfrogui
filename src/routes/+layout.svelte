<script lang="ts">
	import '../app.css';
	import 'carbon-components-svelte/css/all.css';
	import 'material-symbols/';
	import Navbar from '$lib/Nav/Navbar.svelte';
	import NavDrawer from '$lib/Nav/NavDrawer.svelte';
	import { Content, Theme } from 'carbon-components-svelte';
	import { themeVal } from '$lib/stores/theme.store';
	import { onMount } from 'svelte';

	let pageDocument: Document;
	onMount(() => {
		pageDocument = document;
	});
</script>

{#if pageDocument}
	<Theme bind:theme={$themeVal} persist persistKey="carbon_theme">
		<Navbar />
		<NavDrawer />
		<Content>
			<main>
				<slot />
			</main>
		</Content>
	</Theme>
{/if}

<style>
	:global(body) {
		overflow: hidden;
	}
</style>
