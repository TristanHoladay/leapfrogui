<script lang="ts">
	import Radio from '$lib/Radio.svelte';
	import { Box, Button } from '@uui';
</script>

<Box
	ssx={{ $self: { display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' } }}
>
	<Button variant="flat" class="convoBtns">New Conversation</Button>
	<Button variant="flat" class="convoBtns">Delete Conversation</Button>
	<Box ssx={{ $self: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' } }}>
		<Radio />
	</Box>
</Box>
