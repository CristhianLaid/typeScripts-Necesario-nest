import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { pokemonIds, pokemons } from './bases/01-objects.ts'
// import { Pokemon } from './bases/03-inyection.ts'
// import { Pokemon } from './bases/02-clases.ts'
import { Pokemon } from './bases/04-decorators.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${pokemonIds.join('--')}</h1>
    <h2>${pokemons.map(pokemon => pokemon.name)}</h2>
    <h2>${Pokemon.name}</h2>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
