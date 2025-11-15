
interface DetailItem {
    img: string;
    text: string;
    color: keyof typeof colorMap;
    number: string;
}

export const DETAILS_DATA: DetailItem[] = [
    {
        img: "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com_.png",
        text: "Padded heel engineered for all terrain comfort and unmatched ankle support.",
        color: "teal",
        number: "01",
    },
    {
        img: "https://static.vecteezy.com/system/resources/previews/034/610/241/non_2x/ai-generative-pair-of-sneaker-shoes-on-transparent-background-image-png.png",
        text: "The outsole pattern is inspired by metamorphosis to adapt with your every step.",
        color: "cyan",
        number: "02",
    },
    {
        img: "https://www.pngmart.com/files/1/Nike-Shoes-Transparent-PNG.png",
        text: "Engineered cushioning that hugs your feet all day, reducing fatigue with every step.",
        color: "pink",
        number: "03",
    },
];

export const colorMap = {
    teal: { accent: "#14b8a6", light: "#ccfbf1", bg: "#f0fdfa" },
    cyan: { accent: "#06b6d4", light: "#cffafe", bg: "#ecfeff" },
    pink: { accent: "#ec4871ff", light: "#fdd8ddff", bg: "#fadde4ff" },
};