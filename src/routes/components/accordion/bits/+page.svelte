<script lang="ts">
	import { Accordion } from 'bits-ui';
	import { ChevronDown } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	const items = [
		{
			title: 'Feature Overview',
			content:
				'Task management, messaging, file sharing, progress tracking, and reporting for your team.'
		},
		{
			title: 'Platform Advantages',
			content:
				'Experience improved productivity, enhanced communication, and customizable project views for project execution.'
		},
		{
			title: 'Implementation Strategies',
			content:
				'Define clear goals, provide training, encourage adoption, and iterate based on feedback.'
		}
	];
</script>

<Accordion.Root class="w-full sm:max-w-[70%]" multiple>
	{#each items as item, i}
		<Accordion.Item value="${i}" class="border-dark-10 group border-b px-1.5">
			<Accordion.Header>
				<Accordion.Trigger
					class="flex w-full flex-1 items-center justify-between py-5 text-[15px] font-medium transition-all [&[data-state=open]>span>svg]:rotate-180 "
				>
					{item.title}
					<span
						class="sq-8 hover:bg-dark-10 inline-flex items-center justify-center rounded-[7px] bg-transparent transition-all"
					>
						<ChevronDown class="sq-[18px] transition-all duration-200" />
					</span>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content
				transition={slide}
				transitionConfig={{ duration: 200 }}
				class="pb-[25px] text-sm tracking-[-0.01em]"
			>
				{item.content}
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
