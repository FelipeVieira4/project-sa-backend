import Sequelize from 'sequelize';

const world = 'world';

export function hello(who: string = world): void {
    console.log(`Hello ${who}! `);
    return;
}

export function soma(numero1: number,numero2: number): number {
    return numero1+numero2;
}

hello('teste')

console.log(soma(10,50));