export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'Obsidian Trench',
        price: 850,
        category: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1544923246-7740a354af71?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '2',
        name: 'Lunar Silk Shirt',
        price: 320,
        category: 'Tops',
        image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '3',
        name: 'Carbon Trousers',
        price: 450,
        category: 'Bottoms',
        image: 'https://images.unsplash.com/photo-1624378439575-d8aa138f48ce?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '4',
        name: 'Void Bag',
        price: 1200,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '5',
        name: 'Nebula Dress',
        price: 680,
        category: 'Dresses',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: '6',
        name: 'Eclipse Blazer',
        price: 590,
        category: 'Outerwear',
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000',
    },
];
