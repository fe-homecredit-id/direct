import React from "react";
import { MainLayout } from "../components/MainLayout";
import PageTemplate from "../components/PageTemplate";

const HowToUsePage = () => {
  const title = "How To Use";
  const subTitle = "Install and Contributing to our Design System";
  return (
    <MainLayout title={title}>
      <PageTemplate title={title} subTitle={subTitle}>
        <p>
          The purpose of lorem ipsum is to create a natural looking block of
          text (sentence, paragraph, page, etc.) that doesn't distract from the
          layout. A practice not without controversy, laying out pages with
          meaningless filler text can be very useful when the focus is meant to
          be on design, not content.{" "}
        </p>
      </PageTemplate>
    </MainLayout>
  );
};

export default HowToUsePage;