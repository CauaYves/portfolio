export function calculateXp() {
  const startProgramingYear = 2021;
  const atualYear = new Date().getFullYear();
  return atualYear - startProgramingYear;
}
