export function calculateAge() {
  const bornYear = 2004;
  const bornMonth = 9;

  const atualYear = new Date().getFullYear();
  const atualMonth = new Date().getMonth() + 1;

  let myAtualAge = atualYear - bornYear;

  if (atualMonth >= bornMonth) {
    myAtualAge++;
  } else {
    myAtualAge--;
  }
  return `${myAtualAge}`;
}
