import React from "react";
import { type User } from "../types";
import { Avatar, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

const UserDetail = ({ tags, user }: { tags: string[]; user: User | null }) => {
  return (
    <Card
      key={user?.id}
      isBlurred
      className="bg-zinc-900 p-8 text-white lg:w-1/2"
    >
      <CardHeader>
        {" "}
        <div className="text-sm ">
          <div className="flex gap-2">
            {tags?.map((tag, index) => (
              <Chip key={index} variant="flat" color="primary">
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="mb-10 flex flex-row gap-8">
          <div className="flex flex-col">
            <div className="flex flex-row gap-14">
              <Avatar size="lg" name={user?.name} />
              <div className="flex flex-col">
                <h1 className="text-xl font-bold">{user?.name}</h1>
                <p>{user?.address.city}</p>
                <Chip className="mt-2" color="primary">
                  {user?.website}
                </Chip>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-14">
          <div className="mt-4 text-xl font-bold">About</div>
          <div>
            <p className="mt-4 text-tiny uppercase text-slate-400">
              {user?.username}
            </p>
            <p className="text-tiny uppercase text-slate-400">{user?.email}</p>
            <p className="text-tiny uppercase text-slate-400">{user?.phone}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-row items-center  gap-8">
          <div className="text-xl font-bold">Location</div>
          <div className="text-sm ">
            <p>
              {`${user?.address.street}, ${user?.address.zipcode}, ${user?.address.city}`}
              .
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-row items-center  gap-4">
          <div className="text-xl font-bold">Company</div>
          <div className="text-sm ">
            <p>{user?.company.name}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserDetail;
