import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel,  DropdownMenuSeparator } from './ui/dropdown-menu';
import {  GraduationCap } from 'lucide-react'
import { Button } from './ui/button';
import { DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import DarkMode from '@/DarkMode';
import { Sheet , SheetContent,SheetDescription,SheetHeader,SheetTitle,  SheetTrigger, Label, SheetClose} from './ui/sheet';
const Navbar = () => {
    const user = false;
    return (
        <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
       {/* Desktop */}
       <div className='items-center justify-between hidden h-full gap-10 mx-auto max-w-7xl md:flex'>
       <div className='flex items-center gap-2'>
       <GraduationCap size={"30"}/>
       <h1 className='hidden text-2xl font-extrabold md:block'>LMS Learning</h1>
       </div>
       {/* User icons and dark mode icons */}
       <div className='flex items-center gap-8'>
             {
                user ? (
                    
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                         My Learning
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          Edit Profile
                        </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                         
                         <DropdownMenuItem>Log out</DropdownMenuItem> 
                         <DropdownMenuSeparator />
                         <DropdownMenuItem>Dashboard</DropdownMenuItem>
                         </DropdownMenuContent>
                         
                         </DropdownMenu>
                        
                 
                
                ) : (
                    <div className='flex items-center gap-2'>
                        <Button variant="outline">Login</Button>
                        <Button>Signup</Button>
                     </div>
                )
             }
             <DarkMode/>
       </div>
        </div>
        {/* Mobile device */}
        <MobileNavbar/>
        
        </div>
    )
}

export default Navbar;


const MobileNavbar = () => {
    return (
        Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
}; from "@/components/ui/sheet"
 
export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    )
}