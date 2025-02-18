import RichTextEditor from "@/components/RichTextEditor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";


const CourseTab = () => {
    const [input, setInput] = useState({
        courseTitle: "",
        subtitle: "",
        description: "",
        category: "",
        courseLevel: "",
        coursePrice: "",
        courseThumbnail: "",
    });
    const changeEventHandler = (e) => {
      const {name, value} = e.target;
      setInput({...input, [name]:value});
    };
    
  const isPublished = false;
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle>Basic Course Information</CardTitle>
          <CardDescription>
            Make changes to your courses here. Click save when you`re done.
          </CardDescription>
        </div>
        <div className="space-x-2">
          <Button variant="outline">
            {isPublished ? "Unpublished" : "Published"}
          </Button>
          <Button>Remove Course</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-5 space-y-4">
            <div>
                <Label>Title</Label>
                <Input
                type="text"
                name="courseTitle"
                value={input.courseTitle}
                onChange={ changeEventHandler}
                placeholder="Ex. Fullstack developer"
                />
            </div>
            <div>
                <Label>Subtitle</Label>
                <Input
                type="text"
                name="subtitle"
                value={input.subTitle}
                onChange={ changeEventHandler}
                placeholder="Ex. Become a fullstack developer in to 3 months"
                />
            </div>
            <div>
                <Label>Description</Label>
               <RichTextEditor input={input} setInput={setInput}/>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseTab;
