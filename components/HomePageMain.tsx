import Image from "next/image";
import React from "react";
import styled from "styled-components";

const path = "https://www.commercialcooling.com/wp-content/uploads/Double-Walk-in-Box-V1-1024x576.jpg";

const HeroImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  position: relative !important;
  height: unset !important;
`

const HomePageMain = () => {
  return (
    <main>
      <HeroImage
        src={path}
        alt=""
        layout="fill"
      />
    </main>
  );
};

export default HomePageMain;
