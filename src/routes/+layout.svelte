<script>
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';

	import Header from './Header.svelte';
	import '../app.css';
</script>

<ParaglideJS {i18n}>
	<div class="app">
		<main>
			<slot />
		</main>
	</div>
</ParaglideJS>

<style>
</style>
