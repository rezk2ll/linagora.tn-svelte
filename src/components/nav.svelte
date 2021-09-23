<script lang="ts">
	import { navLinks } from './const';
	import * as animateScroll from 'svelte-scrollto';
	import { onMount } from 'svelte';

	let showMenu = false;
	let menu = null;

	onMount(() => {
		const handleOutsideClick = (event) => {
			if (showMenu && !menu.contains(event.target)) {
				showMenu = false;
			}
		};

		const handleEscape = (event) => {
			if (showMenu && event.key === 'Escape') {
				showMenu = false;
			}
		};

		document.addEventListener('click', handleOutsideClick, false);
		document.addEventListener('keyup', handleEscape, false);

		return () => {
			document.removeEventListener('click', handleOutsideClick, false);
			document.removeEventListener('keyup', handleEscape, false);
		};
	});
</script>

<nav id="header" class="fixed w-full z-30 top-0 text-white bg-white border-b-2">
	<div class="w-full container mx-auto flex {showMenu ? 'flex-wrap' : 'flex-nowrap'} items-center justify-between mt-0">
		<div class="pl-4 flex items-center">
			<div class="flex-1 text-white px-10 xs:w-full lg:w-1/4 flex-shrink-0 pt-4 cursor-pointer">
				<img
					class="object-scale-down max-w-xs max-h-16 h-4/6"
					src="images/logo.png"
					alt="Linagora Tunisia"
					on:click={() => animateScroll.scrollTo({ element: '#hero' })}
				/>
			</div>
		</div>
		<div class="block lg:hidden pr-4" bind:this={menu}>
			<button
				id="nav-toggle"
				on:click={() => (showMenu = !showMenu)}
				class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
			>
				<svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</button>
		</div>
		<div
			class="w-full flex-grow lg:flex lg:items-center lg:w-auto {showMenu
				? ''
				: 'hidden'} mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
			id="nav-content"
		>
			<ul class="list-reset lg:flex justify-end flex-1 items-center">
				{#each navLinks as { title, href }}
					<li class="mr-3">
						<a
							on:click={() => animateScroll.scrollTo({ element: href })}
							class="uppercase inline-block link-color no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
							{href}>{title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
</nav>

<style>
	.link-color {
		color: #c51843;
	}
</style>
