interface MonthItem {
    month: string,
    value: number
}

interface CategoryItem {
    category: string,
    value: number
}

export interface Overview {
    expenses: MonthItem[];
    income: MonthItem[];
    expense_split: CategoryItem[];
}