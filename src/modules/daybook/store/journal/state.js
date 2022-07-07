const state = () => ( {
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Non elit aliqua ut do cupidatat amet minim mollit laboris esse. Quis excepteur Lorem quis dolor voluptate aute. Aliqua reprehenderit pariatur ut sint incididunt consequat. Labore enim officia ipsum sit fugiat magna labore irure proident in laborum labore laboris commodo. Fugiat dolor culpa Lorem adipisicing velit sunt ipsum quis ullamco culpa.',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Reprehenderit laborum consequat dolore nostrud nulla duis commodo proident nisi sit. Labore ex cillum anim sint eiusmod sint aute irure laborum laboris pariatur aliquip sint. Est deserunt ut eu ullamco occaecat labore. Incididunt velit labore ut aliquip aliqua sit veniam non laborum cupidatat excepteur. Exercitation ea et dolore ipsum minim minim adipisicing fugiat do voluptate sunt ut. Nostrud quis tempor non laboris aliqua aliquip dolore culpa. Magna amet adipisicing anim voluptate in cillum nisi excepteur ut quis laboris consequat do aliqua.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Pariatur sint et quis commodo anim qui tempor enim ipsum enim officia ex fugiat. Cupidatat nisi incididunt mollit proident est veniam ex. Aliquip ipsum id laboris velit in non quis eu ullamco sunt. Quis elit elit eu do aliqua aliquip laborum non deserunt dolore magna minim id. Ut ea excepteur ex incididunt voluptate minim. Nisi eiusmod irure ullamco qui cupidatat in deserunt. Dolore tempor duis nisi in.',
            picture: null
        },
    ]
} );

export default state;