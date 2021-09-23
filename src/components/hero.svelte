<script lang="ts">
  import InvertedWave from './inverted-wave.svelte';
  import * as animateScroll from 'svelte-scrollto';
</script>

<div class="pt-24" id="hero">
  <div class="container px-3 mx-auto items-center pt-28">
    <div class="justify-center items-center text-center md:text-center pb-28">
      <h1 class="my-4 text-5xl font-bold leading-tight pb-28">
        Nous aidons les organisations à développer leur indépendance technologique et leurs
        capacités d'innovation
      </h1>
      <p class="leading-normal text-2xl mb-8 pt-10">
        Prêt à relever les défis du futur avec le logiciel libre ?
      </p>
      <button
        on:click={() => animateScroll.scrollTo({ element: '#products' })}
        class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        En savoir plus
      </button>
    </div>
  </div>
</div>
<div class="relative -mt-12 lg:-mt-24">
  <InvertedWave />
</div>
