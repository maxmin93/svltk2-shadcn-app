<script>
	import { Command } from 'cmdk-sv';
	let loading = false;
</script>

<Command.Root>
	<Command.Input class="border p-4" />
	<Command.List>
		{#if loading}
			<Command.Loading>Loading...</Command.Loading>
		{/if}

		<Command.Empty>No results found.</Command.Empty>

		<Command.Group heading="Fruits">
			<Command.Item class="pl-8">Apple</Command.Item>
			<Command.Item class="pl-8">Orange</Command.Item>
			<Command.Separator />
			<Command.Item class="pl-8">Pear</Command.Item>
			<Command.Item class="pl-8">Blueberry</Command.Item>
		</Command.Group>

		<Command.Item>Fish</Command.Item>
	</Command.List>
</Command.Root>
