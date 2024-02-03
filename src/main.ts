import './style.css'
import { setupCounter } from './counter.ts'
import './topics/02-object-interface.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Bonita
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
