import { writable } from 'svelte/store';

const getSystemTheme = () => {
	if (typeof window !== 'undefined') {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	return 'light'; // Default theme
};

export const theme = writable(getSystemTheme());

const applyTheme = (value: string) => {
	if (typeof window !== 'undefined') {
		if (value === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
};

// Subscribe to theme changes
theme.subscribe((value) => {
	applyTheme(value);
});

// Listen for system color scheme changes
if (typeof window !== 'undefined') {
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	mediaQuery.addEventListener('change', (e) => {
		theme.set(e.matches ? 'dark' : 'light');
	});
}
