<script lang="ts">
	import { Drawer, IconButton } from '@uui';

	type $$Props = { isDrawerOpen: boolean };
	export let isDrawerOpen = false;

	$: iconContent = isDrawerOpen ? 'close' : 'menu';
</script>

<Drawer
	elevation={2}
	open={isDrawerOpen}
	ssx={{ $self: { width: '500px', height: 'calc(100vh - 64px)' } }}
	rail
>
	<IconButton
		iconClass="material-symbols-outlined"
		{iconContent}
		slot="header"
		on:click={() => (isDrawerOpen = !isDrawerOpen)}
	/>
</Drawer>
