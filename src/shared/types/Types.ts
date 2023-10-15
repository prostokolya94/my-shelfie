export enum Genre {
    COMEDY,
    DRAMA,
    HORROR,
    FANTASY,
    ROMFANT,
    YOUNGADULT,
    FANTASTIC,
    NONFICTION
}

export type BookCase = {
    id: number;
    shelfList: Shelf[];
    skin: any;
};

export type Shelf = {
    id: number;
    bookCaseId: number;
    booksVolume: number;
    books: Book[];
};

export type Book = {
    id: number;
    shelfId: number;
    bookCaseId: number;
    title: string;
    rating: 1 | 2 | 3 | 4 | 5;
    note: Note;
    author: string;
    genre: Genre;
};

export type Note = {
    id: number;
    created: number;
    content: string;
};
