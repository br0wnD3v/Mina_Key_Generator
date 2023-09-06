import { PrivateKey } from 'o1js';

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

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const selectedPrvKey = generateAndPickOne();
const selectedPubKey = selectedPrvKey.toPublicKey();

console.log('PRIVATE KEY :', selectedPrvKey.toBase58());
console.log('PUBLIC KEY :', selectedPubKey.toBase58());
