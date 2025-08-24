// Data derived from https://gs.statcounter.com/os-market-share/desktop/worldwide/2023
// And https://gs.statcounter.com/os-market-share/mobile/worldwide/2023
// And https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/2023
// For the month of December 2023

export const projects = [
    {
      label: 'Windows Apps',
      value: 72.72,
      color: '#00308F', // Custom color for Windows
    },
    {
      label: 'Mobile Apps',
      value: 16.38,
      color: '#36A2EB', // Custom color for OS X
    },
    {
      label: 'Websites',
      value: 3.83,
      color: '#00BFFF', // Custom color for Linux
    },
    {
      label: 'Other',
      value: 4.65,
      color: '#ADD8E6', // Custom color for Other
    },
  ];

  
  export const platforms = [
    {
      label: 'Mobile',
      value: 59.12,
    },
    {
      label: 'Desktop',
      value: 40.88,
    },
  ];
  
  const normalize = (v: number, v2: number) =>
    Number.parseFloat(((v * v2) / 100).toFixed(2));
  
  export const products = [
    ...projects.map((v) => ({
      ...v,
      label: v.label === 'Other' ? 'Other (IOS)' : v.label,
      value: normalize(v.value, platforms[1].value),
    })),
  ];
  
  export const valueFormatter = (item: { value: number }) => `${item.value}%`;
  