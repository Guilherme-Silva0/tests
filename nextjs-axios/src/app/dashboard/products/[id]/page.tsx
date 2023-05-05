interface ProductProps {
  params: {
    id: string;
  };
}

const Products = ({ params }: ProductProps) => {
  return <h1 className="text-center text-3xl text-gray-200">{params.id}</h1>;
};

export default Products;
