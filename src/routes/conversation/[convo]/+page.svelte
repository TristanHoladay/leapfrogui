<script lang="ts">
	import Messages from '$lib/Messages/Messages.svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import type { Message } from '$lib/Types/completion';
	import { conversations } from '$lib/stores/conversation.store';
	import { Button, TextInput } from 'carbon-components-svelte';
	import Send from 'carbon-icons-svelte/lib/Send.svelte';

	let inputVal = '';

	function updateMessages(message: Message) {
		conversations.update((convos) => {
			let convoName = $page.params.convo;
			convos[convoName].messages.push(message);
			return { ...convos };
		});
	}

	function updateFromRes(result: any) {
		if (result.data) updateMessages(result.data.message);
	}
</script>

<div class="convo-cont">
	<h2>Converstaion Thread: {$page.params.convo}</h2>
	<Messages />
	<form
		method="POST"
		action="?/createCompletion"
		use:enhance={() => {
			return async ({ update, result }) => {
				await update();
				updateFromRes(result);
			};
		}}
		style="display: flex;"
	>
		<TextInput
			placeholder="Ask Something..."
			name="input"
			bind:value={inputVal}
			style="padding-right: 3rem;"
		/>
		<Button
			icon={Send}
			kind="ghost"
			style="position: relative; left: -40px; bottom: 5px; border-radius: 50%; background-color: transparent; border-color: transparent;"
			class="no-tooltip-icon"
			type="submit"
			disabled={inputVal.length === 0}
			on:click={() => inputVal.length > 0 && updateMessages({ role: 'user', content: inputVal })}
		/>
		<!-- <div
			style="position: relative; left: -40px; top: 10px;  border-radius: 50%"
			on:click={() => inputVal.length > 0 && updateMessages({ role: 'user', content: inputVal })}
		>
			<Send size={20} class=".txtIcon" />
		</div> -->
	</form>
</div>

<style>
	:global(.txtIcon) {
		pointer-events: inherit !important;
	}

	.convo-cont {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 100%;
	}

	/* .no-tooltip-icon .bx--btn--selected {
		border-color: red;
	} */
</style>
