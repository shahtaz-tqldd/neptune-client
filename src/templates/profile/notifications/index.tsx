"use client";

import React from "react";
import MyProfileLayout from "../profile-layout";
import { notificationData } from "./demo-data";

const NotificationPage = () => {
  const notifications = notificationData; // from JSON below

  return (
    <MyProfileLayout>
      <h3>Notifications</h3>

      <div className="space-y-4 mt-8">
        {notifications.map((note) => (
          <div
            key={note.id}
            className={`p-4 rounded-xl border border-gray-200 ${
              note.read ? "opacity-60" : "border-primary"
            }`}
          >
            <p className="font-medium">{note.title}</p>
            <p className="text-sm text-muted-foreground">{note.message}</p>
            <p className="text-xs text-gray-400 mt-1">{note.time}</p>
          </div>
        ))}
      </div>
    </MyProfileLayout>
  );
};

export default NotificationPage;
