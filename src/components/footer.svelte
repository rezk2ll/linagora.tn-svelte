<script lang="ts">
	import { footerElements } from './const';
</script>

<footer class="bg-black">
	<div class="container mx-auto px-8">
		<div class="w-full flex flex-col md:flex-row py-6">
			<div class="flex-1 mb-6 text-white px-10">
          <img
            class=""
            src="images/logo-outline.png"
            alt="Linagora Tunisia">
			</div>
      {#each footerElements as element}
      			<div class="flex-1">
				<p class="uppercase text-white-500 md:mb-6">{element.title}</p>
				<ul class="list-reset mb-6">
          {#each element.items as item}
					<li class="mt-2 inline-block mr-2 md:block md:mr-0">
						<a href="{item.url}" class="no-underline hover:underline text-gray-500 hover:text-white"
							>{item.title}</a
						>
					</li>
          {/each}
				</ul>
			</div>
      {/each}
		</div>
	</div>
</footer>
