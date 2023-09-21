<script lang="ts">
	import Radio from '$lib/Radio.svelte';
	import { Box, Button } from '@uui';

	let convos = [{ name: 'Converstaion 1' }, { name: 'Conversation 2' }];
</script>

<Button variant="outlined" class="convoBtns">New Conversation</Button>
<Button variant="outlined" class="convoBtns">Delete Conversation</Button>
<Box ssx={{ $self: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' } }}>
	{#each convos as convo}
		<Radio name="convos" value={convo.name} />
	{/each}
</Box>
