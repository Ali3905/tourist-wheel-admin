import React from "react";
import {User} from "@nextui-org/react";

export default function App({ user }) {
  return (
    <User   
      name={user.userName}
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
      }}
    />
  );
}
