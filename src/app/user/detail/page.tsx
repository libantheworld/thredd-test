"use client";
import { useAppSelector } from "../../hooks";
import { Button, Avatar, Card, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Chip } from "@nextui-org/react";

export default function Page() {
  const user = useAppSelector((state) => state.user.selectedUser);
  const router = useRouter();
  const tags = user?.company.bs.split(" ");
  return (
    <div className="flex flex-col justify-center">
      <div className="mb-12">
        <Button
          color="primary"
          variant="flat"
          onPress={() => {
            router.push("/");
          }}
        >
          Back
        </Button>
      </div>
      <Card key={user?.id} isBlurred className="w-1/2 p-8">
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
              <p className="text-tiny mt-4 uppercase text-slate-400">
                {user?.username}
              </p>
              <p className="text-tiny uppercase text-slate-400">
                {user?.email}
              </p>
              <p className="text-tiny uppercase text-slate-400">
                {user?.phone}
              </p>
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
              <div className="flex gap-2">
                {tags?.map((tag, index) => (
                  <Chip key={index} variant="flat">
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
