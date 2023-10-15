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
    libraries: Library[];
};

export type Library = {
    id: number;
    owner: Owner;
    bookCases: BookCase[];
};

export type BookCase = {
    id: number;
    shelfList: Shelf[];
    skin: any;
};

export type Shelf = {
    id: number;
    booksVolume: number;
    books: Book[];
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

export interface BookCaseClass extends BookCase {
    addShelf(shelf: Shelf): void;
    deleteShelf(shelfId: number): void;
    changeSkin(): void;
}
