<script lang="ts">
	import {
		Paper,
		currentTheme,
		IconButton,
		Box,
		Menu,
		ListItem,
		ListItemAdornment,
		Typography
	} from '@uui';
	import Avatar from '../Avatar.svelte';

	let openMenu = false;
	let anchorRef: HTMLAnchorElement;

	function changeTheme() {
		currentTheme.update((theme) => {
			return theme === 'dark' ? 'light' : 'dark';
		});
	}
</script>

<Paper elevation={2} square class="navbar">
	<slot />
	<Box ssx={{ $self: { width: '100%', display: 'flex', 'justify-content': 'end' } }}>
		<IconButton
			iconContent="account_circle"
			iconClass="material-symbols-outlined"
			on:click={() => (openMenu = !openMenu)}
			bind:ref={anchorRef}
		/>
		<IconButton
			on:click={changeTheme}
			iconContent="dark_mode"
			toggledIconContent="light_mode"
			toggleable
			toggled={$currentTheme === 'dark'}
			iconClass="material-symbols-outlined"
			toggledIconClass="material-symbols-outlined"
		/>
	</Box>
</Paper>

<Menu bind:open={openMenu} bind:anchorRef anchorOrigin="bottom-start">
	<ListItem>
		<ListItemAdornment slot="leading" class="material-symbols-outlined">
			<Avatar content="defense-unicorns.png" />
		</ListItemAdornment>
		<Typography>doug@defenseunicorns.com</Typography>
	</ListItem>
</Menu>

<style>
	:global(.navbar) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem;
		height: 3.5rem;
		width: 100%;
	}
</style>
