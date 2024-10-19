<script lang="ts">
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount } from 'svelte';
	import { theme } from '$lib/components/logic/themeSwitcher';
	import { i18n } from '$lib/i18n';
	import '../app.css';

	// Components
	import ThemeSwitcher from '$lib/components/logic/ThemeSwitcher.svelte';

	onMount(() => {
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme) {
			theme.set(storedTheme);
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			theme.set('dark');
		} else {
			theme.set('light');
		}
	});
</script>

<ParaglideJS {i18n}>
	<div
		class="h-screen overflow-hidden antialiased bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 transition-colors"
	>
		<ThemeSwitcher />
		<main>
			<slot />
		</main>
	</div>
</ParaglideJS>

<style>
</style>
