import { writable } from 'svelte/store';

export const correctWord = writable('testing');  //autosubscribe with $correctWordStore to use this variable
export const guesses = writable([]);