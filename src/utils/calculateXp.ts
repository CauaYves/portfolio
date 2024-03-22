export function calculateXp() {
  const startProgramingYear = 2022;
  const atualYear = new Date().getFullYear();
  return atualYear - startProgramingYear;
}
