export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Desenvolver Plataforma',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 2,
          content: 'Planejamento com PO para definição dos projetos',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 3,
          content: 'Módulo de pagamento',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 4,
          content: 'Desenvolvimento de protótipos',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 5,
          content: 'Deply da aplicação em homologação',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Ajustando portfólio',
          labels: [],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Integaração com API dos correios',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 8,
          content: 'Integração com API Pagar.me',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca php-nfe',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Desenvolvimento e estruturação de banco de dados',
          labels: [],
        },
        {
          id: 12,
          content: 'Configuração do ambiente',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Reunião de planejamento com diretoria',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}