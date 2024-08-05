

"use client";

import { AdvisoryServicesUI } from '@/app/(components)/AdvisorySErvicesUI';
import { CryptoFundingUI, FundingUI } from '@/app/(components)/FundingUI';
import { ListingCoinUI } from '@/app/(components)/ListingCoinUI';
import { CryptoMarketingUI, MarketingUI } from '@/app/(components)/MarketingUI';
import { MarketMakingUI } from '@/app/(components)/MarketMakingUI';
import { useRouter } from 'next/navigation';


const ServiceOption = ({ params }) => {
  const { serviceType, option } = params;
 
 
  return (
    <>
    {serviceType && serviceType === "listing" ? (
      <>
      <ListingCoinUI option={option}/>
      </>
    ):(
      <></>
    )}

{serviceType && serviceType === "market-making" ? (
      <>
      <MarketMakingUI/>
      </>
    ):(
      <></>
    )}

{serviceType && serviceType === "funding" ? (
      <>
     <CryptoFundingUI/>
      </>
    ):(
      <></>
    )}


{serviceType && serviceType === "marketing" ? (
      <>
      <CryptoMarketingUI/>
      </>
    ):(
      <></>
    )}


{serviceType && serviceType === "advisory-services" ? (
      <>
      <AdvisoryServicesUI/>
      </>
    
    ):(
      <></>
    )}



    </>
  );
};

export default ServiceOption;
