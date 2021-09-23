<script lang="ts">
  import { products } from './const';
</script>

<section class="bg-gray-100 py-8 text-gray-600 body-font" id="products">
  <div class="container px-5 py-24 mx-auto max-w-7x1">
    <div class="flex flex-wrap w-full mb-4 p-4">
      <div class="w-full mb-6 lg:mb-0">
        <h1
          class="sm:text-4xl text-5xl font-medium font-bold title-font text-center mb-2 text-gray-900"
        >
          Produits
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
      </div>
    </div>
    <div
      class="border-t pt-16 grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-8"
    >
      {#each products as product}
        <div class="bg-gray-100 min-h-1 flex items-center">
          <div
            class="container p-5 min-h-full bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <img
              class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-60 w-full object-none mb-6"
              src="images/{product.image}"
              alt={product.name}
            />
            <div class="flex justify-between items-center">
              <div>
                <h1 class="mt-5 text-2xl font-semibold">{product.name}</h1>
                <p class="mt-2">{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
