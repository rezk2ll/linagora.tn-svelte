<script lang="ts">
	import { services } from './const';
</script>

<section class="bg-gray-100 py-8 text-gray-600 body-font" id="services">
	<div class="container px-5 py-24 mx-auto max-w-7x1">
		<div class="flex flex-wrap w-full mb-4 p-4">
			<div class="w-full mb-6 lg:mb-0">
				<h1
					class="sm:text-4xl text-5xl font-medium font-bold title-font text-center mb-2 text-gray-900"
				>
					Services
				</h1>
				<div class="w-full mb-4">
					<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
				</div>
			</div>
		</div>
		<main class="flex items-center p-10 w-full h-full bg-white">
			<div class="border-t border-b pt-16 grid grid-cols-2 gap-8">
				{#each services as service, index}
					{#if index % 2 === 0}
						<div class="flex flex-col justify-start">
							<div
								class="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden px-2"
								style="min-heigth:400px"
							>
								<img class="w-full h-full" src="images/{service.image}" alt={service.name} />
							</div>
						</div>
						<div class="flex flex-col">
							<div class="flex flex-col gap-4">
								<h1 class="capitalize text-4xl font-extrabold text-red-600">{service.name}</h1>
								<p class="text-lg text-gray-500	">{service.description}</p>
							</div>
						</div>
					{:else}
						<div class="flex flex-col">
							<div class="flex flex-col gap-4">
								<h1 class="capitalize text-4xl font-extrabold text-red-600">{service.name}</h1>
								<p class="text-lg text-gray-500	">{service.description}</p>
							</div>
						</div>
						<div class="flex flex-col justify-start">
							<div
								class="flex flex-col w-full object-cover h-4/6 justify-items-start border rounded-lg overflow-hidden"
								style="min-heigth:400px"
							>
								<img class="w-full h-full" src="images/{service.image}" alt={service.name} />
							</div>
						</div>
					{/if}
				{/each}
			</div>
		</main>
	</div>
</section>
