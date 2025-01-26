export type Category = 'gamer' | 'desktop' | 'streaming' | 'all';

export interface FilterInterface {
    search: string;
    priceRange: [number, number];
    category: Category;
}