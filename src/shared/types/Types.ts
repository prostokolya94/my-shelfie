export enum Genre {
    COMEDY,
    DRAMA,
    HORROR,
    FANTASY,
    ROM_FANT,
    YOUNG_ADULT,
    FANTASTIC,
    NON_FICTION
}

export type Owner = {
    id: number;
    name: string;
    sureName: string;
    password: string;
    librariesIds: number[];
};

export type Library = {
    id: number;
    ownerId: number;
    bookCasesIds: number[];
};

export type BookCase = {
    id: number;
    shelfsIds: number[];
    skin: any;
};

export type Shelf = {
    id: number;
    booksVolume: number;
    booksIds: number[];
};

export type Book = {
    id: number;
    shelfId: number;
    bookCaseId: number;
    title: string;
    rating: 1 | 2 | 3 | 4 | 5;
    isFinished: boolean;
    note: Note;
    author: string;
    genre: Genre;
};

export type Note = {
    id: number;
    created: number;
    content: string;
};
