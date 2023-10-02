<script lang="ts">
	import { Paper, Menu, ListItem, ListItemAdornment, Typography } from '@uui';
	import Avatar from '../Avatar.svelte';
	import { themeVal } from '$lib/stores/theme.store';
	import Asleep from 'carbon-icons-svelte/lib/Asleep.svelte';
	import UserAvatar from 'carbon-icons-svelte/lib/UserAvatar.svelte';
	import { Button } from 'carbon-components-svelte';

	let openMenu = false;
	let anchorRef: HTMLAnchorElement;
	let windowWidth: number;

	function changeTheme() {
		themeVal.update((val) => {
			if (val === 'white') {
				return 'g90';
			} else {
				return 'white';
			}
		});
	}

	$: openDrawer = windowWidth && windowWidth > 900 ? true : false;
	$: logoDisplay = openDrawer ? 'block' : 'none';
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Paper elevation={2} square class="navbar">
	<img
		src="leapfrogai_logo.png"
		alt="leapfrog logo"
		width="50px"
		height="50px"
		style="display: {logoDisplay}; margin-left: 1rem;"
	/>
	<div class="btn-container">
		<Button
			icon={UserAvatar}
			kind="ghost"
			on:click={() => (openMenu = !openMenu)}
			bind:ref={anchorRef}
			style="border-radius: 50%;"
		/>
		<!-- <Button kind="ghost" as let:props> -->
		<!-- <i on:click={changeTheme}><Asleep class="iconS" size={20} /></i> -->
		<!-- </Button> -->
		<Button
			icon={Asleep}
			kind="ghost"
			on:click={changeTheme}
			style="border-radius: 50%;"
			tooltipAlignment="start"
		/>
		<!-- <Button kind="ghost" style="border-radius: 100%;" on:click={changeTheme}
			><Asleep size={32} /></Button
		> -->
	</div>
</Paper>

<Menu bind:open={openMenu} bind:anchorRef anchorOrigin="bottom-start">
	<ListItem>
		<ListItemAdornment slot="leading" class="material-symbols-outlined">
			<Avatar content="user.png" />
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
	.btn-container {
		width: 100%;
		display: flex;
		justify-content: end;
	}
	/* .iconS {
		pointer-events: inherit;
	} */
</style>
