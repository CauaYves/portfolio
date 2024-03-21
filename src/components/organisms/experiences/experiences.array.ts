function calCurrentXpTime(startDate: string, endDate: string) {
  const startDaTetimestamp = new Date(startDate).getTime();
  const endDateTimestamp = new Date(endDate).getTime();

  const currentXpTimestamp = endDateTimestamp - startDaTetimestamp;
  const dataTimestamp = Number(new Date(currentXpTimestamp));

  const dataAtual = Number(new Date());

  const diferencaMilissegundos = dataAtual - dataTimestamp;

  const milissegundosPorMes = 1000 * 60 * 60 * 24 * 30.4375;
  const mesesPassados = diferencaMilissegundos / milissegundosPorMes;
  return `${mesesPassados.toPrecision(1)}`;
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
    currentXpTime: "5 meses",
    description:
      "Desenvolvimento de software voltado para projetos de cultura da cidade de Barra mansa que visam pôr em vigor a lei Paulo gustavo e Aldir Blanc, projeto voltado totalmente para o desenvolvimento de cultura e educação.      Tomada de decisões diretas em relação a projetos e desenvolvimento.                                          Uso de metodologia SCRUM para gerenciamento de tarefas.                                                          Tecnologias usadas: React.Js, Typescript, Next.Js, PostgreSQL, Node.Js, Express.Js",
  },
];
