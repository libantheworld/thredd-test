import React, { useEffect } from "react";
import { fetchUsers, setUser } from "../features/user/user-slice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Card, CardBody, CardFooter, Avatar } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const UserList = () => {
  const error = useAppSelector((state) => state.user.error);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.user.loading);
  const users = useAppSelector((state) => state.user.users);
  const router = useRouter();
  // fetch users on mount
  useEffect(() => {
    void dispatch(fetchUsers());
  }, []);

  if (loading) return <div style={styles.loading}>Loading...</div>;

  if (error) {
    return <div style={styles.empty}>{error}</div>;
  }

  if (!users || users.length === 0) {
    return <div style={styles.empty}>No users found</div>;
  }

  return (
    <div style={styles.list} className="container">
      {users.map((user) => {
        return (
          <Card
            key={user.id}
            isBlurred
            onPress={() => {
              dispatch(setUser(user));
              router.push("/user/detail");
            }}
            isPressable
            className="bg-zinc-900 text-slate-100"
          >
            <CardBody>
              <div className="flex flex-row gap-4">
                <Avatar size="md" name={user.name} />
                <div className="flex flex-col">
                  <p className="text-tiny font-bold uppercase">
                    {user.username}
                  </p>
                  <small className="text-default-500">{user.email}</small>
                  <small className="text-default-500">{user.phone}</small>
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <h4 className="text-large font-bold">{user.name}</h4>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

const styles = {
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: 20,
  },
  empty: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: 30,
    fontWeight: "bold",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontSize: 30,
    fontWeight: "bold",
  },
};

export default UserList;
