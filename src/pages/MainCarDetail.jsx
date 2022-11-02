import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useGetCarDetail from '../hooks/useGetCarDetail';
import { FlexBox } from '../styles/common';

const MainCarDetail = () => {
  const { pathId } = useParams();

  const {
    carDetail,
    getCarDetail,
    states: carDetailStates,
    carList,
  } = useGetCarDetail();

  useEffect(() => {
    getCarDetail(pathId);
  }, [carList]);

  return (
    <MainCarDetailLayout>
      <ImageBox>
        <img src={carDetail?.attribute?.imageUrl} alt="car-thumbnail" />
      </ImageBox>
      <CarModelSection>
        <FlexBox flexDirection="column">
          <BrandH2>{carDetail?.attribute?.brand}</BrandH2>
          <NameH1>{carDetail?.attribute?.name}</NameH1>
        </FlexBox>
        <AmountParagraph>월 {carDetail?.amount}</AmountParagraph>
      </CarModelSection>
      <CarInfoListRow>
        <CarBlueTitleH2>차량 정보</CarBlueTitleH2>
        <CarInfoList>
          <FlexBox justifyContent="space-between" alignItems="center">
            <CarInfoH2>차종</CarInfoH2>
            <CarInfoParagraph>{carDetail?.attribute?.segment}</CarInfoParagraph>
          </FlexBox>
          <FlexBox justifyContent="space-between" alignItems="center">
            <CarInfoH2>연료</CarInfoH2>
            <CarInfoParagraph>
              {carDetail?.attribute?.fuelType}
            </CarInfoParagraph>
          </FlexBox>
          <FlexBox justifyContent="space-between" alignItems="center">
            <CarInfoH2>이용 가능일</CarInfoH2>
            <CarInfoParagraph>{carDetail?.startDate} 부터</CarInfoParagraph>
          </FlexBox>
        </CarInfoList>
        <CarBlueTitleH2>보험</CarBlueTitleH2>
        <CarInfoList>
          {carDetail?.insurance?.map(insuranceElement => {
            return (
              <FlexBox justifyContent="space-between" alignItems="center">
                <CarInfoH2>{insuranceElement?.name}</CarInfoH2>
                <CarInfoParagraph>
                  {insuranceElement?.description}
                </CarInfoParagraph>
              </FlexBox>
            );
          })}
        </CarInfoList>
        <CarBlueTitleH2>추가상품</CarBlueTitleH2>
        <CarInfoList>
          {carDetail?.additionalProducts?.map(additionalProduct => {
            return (
              <FlexBox justifyContent="space-between" alignItems="center">
                <CarInfoH2>{additionalProduct?.name}</CarInfoH2>
                <CarInfoParagraph>
                  월 {additionalProduct?.amount} 원
                </CarInfoParagraph>
              </FlexBox>
            );
          })}
        </CarInfoList>
      </CarInfoListRow>
    </MainCarDetailLayout>
  );
};

export default MainCarDetail;

const MainCarDetailLayout = styled.main``;

const ImageBox = styled.div`
  width: 100%;
  height: 20rem;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const CarModelSection = styled.section``;

const BrandH2 = styled.h2``;

const NameH1 = styled.h1``;

const AmountParagraph = styled.p``;

const CarInfoListRow = styled.section``;

const CarBlueTitleH2 = styled.h2``;

const CarInfoList = styled.ul``;

const CarInfoH2 = styled.h2``;

const CarInfoParagraph = styled.p``;
