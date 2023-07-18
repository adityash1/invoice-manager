<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';

  // No-op to prevent linter from removing import
  Navbar && Navbar;
</script>

<div class="bg-whisper grid min-h-screen grid-cols-12 md:gap-x-16">
  <Navbar />
  <main class="col-span-12 px-4 pt-4 md:col-span-8 md:pt-10">
    <slot><!-- optional fallback --></slot>
  </main>
</div>
