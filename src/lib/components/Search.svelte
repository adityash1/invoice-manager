<script lang="ts">
  import Search from '$lib/components/Icon/Search.svelte';

  // No-op to prevent linter from removing import
  Search && Search;
</script>

<div class="relative flex w-full items-baseline">
  <div class="text-pastelPurple mr-2 mt-auto"><Search /></div>
  <input
    type="text"
    name="search"
    placeholder="Search by keyword"
    class="border-b-pastelPurple font-sansSerif focus:border-b-lavenderIndigo w-full border-b-2 border-dashed bg-transparent text-base text-black outline-none focus:border-solid md:w-[14rem] lg:w-72 lg:text-xl"
  />
  <button class="font-sansSerif text-pastelPurple text-lg font-black lg:text-xl">Search</button>
</div>
