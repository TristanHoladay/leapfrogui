<script lang="ts">
	import '../app.css';
	import 'carbon-components-svelte/css/all.css';
	import 'material-symbols/';
	import Navbar from '$lib/Nav/Navbar.svelte';
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
	<Theme bind:theme={$themeVal} persist persistKey="carbon_theme">
		<Navbar />
		<div class="body-cont">
			<NavDrawer />
			<div class="main-cont">
				<main>
					<slot />
				</main>
			</div>
		</div>
	</Theme>
{/if}

<style>
	:global(body) {
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
