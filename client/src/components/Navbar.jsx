import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel,  DropdownMenuSeparator } from './ui/dropdown-menu';
import {  GraduationCap, Menu } from 'lucide-react'
import { Button } from './ui/button';
import { DropdownMenuTrigger } from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import DarkMode from '@/DarkMode';
import { Sheet , SheetClose, SheetContent,SheetFooter,SheetHeader,SheetTitle,  SheetTrigger} from './ui/sheet';
import { Separator } from '@radix-ui/react-dropdown-menu';
const Navbar = () => {
    const user = true;
     return (
        <div className='h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10'>
       {/* Desktop */}
       <div className='items-center justify-between hidden h-full gap-10 mx-auto max-w-7xl md:flex'>
       <div className='flex items-center gap-2'>
       <GraduationCap size={"30"}/>
       <h1 className='hidden text-2xl font-extrabold md:block'>LMS_Learning</h1>
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
        <div className='flex items-center justify-between h-full px-4 md:hidden'>
       <h1 className='text-2xl font-extrabold'>LMS_Learning</h1>
        <MobileNavbar/>
        </div>
       
        </div>
    )
}

export default Navbar;



 const MobileNavbar = () => {
  const role = "instructor"
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' className='bg-gray-200 rounded-full hover:bg-gray-200' variant="outline"><Menu/></Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center justify-between mt-2">
          <SheetTitle>LMS_Learning</SheetTitle>
         <DarkMode/> 
        </SheetHeader>
        <Separator className='mr-2'/>
       <nav className='flex-col space-y-4'>
        <span>My Learning</span> 
        <Separator className='mr-2'/>
        <span>Edit Profile</span>
        <p>Log Out</p>
       </nav>
       
       {role === "instructor" && (
          <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Dashboard</Button>
          </SheetClose>
        </SheetFooter>
        )
       }
        </SheetContent>
        </Sheet>     
  );
 };
  
    
