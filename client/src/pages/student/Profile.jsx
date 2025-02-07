import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Loader2 } from "lucide-react";
import Course from "./Course";
import { useLoadUserQuery } from "@/features/api/authApi";

function Profile() {
  const { data, isLoading } = useLoadUserQuery();
  console.log(data);

  if (isLoading) return <h1>Profile Loading...</h1>;

  const { user } = data;

  return (
    <div className="max-w-4xl px-4 mx-auto my-24">
      <h1 className="text-2xl font-bold text-center md:text-left">PROFILE</h1>
      <div className="flex flex-col items-center gap-8 my-5 md:flex-row md:items-start">
        <div className="flex flex-col items-center">
          <Avatar className="w-24 h-24 mb-4 md:h-32 md:w-32">
            <AvatarImage
              src={user.photoUrl || "https://github.com/shadcn.png"}
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Name:
              <span className="ml-2 font-normal text-gray-700 dark:text-gray-300">
                {" "}
                {user.name}
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Email:
              <span className="ml-2 font-normal text-gray-700 dark:text-gray-300">
                {" "}
                {user.email}
              </span>
            </h1>
          </div>
          <div className="mb-2">
            <h1 className="font-semibold text-gray-900 dark:text-gray-100">
              Role:
              <span className="ml-2 font-normal text-gray-700 dark:text-gray-300">
                
                {user.role.toUpperCase()}
              
              </span>
            </h1>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mt-2">
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you`re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label>Name</Label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="col-span-3"
                  />
                </div>
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label>Profile Photo</Label>
                  <input type="file" accept="image/*" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Please
                      wait...
                    </>
                  ) : (
                    "Save Changes"
                  )}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-medium">Courses you`re enrolled in </h1>
        <div className="grid grid-cols-1 gap-4 my-5 sm:grid-cols-2 md:grid-cols-3">
          {user.enrolledCourses.length === 0 ? (
            <h1>You haven`t enrolled yet</h1>
          ) : (
            user.enrolledCourses.map((course) => <Course course={course} key={course._id} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
