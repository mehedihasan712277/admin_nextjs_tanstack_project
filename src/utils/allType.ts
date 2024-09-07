export type BooksDataType = {
    _id: string;
    title: string;
    author: string;
    type: string;
    pages: number;
    description: string;
    isbn: string;
    publisher: string;
    publicationDate: string;
    language: string;
    regularPrice: number;
    discount: number;
    reducedPrice: number;
    stock: number;
    rating: number;
    relatedBooks: { bookId: string; title: string }[];
    coverImgUrl: string;
}