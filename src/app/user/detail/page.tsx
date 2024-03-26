"use client";
import { useAppSelector } from "../../hooks";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import UserDetail from "../../components/UserDetail";
export default function Page() {
  const user = useAppSelector((state) => state.user.selectedUser);
  const router = useRouter();
  const tags = user!.company.bs.split(" ");

  return (
    <div className="lg:container">
      <div className="mb-12">
        <Button
          color="primary"
          variant="light"
          onPress={() => {
            router.push("/");
          }}
        >
          &#x2190; Back
        </Button>
      </div>
      <UserDetail user={user} tags={tags} />
    </div>
  );
}
