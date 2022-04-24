<script lang="ts">
	export let id: number;
	export let advice: string;

	import '../styles.css';
</script>

<svelte:head>
	<title>Advice Generator</title>
</svelte:head>

<main>
	<div class="advice-section">
		<h1>advice #{id}</h1>
		<blockquote>“{advice}”</blockquote>
	</div>

	<div class="mobile">
		<img src="pattern-divider-mobile.svg" alt="divider" />
	</div>
	<div class="desktop">
		<img src="pattern-divider-desktop.svg" alt="divider" />
	</div>

	<a sveltekit:prefetch sveltekit:reload href="/">
		<div class="dice">
			<img src="icon-dice.svg" alt="dice" />
		</div>
	</a>
</main>

<style>
	main {
		background: var(--darkGrayishBlue);
		box-shadow: 1.875rem 3.125rem 5rem rgba(0, 0, 0, 0.100202);
		border-radius: 0.625rem;
		width: 21.4375rem;
		text-align: center;
	}

	/* ADVICE SECTION */
	.advice-section {
		padding: 2.5rem;
		padding-bottom: 1.5rem;
	}

	h1 {
		font-family: 'Manrope';
		font-style: normal;
		font-weight: 800;
		font-size: 0.6875rem;
		line-height: 0.9375rem;
		text-align: center;
		letter-spacing: 0.2161rem;
		color: var(--neonGreen);
		text-transform: uppercase;
		margin-bottom: 1.5rem;
	}
	blockquote {
		font-family: 'Manrope';
		font-style: normal;
		font-weight: 800;
		font-size: 1.5rem;
		line-height: 2.0625rem;
		text-align: center;
		letter-spacing: -0.0161rem;
		color: var(--lightCyan);
	}

	/* DIVIDER */
	.desktop {
		display: none;
	}

	/* DICE */
	.dice {
		width: 4rem;
		height: 4rem;
		background-color: var(--neonGreen);
		border-radius: 50%;
		display: grid;
		place-content: center;
		margin-inline: auto;
		position: relative;
		top: 2rem;
	}

	@media screen and (min-width: 48rem) {
		main {
			width: 33.75rem;
		}
		.advice-section {
			padding: 2.5rem;
		}
		h1 {
			font-size: 0.8125rem;
			line-height: 1.125rem;
			letter-spacing: 0.2554rem;
		}
		blockquote {
			font-size: 1.75rem;
			line-height: 2.375rem;
			letter-spacing: -0.0187rem;
		}
		.mobile {
			display: none;
		}
		.desktop {
			display: block;
			margin-bottom: 0.5rem;
		}
	}
</style>
