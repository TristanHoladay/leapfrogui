<script lang="ts">
	type $$Props = svelte.JSX.HTMLAttributes<HTMLImageElement> & {
		content?: string;
	};

	export let content = '';
</script>

<img src={content} {...$$restProps} class="avatar {$$restProps.class || ''}" alt={content} />

<style global>
	.avatar {
		display: flex;
		align-items: center;
		justify-content: center;
		object-fit: cover;
		margin-left: 0;
		margin-right: 1rem;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: #bdbdbd;
	}
</style>
