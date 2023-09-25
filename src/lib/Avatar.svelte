<script lang="ts">
	import { Box } from '@uui';
	import { current_component } from 'svelte/internal';

	type $$Props = svelte.JSX.HTMLAttributes<HTMLImageElement> & {
		content?: string;
		element?: string;
	};

	export let content = '';
	export let element = 'img';
</script>

<Box
	{element}
	eventComponent={current_component}
	src={content}
	{...$$restProps}
	class="avatar {$$restProps.class || ''}"
>
	<slot />
</Box>

<style global>
	.avatar {
		display: flex;
		align-items: center;
		justify-content: center;
		object-fit: cover;
		margin-left: 0;
		margin-right: 32px;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: #bdbdbd;
	}
</style>
