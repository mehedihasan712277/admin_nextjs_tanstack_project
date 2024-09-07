"use client"
import { BooksDataType } from "@/utils/allType";
import { fetchBooks } from "@/utils/fetchBooks";
import { Backspace, Edit } from "@mui/icons-material";
import { CircularProgress, Rating } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query"
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const ProductsPage = () => {
    const { ref, inView } = useInView();
    const { data, isLoading, error, isError, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ["books"],
        queryFn: fetchBooks,
        initialPageParam: 1,
        getNextPageParam: (_lastPage, allPages) => {
            if (allPages.length < 4) {
                return allPages.length + 1;
            } else {
                return undefined;
            }
        }
    });
    console.log(data);

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);

    if (isLoading) {
        return (
            <div className="min-h-[60vh] w-full flex justify-center items-center">
                <CircularProgress />
            </div>
        );
    }
    if (isError) {
        return <div>{(error as Error).message}</div>;
    }

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 w-fit mx-auto">
                {
                    // Flattening the pages array to avoid nested mapping of each page
                    data?.pages.flatMap((page) => page.data).map((ele: BooksDataType) => (
                        <div key={ele._id} className="w-[250px] bg-[#F9F9F9] relative pb-6">
                            <div>
                                <Image
                                    src={ele.coverImgUrl}
                                    alt="img"
                                    width={300}
                                    height={350}
                                    className="w-full h-[300px] sm:w-[300px] sm:h-[350px]"
                                    sizes="(max-width: 425px) 100vw, 300px"
                                />
                            </div>
                            <div className="p-2">
                                <div>
                                    <p className="text-xl font-semibold">{ele.title}</p>
                                    <p>{ele.author}</p>
                                    <p className="text-xs text-gray-600">{ele.publisher}</p>
                                    <div className="flex gap-2 items-baseline">
                                        <span className="text-xl">${ele.reducedPrice}</span>
                                        <del className="text-sm text-red-500">
                                            <span>{ele.regularPrice}</span>
                                        </del>
                                    </div>
                                    <Rating value={ele.rating} precision={0.5} readOnly />
                                    <p className="text-xs">Stock: {ele.stock}</p>
                                </div>
                                <div className="flex justify-between absolute left-2 bottom-2 right-2">
                                    <Link href="/edit">
                                        <div className="cursor-pointer">
                                            <Edit />
                                        </div>
                                    </Link>
                                    <div className="cursor-pointer">
                                        <Backspace />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div ref={ref} className="text-center py-8 w-full">{isFetchingNextPage && "Loading...."}</div>
        </div>
    );
};

export default ProductsPage;
