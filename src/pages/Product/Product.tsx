import { Await, useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Product as ProductType } from "../../types/product";
import { Suspense } from "react";

export default function Product() {
  const data = useLoaderData() as { data: ProductType };

  return (
    <>
      <Suspense fallback={<>Загрузка...</>}>
        <Await resolve={data.data}>
          {({ data }: { data: ProductType }) => (
            <PageTitle className="mb-0">Product - {data.name}</PageTitle>
          )}
        </Await>
      </Suspense>
    </>
  );
}
