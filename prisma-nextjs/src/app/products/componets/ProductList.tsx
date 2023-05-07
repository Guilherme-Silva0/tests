import { Product } from "@prisma/client";
import Image from "next/image";

interface Props {
  products: Product[];
}

export function ProductList({ products }: Props) {
  return (
    <>
      <ul className="grid gap-3">
        {products.map((product) => (
          <li key={product.id} className="flex items-center gap-2">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              width={60}
              height={60}
              className="rounded-full w-12 h-12"
            />
            <p>{product.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
