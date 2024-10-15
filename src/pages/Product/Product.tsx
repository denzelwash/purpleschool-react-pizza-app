import { useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Product as ProductType } from "../../types/product";

export default function Product() {
  const data = useLoaderData() as ProductType;

  return (
    <>
      <PageTitle className="mb-0">Product - {data.name}</PageTitle>
    </>
  );
}
