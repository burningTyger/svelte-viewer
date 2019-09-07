<script context="module">
  import * as Comlink from "comlink";
  export const repo_worker = Comlink.wrap(new Worker("./repo_worker.js"));
  export const rollup = Comlink.wrap(new Worker("./rollup_worker.js"));
</script>

<script>
  import { onMount } from 'svelte';
  import { state } from './../stores.js';
  import Main from "./Main.svelte";

  function callback(obj) {
    $state.repos = obj
  }
  $: reports = $state.reports
  $: reports && init()
  const init = async () => {
    await repo_worker.set_report_location($state.reports)
    await repo_worker.watch_repos(Comlink.proxy(callback))
  }
</script>

<style>
  @import "../node_modules/bulma/css/bulma.css";
</style>

<Main />