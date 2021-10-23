<script lang="ts">
  import "twind/shim"
  import { tw } from "twind"
  import logo from "./assets/svelte.png"
  import Head from "./lib/Head.svelte"
  import Kofi from "./lib/Kofi.svelte"
  import Menu from "./lib/Menu.svelte"
  import Social from "./lib/Social.svelte"

  import { onMount } from "svelte"

  let daimai_list = []

  let daimai_id = 0

  const randomId = (len) => {
    return Math.floor(Math.random() * len)
  }

  const randomDataId = () => {
    daimai_id = randomId(daimai_list.length)
  }
  const setData = (id) => {
    daimai_id = id
  }
  let copied = false
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.origin + "?id=" + daimai_id)
    copied = true
    setTimeout(() => {
      copied = false
    }, 1500)
  }
  onMount(async () => {
    const res = await fetch(`https://raw.githubusercontent.com/narze/DaiMai/main/README.md`)
    const data_text = await res.text()
    daimai_list = data_text
      .split("\n")
      .filter((line) => line.startsWith("- "))
      .map((line) => line.split("- ")[1])

    const urlParams = new URLSearchParams(window.location.search)
    const id = parseInt(urlParams.get("id"))

    if (id != null && id < daimai_list.length) {
      setData(id)
    } else {
      randomDataId()
    }
  })

  const url = "https://daimai.vercel.app/"
  const title = "ได้ไหม 🧵🧶!?"

  const menuItems = [{ name: "Github", url: "https://github.com/narze/DaiMai" }]

  const description = "Build a single page app with Svelte, quickly."
  const imageUrl =
    "https://raw.githubusercontent.com/narze/timelapse/master/projects/single-page-svelte_home.png"
  const gtagId = null
</script>

<Kofi name="narze" label="Support Me" />
<Menu items={menuItems} />
<Social {url} {title} />
<Head {title} {description} {url} {imageUrl} {gtagId} />

<main class="w-full h-screen flex flex-col justify-center items-center">
  <div class="text-bold py-6 text-center">
    <h1 class="text-grey my-6 text-2xl">เคยสงสัยกันมั้ยครับว่า...</h1>
    {#if daimai_list[daimai_id] != undefined}
      <h1 class="text-3xl animate-bounce  max-w-lg duration-700">
        {daimai_list[daimai_id]}
      </h1>
    {:else}
      <div class=" flex justify-center items-center">
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900" />
      </div>
    {/if}
  </div>
  <div class="flex flex-row">
    <button
      class="bg-indigo-500 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded mx-2"
      on:click={randomDataId}
      title="สุ่มใหม่"
    >
      <img
        class="h-8"
        src="https://cdn-icons-png.flaticon.com/512/1803/1803495.png"
        alt="dice"
      >
    </button>
    <button
      class="bg-indigo-500 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded mx-2"
      on:click={copyLink}
      title="แชร์เลย"
    >
      {copied ? "คัดลอกแล้ว" : "แชร์เลย"}
    </button>
  </div>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;700&display=swap");

  :root {
    font-family: "Prompt", sans-serif;
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif; */
  }
  button:hover img{
		transform: rotate(180deg);
		transform-origin: 50% 50%;
		transition: transform 0.4s linear;
	}
</style>
