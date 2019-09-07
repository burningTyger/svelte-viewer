<script>
  import { state } from './../stores.js';

  const toggle_mark = async _ => {
    $state.set_mark = !$state.set_mark
    $state.webview.send('set_mark', $state.set_mark)
  }
  const toggle_edit = async _ => {
    $state.set_edit = !$state.set_edit
    $state.webview.send('set_edit', $state.set_edit)
  }
  const open_devtools = async _ => {
    const open = $state.webview.isDevToolsOpened()
    open || $state.webview.openDevTools()
  }
</script>

<nav class="navbar is-info">
  <div class="navbar-item"><input bind:value={$state.reports} width="100"></div>
  <div class="navbar-end">
    <div class="navbar-item">
      <button class="button is-link">
        <span class="icon">
          <i class="mdi" on:click={open_devtools}>code</i>
        </span>
      </button>
      <button class="button is-link">
        <span class="icon">
          <i class="mdi" class:has-text-warning={$state.set_edit} on:click={toggle_edit}>edit</i>
        </span>
      </button>
      <button class="button is-link">
        <span class="icon">
          <i class="mdi" class:has-text-warning={$state.set_mark} on:click={toggle_mark}>warning</i>
        </span>
      </button>
    </div>
  </div>
</nav>

<style>
  .button {
    margin-right: 0.4rem;
    margin-left: 0.4rem;
  }
</style>