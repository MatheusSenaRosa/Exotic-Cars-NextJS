import React, { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

import {
  Screen,
  Main,
  DataCarArea,
  FeaturedCarContent,
  ContainerActionButtons,
} from "../../styles/detailsPage.style";

import { ActionButton, Header, Carousel } from "@/components/index";
import { getSelectedCar } from "@/endpoints/getSelectedCar";

import { CarsList, Colors } from "..";

import { getAllCars } from "@/endpoints/getAllCars";

type Props = {
  data: CarsList;
};

export default function DetailsPage({ data }: Props) {
  const [colorList, setColorList] = useState<Colors[]>(data.colors);
  const router = useRouter();

  function onGoBack() {
    router.back();
  }

  function carouselHandler(type: string) {
    switch (type) {
      case "previous":
        setColorList((prev) => [prev[2], prev[0], prev[1]]);
        return;
      case "next":
        setColorList((prev) => [prev[1], prev[2], prev[0]]);

        return;
      default:
        return;
    }
  }

  return (
    <Screen>
      <Header />
      <Main>
        {data.brand && (
          <section>
            <DataCarArea>
              <img src={data.brandIcon} alt={data.model} />
              <div>
                <h2>{`${data.brand} ${data.model}`}</h2>
                <h3>{`$${data.price}/day`}</h3>
              </div>
            </DataCarArea>

            <FeaturedCarContent image={colorList[0].selectedImage}>
              <div className="ContainerButtonCatalog">
                <button onClick={onGoBack}>
                  <BsArrowLeft className="icon" />
                  Back to catalog
                </button>
              </div>

              <div className="imgFeaturedCar" />

              <div className="detailContainer">
                <h3>{colorList[0].id}</h3>
                <h4>{colorList[0].color}</h4>
              </div>
            </FeaturedCarContent>
          </section>
        )}
        <ContainerActionButtons>
          <ActionButton text="Back to catalog" back action={onGoBack} />
          <ActionButton text="Book now" back={false} />
        </ContainerActionButtons>
        <Carousel data={colorList} onMove={carouselHandler} />
      </Main>
    </Screen>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getAllCars();

  const paths = response.map((car: { id: number }) => {
    return {
      params: { id: car.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params;

  const response = await getSelectedCar(+id);

  return {
    props: {
      data: response,
    },
  };
};
