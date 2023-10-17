<script lang="ts">
	import { themeVal } from '$lib/stores/theme.store';
	import Asleep from 'carbon-icons-svelte/lib/Asleep.svelte';
	import UserAvatar from 'carbon-icons-svelte/lib/UserAvatar.svelte';
	import { Button, Header, HeaderUtilities, Popover, Tile } from 'carbon-components-svelte';

	let openMenu = false;
	let userIconRef: HTMLAnchorElement;
	let isSideNavOpen = true;

	function changeTheme() {
		themeVal.update((val) => {
			if (val === 'white') {
				return 'g90';
			} else {
				return 'white';
			}
		});
	}
</script>

<Header bind:isSideNavOpen platformName="LeapfrogAI">
	<img slot="company" src="leapfrogai_logo.png" alt="leapfrog logo" width="40px" height="40px" />
	<HeaderUtilities>
		<div style="position: relative;">
			<Popover bind:open={openMenu} align="bottom-right" closeOnOutsideClick>
				<Tile>doug@defenseunicorns.com</Tile>
			</Popover>
			<Button
				bind:ref={userIconRef}
				icon={UserAvatar}
				on:click={(e) => {
					e.stopPropagation();
					openMenu = !openMenu;
					userIconRef.blur();
				}}
				iconDescription="User Info"
				style="border-radius: 50%; background-color: transparent;"
			/>
		</div>
		<Button
			class="no-tooltip-icon"
			icon={Asleep}
			on:click={(e) => {
				e.target && e.target.blur(); // buggy -- doesn't work if clicking icon directly just button around icon
				changeTheme();
			}}
			style="border-radius: 50%; background-color: transparent;"
			iconDescription="Theme Mode"
		/>
	</HeaderUtilities>
</Header>

<style>
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
