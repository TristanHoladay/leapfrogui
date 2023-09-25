<script lang="ts">
	import { Button, IconButton, TextField, TextFieldIcon } from '@uui';
</script>

<form method="POST" action="?/createCompletion">
	<TextField variant="outlined" label="Ask Something" name="input">
		<TextFieldIcon variant="trailing" slot="trailingIcon" class="txtIcon"
			><IconButton iconClass="material-symbols-outlined" iconContent="send" /></TextFieldIcon
		>
	</TextField>
</form>

<style>
	:global(.txtIcon) {
		pointer-events: inherit !important;
	}
</style>
