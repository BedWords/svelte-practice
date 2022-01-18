<script>
    import Keyboard from "./Keyboard.svelte";
    import Key from "./Key.svelte";
    export let correctWord;
    
    let length = 5;
    let guesses = ['', '', '', '', ''];
    let turn = 0;

    function eventHandler(event){
        checkGuess(event.detail.submission);        
    }

    function resetGame(){
        turn = 0;
        guesses = ['', '', '', '', ''];
    }

    function checkGuess(guess){
        if(correctWord === guess){
            alert("WIN!");
            resetGame();
            return;
        }
        else if(turn == 4){
            alert("you lose! the word was " + correctWord + "!");
            resetGame();
            return;
        }

        let clues = ['x','x','x','x','x'];
        for (let i=0; i<length; i++){
            if(guess.charAt(i) == correctWord.charAt(i)){
                clues[i] = 'G'; //letter is in correct place
            }
            else if(correctWord.includes(guess.charAt(i))){
                clues[i] = 'Y'; //letter is in word but incorrect place
            }
            else clues[i] = 'B'; //letter is not found in word
        }
        
        guesses[turn] = guess;
        clues = ['x','x','x','x','x'];
        turn++;
    }
    

</script>



<main>
    <p>Guesses:</p>
    {#each guesses as guess}
        <p>{guess}</p>
    {/each}

    <Keyboard {length} {guesses} {correctWord} on:submitEvent={eventHandler} />
       
</main>



<style>
</style>