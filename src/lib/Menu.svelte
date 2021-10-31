<script lang="ts">
  interface Item {
    name: string
    url: string
  }

  export let items: Item[] = []
</script>

<style>
  button:hover{
    transform: translate(-10px);
  }
  button::after{
    content: "←";
    display: none;
    transition: .2s ease-in-out;
  }
  button:hover::after{
    display: inline-block;
  }
</style>

  <div class="text-xs fixed sm:text-base bottom-4 right-4 text-right z-10">
    <button
      class="bg-0 text-center py-2 px-4 mx-2"
      style="
        font-size: 1rem;
        border-radius: 25px;
        transition: .2s linear;
      "
    >
      {#each items as { name, url }}
        <a href={url} class="p-1 text-black" target="_blank" rel="noreferrer">{name}</a>
      {/each}
    </button>
  </div>

