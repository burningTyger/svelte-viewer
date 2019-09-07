import { writable } from 'svelte/store';
import { api } from 'electron-util'
import { join } from 'path'

export const state = writable({
  reload: 1,
  repos: [],
  dokument: '',
  repo: '',
  set_mark: true,
  reports: join(api.app.getPath("documents")),
  userData: join(api.app.getPath("userData")),
});