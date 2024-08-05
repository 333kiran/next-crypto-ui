// // data/servicesData.js
// export const services = {
//     listing: {
//       name: 'Listing',
//       types: {
//         binance: 'Listing on Binance',
//         okx: 'Listing on OKX',
//         kucoin: 'Listing on Kucoin',
//         upbit: 'Listing on Upbit',
//         bitmart: 'Listing on Bitmart',
//         gateio: 'Listing on Gate.io',
//         indodax: 'Listing on Indodax',
//         bitfinex: 'Listing on Bitfinex',
//       },
//     },
//     marketMaking: {
//       name: 'Market Making',
//       types: {
//         crypto: 'Crypto Market Making',
//         stock: 'Stock Market Making',
//       },
//     },
//     funding: {
//       name: 'Funding',
//       types: {
//         seed: 'Seed Funding',
//         seriesA: 'Series A Funding',
//       },
//     },
//     marketing: {
//       name: 'Marketing',
//       types: {
//         digital: 'Digital Marketing',
//         offline: 'Offline Marketing',
//       },
//     },
//   };


export const services = [
  {
    name:'listing',
    type: 'listing',
    options: [
      { name: 'Listing on Bitmart', slug: 'bitmart' },
      { name: 'Listing on OKX', slug: 'okx' },
      { name: 'Listing on Bitflix', slug: 'bitflix' },
      { name: 'Listing on Gate.io', slug: 'gate-io' },
    ],
  },
  {
    name: 'funding',
    type: 'funding',
    options: [
      { name: 'VC Funding', slug: 'vc-funding' },
      { name: 'Angel Investors', slug: 'angel-investors' },
      // Add more options as needed
    ],
  },
  {
    type: 'market-making',
    name: 'Market Making',
    options: [
      { name: 'Market Making Service 1', slug: 'service-1' },
      { name: 'Market Making Service 2', slug: 'service-2' },
      // Add more options as needed
    ],
  },
  {
    type: 'marketing',
    name: 'Marketing',
    options: [
      { name: 'Market  Service 1', slug: 'service-1' },
      { name: 'Market  Service 2', slug: 'service-2' },
      // Add more options as needed
    ],
  },
  {
    type: 'advisory-services',
    name: 'Advisory Services',
    options: [
      { name: 'advice  Service 1', slug: 'service-1' },
      { name: 'advice  Service 2', slug: 'service-2' },
      // Add more options as needed
    ],
  },
  
];


export const exchangeData = {
  // name: 'Sample Exchange',
  metrics: [
    { name: 'Market Cap', value: '$1,000,000' },
    { name: 'Circulating Supply', value: '1,000,000 tokens' },
    { name: 'Max Supply', value: '10,000,000 tokens' }
  ],
  benefits: [
    { title: 'Increased Liquidity', description: 'Listing on Sample Exchange provides increased liquidity.' },
    { title: 'Better Market Reach', description: 'Listing on Sample Exchange provides better market reach.' },
    { title: 'Larger User Base', description: 'Listing on Sample Exchange provides access to a larger user base.' }
  ]
};
  