import path from 'path';
import fs from 'fs/promises';
import Link from "next/link";

export default async function Home() {
  const products = await getData();
    // console.log('products', products);

  return (
      <ul>
        {(products?.props?.products || []).map((product: { id: string, title: string }) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.title}</Link>
            </li>
        ))}
      </ul>
  );
}

async function getData() {
    console.log('(Re-)Generating...');
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData.toString());

    if (!data) {
        return {
            redirect: {
                destination: '/no-data',
            },
        };
    }

    if (data.products.length === 0) {
        return { notFound: true };
    }

    return {
        props: {
            products: data.products,
        },
        revalidate: 10,
    };
}
