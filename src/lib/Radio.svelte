<script lang="ts">
	import { Box, Typography } from '@uui';

	export let checked = false;
	export let value: any = undefined;
	export let name = '';
	export let id = '';
	export let disabled = false;
</script>

<Box ssx={{ $self: { display: 'flex', gap: '.25rem' } }}>
	<input type="radio" bind:value {checked} {id} {name} {disabled} />
	<label for={id}><Typography variant="h4">{value}</Typography></label>
</Box>
