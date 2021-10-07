<script lang="ts">
  import "twind/shim"
  import { tw } from "twind"
  import logo from "./assets/svelte.png"
  import Head from "./lib/Head.svelte"
  import Kofi from "./lib/Kofi.svelte"
  import Menu from "./lib/Menu.svelte"
  import Social from "./lib/Social.svelte"

  import { onMount } from "svelte"
  import { text } from "svelte/internal"

  let daimai_list = []
  // ได้ไหม?
  let daimai = ""

  const randomFromArray = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  const randomData = () => {
    daimai = randomFromArray(daimai_list)
  }

  onMount(async () => {
    const res = await fetch(`https://raw.githubusercontent.com/narze/DaiMai/main/README.md`)
    const data_text = await res.text()
    daimai_list = data_text
      .split("\n")
      .filter((line) => line.startsWith("- "))
      .map((line) => line.split("- ")[1])

    randomData()
  })

  const url = "https://single-page-svelte.vercel.app"
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
    <h1 class="text-grey my-6 text-2xl">เคยส่งสัยกันมั้ยครับว่า...</h1>
    <h1 class="text-3xl animate-bounce  max-w-lg duration-700">
      {daimai}
    </h1>
  </div>
  <button
    class="bg-indigo-500 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded"
    on:click={randomData}
    title="สุ่มใหม่"
  >
    🎲
  </button>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;700&display=swap");

  :root {
    font-family: "Prompt", sans-serif;
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif; */
  }
</style>
