<script lang="ts">
  import CircledAmount from '$lib/components/CircledAmount.svelte';
  import Search from '$lib/components/Search.svelte';
  import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
  import { onMount } from 'svelte';
  import InvoiceRow from './InvoiceRow.svelte';

  // No-op to prevent linter from removing import
  CircledAmount && CircledAmount;
  Search && Search;
  InvoiceRow && InvoiceRow;
  invoices && invoices;

  onMount(() => {
    loadInvoices();
  });
</script>

<svelte:head>
  <title>Invoices | The Dollar Holler</title>
</svelte:head>

<div
  class="md:gap-7-4 mb-7 flex flex-col-reverse items-start justify-between gap-y-6 md:flex-row md:items-center lg:mb-16"
>
  <!-- search field -->
  <Search />

  <!-- new invoice button -->
  <div>
    <button
      class="bg-lavenderIndigo font-sansSerif shadow-colored hover:shadow-coloredHover relative translate-y-0 whitespace-nowrap rounded-lg px-5 py-2 text-base font-black text-white transition-all hover:-translate-y-2 lg:px-10 lg:py-3 lg:text-xl"
      >+ Invoice</button
    >
  </div>
</div>

<!-- list of invoices -->
<div>
  <!-- header -->
  <div class="table-header invoice-table text-daisyBush hidden lg:grid">
    <h3>Status</h3>
    <h3>Due Date</h3>
    <h3>ID</h3>
    <h3>Client</h3>
    <h3>Amount</h3>
    <div />
    <div />
  </div>

  <!-- invoices -->
  {#each $invoices as invoice}
    <InvoiceRow {invoice} />
  {/each}
</div>

<CircledAmount label="Total" amount="$1,144.00" />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }
</style>
