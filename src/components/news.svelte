<script lang="ts">
	import { news } from './const';
	import Article from './article.svelte';
</script>

<section class="text-black" id="news">
	<h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Actualité</h1>
	<div class="w-full mb-4">
		<div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
	</div>
	<div class="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
		<div class="my-6 px-4 md:px-6 lg:px-8">
			<a
				class="twitter-timeline"
				data-height="1535"
				href="https://twitter.com/LinagoraTunisie?ref_src=twsrc%5Etfw">Tweets by LinagoraTunisie</a
			>
			<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
		</div>
		<div class="">
			{#each news as article}
				<Article
					title={article.title}
					description={article.description}
					image={article.image}
					url={article.url}
				/>
			{/each}
		</div>
	</div>
</section>
