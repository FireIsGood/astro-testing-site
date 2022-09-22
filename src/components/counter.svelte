<script>

  let count = 0;
  function AddToCount() {
    count += 1;
  };
  function SubtractFromCount() {
    count -= 1;
  };
</script>

<button on:click={AddToCount}>
  Add to count
</button>

<p>The current count is: </p>
{#if count > 20}
  <pre>Really Big</pre>
{:else}
  <pre>{count}</pre>
{/if}



<button on:click={SubtractFromCount}>
  Subtract from count
</button>

<style lang='scss'>
  * {
    display: inline;
  }

  button {
    border: none;
    background-color: var(--color-border);
    border: 1px solid var(--color-link-hover);
    border-radius: 4px;
    padding: 4px;

    &:active {
      box-shadow: 0 0 4px #0004 inset;
    }
  }
</style>