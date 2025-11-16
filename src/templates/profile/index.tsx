"use client";
import React from "react";
import MyProfileLayout from "./profile-layout";
import DataTable, { Column } from "@/components/table";
import { DEMO_ORDERS, Order } from "./demo-data";

// Example data type

const MyOrderPage = () => {
  const columns: Column<Order>[] = [
    { key: "order_id", header: "Order" },
    { key: "created_at", header: "Order Placed", sortable: true },
    { key: "delivery_date", header: "Delivery Date", sortable: true },
    { key: "status", header: "Status" },
  ];

  return (
    <MyProfileLayout>
      <div>
        <h3>My Orders</h3>
        <DataTable
          data={DEMO_ORDERS}
          columns={columns}
          defaultPageSize={10}
          isShowActions
          className="mt-8"
        />
      </div>
    </MyProfileLayout>
  );
};

export default MyOrderPage;
