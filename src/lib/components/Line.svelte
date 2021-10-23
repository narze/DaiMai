<script lang="ts">
  function handleClick() {
    let web_url = encodeURIComponent('https://daimai.vercel.app')
    let line_share_url = 'https://social-plugins.line.me/lineit/share?url=' 
    window.open( line_share_url + web_url, 'popUpWindow')
  }
</script>

<button on:click={handleClick}>
  <img src="line.png" alt="share to Line" class="h-10 w-10" />
</button>
