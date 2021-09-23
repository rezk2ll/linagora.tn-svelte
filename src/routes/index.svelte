<script lang="ts">
	import InvertedWave from './../components/inverted-wave.svelte';
	import Contact from './../components/contact.svelte';
	import Wave from './../components/wave.svelte';
	import Services from '../components/services.svelte';
	import News from '../components/news.svelte';
	import Products from '../components/products.svelte';
	import OpenSource from '../components/open-source.svelte';
	import Clients from '../components/clients.svelte';
	import Hero from '../components/hero.svelte';
	import Footer from '../components/footer.svelte';
	import Nav from '../components/nav.svelte';
</script>

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title>Linagora Tunisie</title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="author" content="" />
	<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
	<style>
		.gradient {
			background: linear-gradient(90deg, #c51843 0%, #dc3545 100%);
		}
	</style>
</head>
<body
	class="leading-normal tracking-normal text-white gradient"
	style="font-family: 'Source Sans Pro', sans-serif;"
>
	<!--Nav-->
	<Nav />
	<Hero />
	<Products />
	<Wave />
	<News />
	<InvertedWave />
	<Services />
	<OpenSource />
	<Clients />
	<Contact />
	<Footer />
</body>
