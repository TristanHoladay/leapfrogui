<script lang="ts">
	import '../app.css';
	import 'material-symbols/';
	import Navbar from '$lib/Navbar.svelte';
	import { Box, IconButton, Theme } from '@uui';
	import NavDrawer from '$lib/NavDrawer.svelte';

	let windowWidth: number;
</script>

<Theme theme="dark" preferredTheme={false}>
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
