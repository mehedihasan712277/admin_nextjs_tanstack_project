import axios from "axios";
import { BooksDataType } from '@/utils/allType';
import { QueryFunctionContext } from "@tanstack/react-query";

export const fetchBooks = ({ pageParam }: QueryFunctionContext): Promise<{ data: BooksDataType[] }> => {
    return axios.get(`http://localhost:5000/book/?_limit=6&_page=${pageParam}`)
}