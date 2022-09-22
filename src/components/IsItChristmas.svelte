<script>
  const today = new Date();
  const thisYear = today.getFullYear();
  const christmas = new Date(`${thisYear} December 31`);

</script>

{#if today = christmas}
  <h1>YES</h1>
{:else}
  <h1>No</h1>
{/if}