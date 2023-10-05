<script lang="ts">
	import { themeVal } from '$lib/stores/theme.store';
	import Asleep from 'carbon-icons-svelte/lib/Asleep.svelte';
	import UserAvatar from 'carbon-icons-svelte/lib/UserAvatar.svelte';
	import { Button, Popover, Tile } from 'carbon-components-svelte';

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

<Tile class="navbar">
	<img
		src="leapfrogai_logo.png"
		alt="leapfrog logo"
		width="50px"
		height="50px"
		style="display: {logoDisplay}; margin: 1rem;"
	/>
	<div class="btn-container">
		<div style="position: relative;">
			<Popover bind:open={openMenu} align="bottom-right" closeOnOutsideClick>
				<Tile>doug@defenseunicorns.com</Tile>
			</Popover>
			<Button
				bind:ref={anchorRef}
				expressive
				icon={UserAvatar}
				kind="ghost"
				on:click={(e) => {
					e.stopPropagation();
					openMenu = !openMenu;
					anchorRef.blur();
				}}
				iconDescription="User Info"
				style="border-radius: 50%; position: relative;"
			/>
		</div>
		<!-- <Button kind="ghost" as let:props> -->
		<!-- <i on:click={changeTheme}><Asleep class="iconS" size={20} /></i> -->
		<!-- </Button> -->
		<Button
			class="no-tooltip-icon"
			icon={Asleep}
			kind="ghost"
			on:click={changeTheme}
			style="border-radius: 50%;"
			iconDescription="Theme Mode"
		/>
		<!-- <Button kind="ghost" style="border-radius: 100%;" on:click={changeTheme}
			><Asleep size={32} /></Button
		> -->
	</div>
</Tile>

<!-- <ContextMenu target={[anchorRef]} on:click={() => console.log('click')}>
	<ContextMenuOption labelText="doug@defenseunicorns.com" />
</ContextMenu> -->

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

	:global(
			.no-tooltip-icon.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--visible
				.bx--assistive-text,
			.no-tooltip-icon.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--visible
				+ .bx--assistive-text,
			.no-tooltip-icon.bx--btn.bx--btn--icon-only.bx--tooltip__trigger.bx--tooltip--visible.bx--tooltip--a11y::before,
			.no-tooltip-icon.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover .bx--assistive-text,
			.no-tooltip-icon.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover + .bx--assistive-text,
			.no-tooltip-icon.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:hover.bx--tooltip--a11y::before,
			.no-tooltip-icon.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus .bx--assistive-text,
			.no-tooltip-icon.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus + .bx--assistive-text,
			.no-tooltip-icon.bx--btn.bx--btn--icon-only.bx--tooltip__trigger:focus.bx--tooltip--a11y::before
		) {
		display: none;
	}
</style>
