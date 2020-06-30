export enum Category {
    Fun = "fun",
    Transport = "transport",
    Home = "home",
    Income = "income"
};

export interface Transaction {
    id: number;
    value: number;
    description: string;
    category: Category;
}