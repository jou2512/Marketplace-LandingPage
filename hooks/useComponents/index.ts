import { useQuery } from '@tanstack/react-query'

//Object with categories and their respective subcategories
export const CategoriesSubcategories = {
  "new-noteworthy": ["new", "noteworthy"],
  "content_management-design": ["content_management", "design"],
  "customer_service-community_engagement": ["customer_service", "community_engagement"],
  "developer-security_tools": ["developer", "security_tools"],
  "ecommerce-booking": ["ecommerce", "booking"],
  "marketing_automation-Analytics": ["marketing_automation", "analytics"],
  "productivity-language": ["productivity", "language"],
} as const;

export type CategoryType = keyof typeof CategoriesSubcategories;
export type SubcategoryType = typeof CategoriesSubcategories[CategoryType][number];

interface UseCategoriesResponse {
  isLoading: boolean,
  data?: Record<string, string[]> | undefined,
  error?: Error | undefined,
};

/**
 * Hook to fetch the list of categories and their corresponding subcategories.
 */


 export type ComponentRecord = {
  id: string;
  createdTime: string;
  fields: {
    "Long Description": string;
    "Short Description": string;
    Price: number;
    Name: string;
    "Component Tier": string;
    ComponentID: number;
    Categories: SubcategoryType[];
  };
};

export type ComponentData = {
  records: ComponentRecord[];
};

const token = "pata8tz0nNqHvVHvE.f633210f81f12861402f0e19f5444828aeadc6886f1a6604e06badd1f1f1db9c"
const baseId = "apppCnzE6M5mmEocZ"

const fetchFromAirtable = async (tableIdOrName: string) => {
    const response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableIdOrName}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.records;
}

const useComponents = () => {
  return useQuery({
    queryKey: ['components'],
    queryFn: () => fetchFromAirtable("tbl3b1XjRBsFEzs2j"),
  })
}

export { useComponents, fetchFromAirtable }