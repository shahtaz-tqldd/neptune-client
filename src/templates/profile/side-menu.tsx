"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const ProfileSideMenu = () => {
  const pathname = usePathname();

  const sideMenu = [
    {
      id: 1,
      title: "My Orders",
      link: "/my-profile",
    },
    {
      id: 2,
      title: "Favourite",
      link: "/my-profile/favourite",
    },
    {
      id: 3,
      title: "Notification",
      link: "/my-profile/notifications",
    },
    {
      id: 4,
      title: "Profile Settings",
      link: "/my-profile/settings",
    },
  ];

  return (
    <div className="max-w-xs w-full">
      <div className="space-y-4 flex flex-col mt-6">
        {sideMenu.map((item) => {
          const isActive =
            pathname === item.link

          return (
            <Link
              href={item.link}
              key={item.id}
              className={`transition ${
                isActive ? "font-semibold" : "opacity-60 hover:opacity-100"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSideMenu;
