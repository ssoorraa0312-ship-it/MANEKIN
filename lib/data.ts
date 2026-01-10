export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    stylingFee?: number;
}

export const products: Product[] = [
    {
        id: "1",
        name: "TRENCH_COAT_01",
        price: 120000,
        category: "Outerwear",
        image: "/archive_01.png",
        stylingFee: 12000,
    },
    {
        id: "2",
        name: "TECH_BOMBER_V2",
        price: 85000,
        category: "Outerwear",
        image: "/archive_02.png",
        stylingFee: 8500,
    },
    {
        id: "3",
        name: "DISTRESSED_KNIT",
        price: 45000,
        category: "Tops",
        image: "/archive_03.png",
        stylingFee: 4500,
    },
    {
        id: "4",
        name: "TRANSLUCENT_SHELL",
        price: 68000,
        category: "Outerwear",
        image: "/archive_04.png",
        stylingFee: 6800,
    },
    {
        id: "5",
        name: "BLEACHED_DENIM_SET",
        price: 92000,
        category: "Setups",
        image: "/archive_05.png",
        stylingFee: 9200,
    },
    {
        id: "6",
        name: "TANK_BOOTS_BLK",
        price: 110000,
        category: "Footwear",
        image: "/archive_06.png",
        stylingFee: 11000,
    },
    {
        id: "7",
        name: "SPHERE_PUFFER_SILVER",
        price: 158000,
        category: "Outerwear",
        image: "/archive_07.png",
        stylingFee: 15800,
    },
    {
        id: "8",
        name: "STRUCTURAL_BLAZER",
        price: 135000,
        category: "Tailoring",
        image: "/archive_08.png",
        stylingFee: 13500,
    },
    {
        id: "9",
        name: "TRENCH_COAT_VOID",
        price: 125000,
        category: "Outerwear",
        image: "/archive_01.png", // Reusing image as variant
        stylingFee: 12500,
    },
    {
        id: "10",
        name: "TECH_BOMBER_OLIVE",
        price: 88000,
        category: "Outerwear",
        image: "/archive_02.png", // Reusing image as variant
        stylingFee: 8800,
    },
    {
        id: "11",
        name: "DISTRESSED_KNIT_CHARCOAL",
        price: 48000,
        category: "Tops",
        image: "/archive_03.png", // Reusing image as variant
        stylingFee: 4800,
    },
    {
        id: "12",
        name: "TANK_BOOTS_OXBLOOD",
        price: 115000,
        category: "Footwear",
        image: "/archive_06.png", // Reusing image as variant
        stylingFee: 11500,
    },
];
