interface Image {
    id: number,
    title: string;
}


async function fetchData(): Promise<Image[]> {
    console.log('Wait....');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    // const res = await fetch('https://jsonplaceholder.typicode.com/photos', { cache: 'no-cache' });
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');

    console.log('Done');
    return await res.json();
}

async function ImageContent() {
    const images = await fetchData();

    return (
        <>
            <ul>
                {images.map(i => (
                    <li key={i.id}>{`id: ${i.id} - title: ${i.title}`}</li>
                ))}
            </ul>
        </>
    );
}

export default ImageContent;