import { getProducts } from "./api";
import { ProductList } from "./componets/ProductList";

export default async function Products() {
  return <ProductList products={await getProducts()} />;
}
