<script>
  import { BookOpen } from 'lucide-svelte';
  import { faker } from '@faker-js/faker/locale/ko';
</script>

<header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
  <div class="w-full">
    <h1 class="text-4xl lg:text-6xl font-bold">
      Hello,
      <span class="text-green-700">SvelteKit &plus; TailwindCSS</span>
    </h1>
    <div class="w-40 h-2 bg-green-700 my-4"></div>
    <p class="text-xl mb-10">{faker.lorem.paragraph(5)}</p>
    <button class="bg-green-500 hover:bg-green-700 text-white text-2xl font-medium px-4 py-2 rounded shadow inline-flex items-center">
      <BookOpen size="2rem" />
      <span class="ml-2">Learn more</span>
    </button>
  </div>
</header>
