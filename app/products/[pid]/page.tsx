import path from "path";
import fs from "fs/promises";
import {notFound} from "next/navigation";

type Product = {
    id: string;
    title: string;
    description: string;
}

async function ProductDetailPage({
    params
} : {
    params : { pid: string  }
}) {
    const { pid } = params;
    const loadedProduct = await getData(pid);
    if (!loadedProduct) {
        return notFound();
    }

    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    );
}

async function getData(productId: string): Promise<Product> {
    console.log('Loaded ID');
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data: { products: Product[] } = await JSON.parse(jsonData.toString());
    return data.products.find((product) => product.id === productId) as Product;
}

export default ProductDetailPage;