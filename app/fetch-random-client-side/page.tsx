'use client';

import useSWR from "swr";
import { useEffect, useState } from "react";

type User = {
    username: string;
};

const fetcher = (url: string) => fetch(url).then(res => res.json())

function FRCSP() {
    // // useSWR
    // const {
    //     data, error, isLoading
    // } = useSWR<User, Error>('https://random-data-api.com/api/users/random_user', fetcher);
    //
    // if (error) return <div>failed to load</div>
    // if (isLoading) {
    //     return <div>loading...</div>;
    // }
    //
    // return (
    //     <h1>{`Username: ${data?.username}`}</h1>
    // );

    // useEffect
    const [data, setData] = useState<User>({ username: '' });
    const [isLoading, setILoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log('Random run in client');
            setILoading(true);
            const res = await fetch('https://random-data-api.com/api/users/random_user');
            const data = await res.json();
            setData(data);
            setILoading(false);
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <div>loading...</div>;
    }

    return (
        <h1>{`Username: ${data?.username}`}</h1>
    );

}

export default FRCSP;