export interface Lab {
  id: number;
  title: string;
}

export interface WorkshopDate {
  id: number;
  from: string;
  to: string;
  language: string;
  icalUrl: string;
}

export interface Workshop {
  id: number;
  title: string;
  labs: Lab[];
  dates: WorkshopDate[];
}

export const workshops: Workshop[] = [
  {
    id: 1,
    title: "Professional Angular Testing",
    labs: [
      {
        id: 1,
        title: "Unit Tests: Asynchronity & Mocking",
      },
      {
        id: 2,
        title: "RxJs Marbles",
      },
      {
        id: 3,
        title: "Component / Integration Tests: Basics",
      },
      {
        id: 4,
        title: "Component / Integration Tests: Advanced",
      },
    ],
    dates: [
      {
        id: 1,
        from: "2022-03-30",
        to: "2022-03-31",
        language: "German",
        icalUrl: "http://something",
      },
      {
        id: 2,
        from: "2022-04-27",
        to: "2022-04-28",
        language: "English",
        icalUrl: "http://something",
      },
      {
        id: 3,
        from: "2022-05-28",
        to: "2022-06-30",
        language: "English",
        icalUrl: "http://something",
      },
    ],
  },
  {
    id: 2,
    title: "Professional NgRx",
    labs: [
      {
        id: 1,
        title: "Architecture",
      },
      {
        id: 2,
        title: "Best Practices",
      },
      {
        id: 3,
        title: "Testing",
      },
      {
        id: 4,
        title: "NgRx & Friends",
      },
    ],
    dates: [
      {
        id: 1,
        from: "2022-04-25",
        to: "2022-04-26",
        language: "English",
        icalUrl: "http://something",
      },
      {
        id: 2,
        from: "2022-06-28",
        to: "2022-06-29",
        language: "German",
        icalUrl: "http://something",
      },
    ],
  },
  {
    id: 3,
    title: "Enterprise Workshop",
    labs: [],
    dates: [],
  },
];
