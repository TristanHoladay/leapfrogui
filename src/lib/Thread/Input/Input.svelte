<script lang="ts">
	import { TextField, TextFieldIcon } from '@uui';

	function handleEnter(e: CustomEvent<any>) {
		const evt = e as unknown as KeyboardEvent;
		if (evt.key === 'Enter') {
			alert('prompt submitted');
		}
	}
</script>

<TextField variant="outlined" label="Ask Something">
	<TextFieldIcon
		variant="trailing"
		slot="trailingIcon"
		class="material-symbols-outlined txtIcon"
		on:click={() => alert('this clicked')}
		on:keydown={handleEnter}
	>
		send
	</TextFieldIcon>
</TextField>

<style>
	:global(.txtIcon) {
		pointer-events: inherit !important;
	}
</style>
