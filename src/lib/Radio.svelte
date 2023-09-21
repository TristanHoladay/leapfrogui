<script lang="ts">
	export let checked = false;
	export let value: any = undefined;
	// export let color = 'on-surface';
	export let name = '';
	export let id = '';
	export let disabled = false;
</script>

<input type="radio" bind:value {checked} {id} {name} {disabled} />
