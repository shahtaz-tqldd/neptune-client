export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  sizes: string[];
  colors: string[];
}

export interface FilterProps {
  onFiltersChange?: (filters: FilterState) => void;
  onApplyFilters?: (filters: FilterState) => void;
  initialFilters?: Partial<FilterState>;
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  defaultFilters: FilterState;
}

export interface HeaderProps {
  hasActiveFilters: boolean;
  filters: FilterState;
  onClearFilters?: () => void;
  onSearch?: (query: string) => void;
  onCategorySelect?: (category: string) => void;
}

export interface DisplayProps {
  filters: FilterState;
  searchQuery: string;
  selectedCategory: string;
}