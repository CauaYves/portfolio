function calculateMonthDifference(
  currentMonthYear: string,
  previousMonthYear: string
) {
  function monthToNumber(month: string) {
    const monthsMap = {
      january: 0,
      february: 1,
      march: 2,
      april: 3,
      may: 4,
      june: 5,
      july: 6,
      august: 7,
      september: 8,
      october: 9,
      november: 10,
      december: 11,
    };
    //@ts-ignore
    return monthsMap[month.toLowerCase()];
  }

  const [currentMonth, currentYear] = currentMonthYear.toLowerCase().split(" ");
  const [previousMonth, previousYear] = previousMonthYear
    .toLowerCase()
    .split(" ");

  const currentMonthNumber = monthToNumber(currentMonth);
  const previousMonthNumber = monthToNumber(previousMonth);

  const totalMonthsCurrentYear =
    parseInt(currentMonthNumber) + parseInt(currentYear) * 12;

  const totalMonthsPreviousYear =
    parseInt(previousMonthNumber) + parseInt(previousYear) * 12;

  const monthDifference = totalMonthsCurrentYear - totalMonthsPreviousYear;

  return monthDifference;
}

const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const currentMonth = date.getMonth();
const extenseMonth = months[currentMonth];
const currentYear = date.getFullYear();
const currentXpTime = calculateMonthDifference(
  "October 2023",
  `${extenseMonth} ${currentYear}`
);
let atualXpOnLastJob = currentXpTime;
if (currentXpTime < 0) {
  atualXpOnLastJob *= -1;
}
export const xp = [
  {
    id: 1,
    title: "Desenvolvedor Full Stack",
    company: "Projetos Driven",
    startDate: "dez 2022",
    endDate: "out 2023",
    currentXpTime: "11 meses",
    description:
      "Treinamento intensivo simulando mercado de trabalho tech.  Desenvolvi mais de 25 projetos, tanto Front quanto Back das aplicações. O projeto que mais exigiu esforço foi o Link.r, uma rede social de links que contava com cadastro/login, chat interativo entre usuários, posts, buscas por palavras chaves e segurança dos dados de usuário. Por ser um projeto grande, tive a ajuda de 3 incríveis pessoas que demostraram empenho e grande habilidade para entregar as demandas no tempo certo.",
  },
  {
    id: 2,
    title: "Desenvolvedor Full Stack freelancer",
    company: "Villa Santorinni",
    startDate: "out 2023",
    endDate: "jan 2024",
    currentXpTime: "4 meses",
    description: `Desenvolvimento e manutenção de aplicações web usando tecnologias front-end e back-end.   Colaboração estreita com a equipe de design e outros desenvolvedores para garantir uma experiência do usuário excepcional.  Implementação de recursos de segurança como tokens JWT e vínculo a e-mail para proteger os dados do usuário e garantir a conformidade com as melhores práticas de segurança.
       Tecnologias usadas: MUI Component, React.Js, JWT, Typescript, Next.Js, PostgreSQL, Node.Js, Express.Js",
      `,
  },
  {
    id: 3,
    title: "Desenvolvedor Full Stack",
    company: "Erudir Tech",
    startDate: "nov 2023",
    endDate: "cargo atual",
    currentXpTime: atualXpOnLastJob + " meses",
    description:
      "Desenvolvimento de software voltado para projetos de cultura da cidade de Barra mansa que visam pôr em vigor a lei Paulo gustavo e Aldir Blanc, projeto voltado totalmente para o desenvolvimento de cultura e educação.      Tomada de decisões diretas em relação a projetos e desenvolvimento.                                          Uso de metodologia SCRUM para gerenciamento de tarefas.                                                          Tecnologias usadas: React.Js, Typescript, Next.Js, PostgreSQL, Node.Js, Express.Js",
  },
];
