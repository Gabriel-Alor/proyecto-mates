
const skills: string[] = ['volar','caminar','soñar'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: "Strider",
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = "Rivendell";

function addNumber(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firsNumber: number, secondNumber?: number, base: number = 2){
    return firsNumber * base;
}

const result = addNumber(1,2);
const result2: string = addNumbersArrow(1,2);
const multiplyResult: number = multiply(5);

console.log({result2});

console.log({result, result2, multiplyResult});

console.table(strider);

interface Character {
    name: string;
    hp: number;
    showHp: () => boolean;
}

const healCharacter = ( character: Character, amount: number) => {
    character.hp += amount;
}

const strider2: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`${this.hp}`);
        return true;
    }
}
export{}