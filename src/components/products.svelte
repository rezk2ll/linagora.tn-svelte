<script lang="ts">
import { products } from "./const"
</script>

<section class="bg-gray-100 py-8 text-gray-600 body-font" id="products">
  <div class="container px-5 py-24 mx-auto max-w-7x1">
    <div class="flex flex-wrap w-full mb-4 p-4">
      <div class="w-full mb-6 lg:mb-0">
        <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font text-center mb-2 text-gray-900">Produits</h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -m-4">
    {#each products as product}
      <div class="xl:w-1/3 md:w-1/2 p-4">
        <div class="bg-white p-6 rounded-lg shadow">
          <img
            class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-60 rounded-full w-full object-none mb-6"
            src="images/{product.image}"
            alt="{product.name}">
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{ product.name }</h2>
          <p class="leading-relaxed text-base h-16">{ product.description }</p>
        </div>
      </div>
    {/each}
    </div>
  </div>
</section>
