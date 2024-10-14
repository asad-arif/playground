import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Link href={'/productlist'}>Go to Product List</Link>
      <br />
      <Link href={'/productlist2'}>Go to Product List2</Link>
    </div>
  );
}
