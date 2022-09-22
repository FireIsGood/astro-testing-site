<script>
  const today = new Date();
  const christmas = new Date(`December 31`);
  const sameMonth = today.getMonth() === christmas.getMonth();
  const sameDay = today.getDate() === christmas.getDate();
  const isChristmas = sameMonth && sameDay;
</script>

{#if isChristmas}
  <h1>YES</h1>
{:else if sameMonth}
  <h2>Same month but no</h2>
{:else}
  <h2>No</h2>
{/if}

<style>
  * {
    text-align: center;
  }
  h1 {
    margin: 0;
    font-size: 17rem;
  }

  h2 {
    margin: 0;
    font-size: 8rem;
  }
</style>
