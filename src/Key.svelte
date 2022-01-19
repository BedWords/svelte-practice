<script>
    import {createEventDispatcher, afterUpdate} from 'svelte';
    import {correctWord} from './stores.js';
    import {guesses} from './stores.js';

    export let letter;
    
    $: buttonColor = 'white';
    
    const dispatch = createEventDispatcher();

    function calculateColor(){
        for(let guess of $guesses){
            if(guess.includes(letter) && $correctWord.includes(letter)){
                if(guess.indexOf(letter) === $correctWord.indexOf(letter)){
                    buttonColor = 'green';
                }
                else if (buttonColor != 'green') buttonColor = 'yellow';
            }
            else if(guess.includes(letter) && !$correctWord.includes(letter)){
                buttonColor = 'grey';
            }
        }
    }

    afterUpdate(calculateColor);

    function clickHandler() {
        dispatch('keyEvent', {key: letter});
    }
</script>

<button on:click={clickHandler} style="--button-color: {buttonColor}">
    {letter}
</button> 

<style>
    button{background-color: var(--button-color, white);}
</style>