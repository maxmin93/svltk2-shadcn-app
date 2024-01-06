<script lang="ts">
	import { page } from '$app/stores';
	import { dev, browser } from '$app/environment';
	import { Metadata, SiteFooter, SiteHeader, TailwindIndicator } from '$lib/components/docs';
	import { updateTheme } from '$lib/utils';
	import '../app.pcss';
	import { config } from '$lib/stores';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster as DefaultSonner } from '$lib/components/ui/sonner';

	$: updateTheme($config.theme, $page.url.pathname);
</script>

<ModeWatcher />
<Metadata />
<DefaultSonner />

<div class="relative flex min-h-screen flex-col" id="page">
	<SiteHeader />
	<div class="flex-1">
		<slot />
	</div>
	<SiteFooter />
	<!-- {#if dev}
		<TailwindIndicator />
	{/if} -->
</div>
