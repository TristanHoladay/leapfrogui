<script lang="ts">
	import '../app.css';
	import 'carbon-components-svelte/css/all.css';
	import 'material-symbols/';
	import Navbar from '$lib/Nav/Navbar.svelte';
	import { Box } from '@uui';
	import NavDrawer from '$lib/Nav/NavDrawer.svelte';
	import { Theme } from 'carbon-components-svelte';
	import { themeVal } from '$lib/stores/theme.store';
	import { onMount } from 'svelte';

	let pageDocument: Document;
	onMount(() => {
		pageDocument = document;
	});
</script>

{#if pageDocument}
	<Theme bind:theme={$themeVal} persist persistKey="--carbon_theme">
		<Navbar />
		<Box class="body-cont">
			<NavDrawer />
			<Box class="main-cont">
				<main>
					<slot />
				</main>
			</Box>
		</Box>
	</Theme>
{/if}

<style global>
	body {
		overflow: hidden;
	}

	.body-cont {
		display: flex;
	}
	.main-cont {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		align-items: center;
		overflow-x: hidden;
		overflow-y: scroll;
	}
	main {
		padding-bottom: 32px;
	}
</style>
