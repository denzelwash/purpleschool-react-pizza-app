import { useLoaderData } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { Card } from "../../types/card";

export default function Product() {
  const data = useLoaderData() as Card;

  return (
    <>
      <PageTitle className="mb-0">Product - {data.name}</PageTitle>
    </>
  );
}
