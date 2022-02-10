import type { GetStaticProps } from "next";

import { CarsList, Header } from "@/components/index";
import { getAllCars } from "@/endpoints/index";

export type Colors = {
  id: string;
  color: string;
  selectedImage: string;
  primaryImage: string;
  secondaryImage: string;
};

export type CarsList = {
  id: number;
  brand: string;
  model: string;
  price: number;
  icon: string;
  brandIcon: string;
  colors: Colors[];
};

type Props = {
  data: CarsList[];
};

const HomePage = ({ data }: Props) => {
  return (
    <>
      <Header />
      <CarsList data={data} />
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllCars();
  return {
    props: {
      data: data,
    },
    revalidate: 300000,
  };
};
