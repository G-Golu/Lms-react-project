import { AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "lucide-react";

function Course() {
  return (
    <Card className="overflow-hidden transition-all duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-2xl dark:bg-gray-800 hover:scale-105">
      <div className="relative ">
        <img
          src="https://www.excelptp.com/wp-content/uploads/2023/03/Flutter-Development-Course.jpg"
          alt="course"
          className="object-cover w-full rounded-t-lg h-36 "
        />
      </div>
      <CardContent className="px-5 py-4 space-y-3">
        <h1 className="text-lg font-bold truncate hover:underline">
          Android Full Complete Course in Hindi 2025
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="w-8 h-8 ">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-sm font-medium">Golu Kumar</h1>
          </div>
         <Badge className={"px-8 py-3 text-xs text-white bg-blue-600 rounded-full"}> 
         Advance
          </Badge>
        </div>
        <div className="text-lg font-bold ">
            <span>₹499</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default Course;
