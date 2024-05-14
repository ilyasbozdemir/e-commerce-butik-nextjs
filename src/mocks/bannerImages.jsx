export const bannerImages = [
  {
    id: "kargo-banner",
    alt: "kargo banner",
    desktop: {
      src:
        process.env.NODE_ENV !== "development"
          ? "https://picsum.photos/1472/115"
          : "https://picsum.photos/1472/115",
      width: 1472,
      height: 360,
    },
    tablet: {
      src:
        process.env.NODE_ENV !== "development"
          ? "https://picsum.photos/800/110"
          : "https://picsum.photos/800/110",
      width: 800,
      height: 250,
    },
    mobile: {
      src:
        process.env.NODE_ENV !== "development"
          ? "https://picsum.photos/540/50"
          : "https://picsum.photos/540/50",
      width: 540,
      height: 200,
    },
  },
];
