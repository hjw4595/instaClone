import { adjectives , nouns } from "./words";

export const generatorSecret = () => {
    const randomNumber = math.floor(Math.random() * adjectives.length);
    return '${adjectives[randomNumer]} ${nouns[randomNumber]}'
}