
<script lang="ts">

    let content = 'hey there!'

    
let character = {
  name:"loading",
  health: 0,
  mana: 0,
  status: "loading",
  woodcutting:0,
  fishing:0,
  gold:0,
}

    setTimeout(async () => {
        let tmp =  await fetch('http://localhost:8080/character').then(res => res.json())
        character = await tmp
    },5000)




</script>
<svelte:head>
    <title>MMO</title>
    
</svelte:head>

<main>

    <nav>
        <ul>
            <li>Activities</li> 
            <li>Login</li>
        </ul>
    </nav>

    <div class="character">
        <ul>
            <li>Name: {character.name}</li>
            <li>Health: {character.health}</li>
            <li>Mana: {character.mana}</li>
            <li>Status: {character.status}</li>
            <li>Fishing: {character.fishing}</li>
            <li>Woodcutting:{character.woodcutting}</li>
            {#if character.name == "loading"}
                waiting 5 seconds to signify a game tick the loading
            {/if}
            
        </ul>
    </div>

    <div class="money">
        {character.gold}
    </div>

    <div class="idunno">
        i dunno
    </div>

    <div class="window">
        window
        {content}

    </div>

    <div class="inventory">
        inventory
        <button on:click={async () => {
            let response = await fetch('http://localhost:8080/')
            content = await response.text()
        }}>click me</button>
    
    </div>

    <div class="tabs">
        tabs
    </div>


    


</main>

<style>
    main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    }
    nav {
        grid-row: 1;
        grid-column: 1/6;
        display: flex;
        background-color: beige;
    }
    nav ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
    }
    nav ul li {
        padding: 10px;
    }
    .character{
        grid-column:1;
        grid-row:2;
        background-color: lightgreen;
    }
    .money{
        grid-column:1;
        grid-row:3;
        background-color: lightgoldenrodyellow;
    }
    .idunno{
        grid-column:1;
        grid-row:4/6;
        background-color: lightpink;
    }
    .window{
        grid-column:2/6;
        grid-row:2/4;
        background-color: whitesmoke;
    }
    .inventory{
        grid-column:2/4;
        grid-row:4/6;
        background-color: burlywood
    }
    .tabs{
        grid-column:4;
        grid-row:4/6;
        background-color: bisque;
    }
        </style>