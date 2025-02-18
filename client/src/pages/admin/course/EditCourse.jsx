import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CourseTab from "./CourseTab";

const EditCourse = () => {
  return (
    <div className="flex-1 mt-4">
      <div className="flex items-center justify-between mb-10">
        <h1 className="mt-8 text-xl font-border-l-muted-foreground">
          Add detail information regarding course
        </h1>
        <Link to="lecture">
          <Button className="mt-4 hover:text-blue-600" variant="link">Go to lecture page</Button>
        </Link>
      </div>
      <CourseTab/>
    </div>
  );
};

export default EditCourse;
