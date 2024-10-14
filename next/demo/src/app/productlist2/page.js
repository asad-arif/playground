import Button from './button';

async function getProducts() {
  let data = await fetch('https://dummyjson.com/products');
  data = await data.json();
  return data.products;
}

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      <h1>Product List:</h1>
      {products.map((item) => (
        <div>
          <h2>Name: {item.title}</h2>
          <Button price={item.price} />
        </div>
      ))}
    </div>
  );
}

export function generateMetadata() {
  return {
    title: 'Images page',
    description: 'This is the image page',
  };
}
