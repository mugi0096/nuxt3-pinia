import { defineStore } from 'pinia';

export const useLoginUser = defineStore('login-user', {
  state: () => ({
    id: '123',
    name: 'ueno',
    mail: 'test@example.com'
  }),
  getters: {},
  actions: {},
})