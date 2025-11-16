export type Order = {
    id: number;
    order_id: string;      // Order number or title
    created_at: string;      // Order number or title
    delivery_date: string;      // Customer email
    status: string;       // Status (pending, shipped, etc.)
};

export const DEMO_ORDERS: Order[] = [
    {
        id: 1,
        order_id: "ORD-2025-001",
        created_at: "August 12, 2025",
        delivery_date: "August 17, 2025",
        status: "Processing",
    },
    {
        id: 2,
        order_id: "ORD-2025-002",
        created_at: "August 12, 2025",
        delivery_date: "August 17, 2025",
        status: "Shipped",
    },
    {
        id: 3,
        order_id: "ORD-2025-003",
        created_at: "August 12, 2025",
        delivery_date: "August 17, 2025",
        status: "Delivered",
    },
    {
        id: 4,
        order_id: "ORD-2025-004",
        created_at: "August 12, 2025",
        delivery_date: "August 17, 2025",
        status: "Pending Payment",
    },
    {
        id: 5,
        order_id: "ORD-2025-005",
        created_at: "August 12, 2025",
        delivery_date: "August 17, 2025",
        status: "Cancelled",
    },
];
