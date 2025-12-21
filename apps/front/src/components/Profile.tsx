import React from "react";
import { SessionUser } from "@/lib/session";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PencilIcon, UserIcon } from "lucide-react";
import {
  ArrowRightStartOnRectangleIcon,
  ListBulletIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

type Props = {
  user: SessionUser;
};

const Profile = ({ user }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src={user.avatar} />
          <AvatarFallback>
            <UserIcon className="w-8 text-slate-500" />
          </AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex justify-center items-center gap-3">
          <UserIcon className="w-4" />
          <p>{user.name}</p>
        </div>
        <div className="*:grid *:grid-cols-5 *:gap-3 *:items-start *:my-2 *:py-2 [&>*>span]:col-span-4 [&>*:hover]:bg-sky-500 [&>*:hover]:text-white *:transition *:rounded-md [&>*>*:nth-child(1)]:justify-self-end">
          <a href="/api/auth/signout">
            <ArrowRightStartOnRectangleIcon className="w-4" />
            <span>Sign out</span>
          </a>
          <Link href="/user/create-post">
            <PencilIcon className="w-4" />
            <span>Create New Post</span>
          </Link>
          <Link href="/user/create-post">
            <ListBulletIcon className="w-4" />
            <span>Posts</span>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default Profile;
