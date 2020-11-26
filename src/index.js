import example from './images/Logo.png';
import example2 from './images/logo.svg';
import './styles/main.scss';

console.log("Interesting!")

const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading)

class Game {
  name = 'Violin Charades'
}
const myGame = new Game()
// Create paragraph node
const p = document.createElement('p')
p.textContent = `I like ${myGame.name}.`