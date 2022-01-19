<script>
    import {createEventDispatcher, afterUpdate} from 'svelte';
    import {test} from './stores.js';

    export let letter;
    export let state = '' // 'correct', 

    export let correctWord;
    export let guesses;
    
    $: buttonColor = 'white';
    
    const dispatch = createEventDispatcher();

    function calculateColor(){
        for(let guess of guesses){
            if(guess.includes(letter) && correctWord.includes(letter)){
                if(guess.indexOf(letter) === correctWord.indexOf(letter)){
                    buttonColor = 'green';
                }
                else if (buttonColor != 'green') buttonColor = 'yellow';
            }
            else if(guess.includes(letter) && !correctWord.includes(letter)){
                buttonColor = 'grey';
            }
        }
    }

    afterUpdate(calculateColor);

    function clickHandler() {
        alert("ehhhhhh?");
        dispatch('keyEvent', {key: letter});
    }
</script>

<button on:click={clickHandler} style="--button-color: {buttonColor}" class="{state}">
    {letter}
</button> 

<style>
    button{background-color: var(--button-color, white);}

    .correct {
        background-color: green;
    }
    .incorrect {
        background-color: gray;
    }
</style>