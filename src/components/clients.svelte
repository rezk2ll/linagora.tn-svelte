<script lang="ts">
	import { clients } from './const';
</script>

<section class="bg-gray-100 py-8 text-gray-600 py-8 text-white-600 body-font">
	<div class="container px-5 py-24 mx-auto max-w-7x1">
		<div class="flex flex-wrap w-full mb-4 p-4">
			<div class="w-full mb-6 lg:mb-0">
				<h1 class="sm:text-4xl text-5xl font-medium title-font text-center mb-2 text-red-600">
					Ils nous font confiance
				</h1>
				<div class="w-full mb-4">
					<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center py-4 gap-4">
			{#each clients as client}
				<div
					class="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
				>
					<div class="p-4">
						<img class="rounded-xl" src="images/{client.image}" alt={client.name} />
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-2 justify-center text-center items-center">
			<a
				href="https://www.linagora.com/all-clients"
				class="text-red-700  inline-flex items-center font-semibold tracking-wide"
			>
				<span class="hover:underline"> Découvrez nos références </span>
				<span class="text-xl ml-2">&#8594;</span>
			</a>
		</div>
	</div>
</section>
