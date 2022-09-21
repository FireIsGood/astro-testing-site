<script>
  function handleClick() {
    alert();
  };
</script>

<button on:click={handleClick}>
  <slot/>
</button>