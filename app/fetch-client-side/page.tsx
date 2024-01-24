'use client';

// import { useEffect, useState } from "react";
import useSWR from "swr";

interface Image {
    id: number,
    title: string;
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

function FetchClientSidePage() {
    const {
        data: images, error, isLoading
    } = useSWR<Image[], Error>('https://jsonplaceholder.typicode.com/photos', fetcher);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return (
        <ul>
            {(images || []).map((i) => (
                <li key={i.id}>{`id: ${i.id} - title: ${i.title}`}</li>
            ))}
        </ul>
    );

    // // Use useEffect
    // const [images, setImages] = useState<Image[]>([]);
    // const [loading, setLoading] = useState(false);
    //
    // useEffect(() => {
    //     const getData = async () => {
    //         setLoading(true);
    //
    //         // const a = new Promise(resolve => {
    //         //     setTimeout(resolve, 5000)
    //         // })
    //         // await a;
    //
    //         const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    //         const data: Image[] = await res.json();
    //         setImages(data);
    //         setLoading(false);
    //     }
    //     getData();
    // }, []);

    // if (loading) {
    //     return <h1>Loading...</h1>
    // }
    //
    // return (
    //     <ul>
    //         {images.map(i => (
    //             <li key={i.id}>{`id: ${i.id} - title: ${i.title}`}</li>
    //         ))}
    //     </ul>
    // );
}

export default FetchClientSidePage;