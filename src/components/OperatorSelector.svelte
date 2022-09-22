<script>
  import AutoComplete from "simple-svelte-autocomplete";

  const items = [
    { id: 1, name: "Surtr" },
    { id: 2, name: "Eyja" },
    { id: 3, name: "Thorns" },
  ];

  let selectedItem;
</script>

<br>
<AutoComplete items={items} bind:selectedItem={selectedItem} >
</AutoComplete>

{#if selectedItem}
  <p>{selectedItem.name} with ID {selectedItem.id}</p>
{/if}
