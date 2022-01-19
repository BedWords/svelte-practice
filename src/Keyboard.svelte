<script>
    import Key from './Key.svelte';
    import {createEventDispatcher} from 'svelte';
    export let length;

    const dispatch = createEventDispatcher();
    let guess = "";

     let rows = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l' ],
        ['ENTER','z','x','c','v','b','n','m','<-']
    ];

    function eventHandler(event){
        let key = event.detail.key;
        
        if(key=='ENTER'){ submit(guess);}
        else if(key=='<-'){ backspace(); }
        else{ guess += key; }
    }

    function submit(submission){
        if (guess.length!=length){
            alert('GUESS MUST BE ' + length + ' LETTERS LONG!');
            guess = '';
            return;
        }
        dispatch('submitEvent', {submission: guess});
        guess = "";
    }

    function backspace(){
       guess = guess.slice(0,guess.length-1);
    }
</script>


<div class="kb">
WORD: {guess}


{#each rows as row}
    <p>
    {#each row as letter}
        <Key {letter} on:keyEvent={eventHandler}/>
    {/each}
    </p>
{/each} 
</div>

<style>
    div.kb {
        display: block;
        max-width: 25%;
        margin: auto;
        align-items:center;
    }
</style>