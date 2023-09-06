/**
 *  THIS FILE IS INVALID INCLUDING THE MAPPINS SINCE THE FINAL GENERATED VALUES WERE NOT
 *  base58check ENCODING OF 32 bytes.
 *  WAS SUPPOSED TO ADD IMPURITIES AND MAKE IT A LITTLE DEVIATED FROM THE GENERATED VALUES.
 */

import { PrivateKey } from 'o1js';
import { letterMapping, numberMapping } from './mappings.js';

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAndPickOne(): PrivateKey {
  const GeneratedKeys: PrivateKey[] = [];
  for (let x = 0; x < 100; x++) {
    const createdKey = PrivateKey.random();
    GeneratedKeys.push(createdKey);
  }
  const selectedIndex = getRandomNumber(0, 99);
  const finalData = GeneratedKeys[selectedIndex];
  return finalData;
}

function getRandomIndices(size: number): number[] {
  const randomNumbers: number[] = [];

  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * 52);
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}

function setCharAt(str: string, index: number, char: string): string {
  if (index < 0 || index >= str.length) {
    return str; // return the original string if the index is out of range
  }

  const modifiedString =
    str.substring(0, index) + char + str.substring(index + 1);
  return modifiedString;
}

// The length of a pk being about 52.
function invertDataRandomly(key: string): string {
  let finalKey = key;
  const flipCount = getRandomNumber(10, 20);
  console.log('Flipping', flipCount, 'Values.');
  const indexArr = getRandomIndices(flipCount);

  for (let x = 0; x < flipCount; x++) {
    const currentIndex = indexArr[x];

    const value = String(finalKey.charAt(currentIndex));

    //Tells if its a number
    if (!isNaN(Number(value))) {
      finalKey = setCharAt(finalKey, currentIndex, numberMapping[value]);
    } else {
      finalKey = setCharAt(finalKey, currentIndex, letterMapping[value]);
    }
  }

  return finalKey;
}

const selectedPrvKey = generateAndPickOne();
const selectedPubKey = selectedPrvKey.toPublicKey();
const alteredKey = invertDataRandomly(selectedPrvKey.toBase58());

console.log('Original Private Key :', selectedPrvKey.toBase58());
console.log('Altered Private Key  :', alteredKey);
console.log('Original Public Key :', selectedPubKey.toBase58());
