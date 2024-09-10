import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Label } from "./ui/label";
import { LogOut, Moon, Settings } from "lucide-react";
import { Switch } from "./ui/switch";
import roadmap from "@/assets/roadmap.jpeg";
import { useTheme } from "./theme";
import { useUserStore } from "@/store/user";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = ({type}) => {
  const { user } = useUserStore();
  const { logout } = useAuth0();
  const { theme, setTheme } = useTheme();
  if(!user){
    return null;
  }
  return (
    <div>
      <div className="flex relative items-center justify-between border border-b p-4 sticky">
        <span className="flex gap-2 text-4xl font-extrabold">
          <img
            src={roadmap}
            alt="Skill Navigator"
            className="grid aspect-square w-8 place-content-center"
          />
          Skill Navigator
        </span>
        <h2 className="text-2xl  absolute  left-1/2 -translate-x-1/2  font-bold">Welcome {type}</h2>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-10 w-10 cursor-pointer ring-2 ring-primary ring-offset-2 ring-offset-background">
              <AvatarImage src={user?.picture} alt="avatar" />
              <AvatarFallback>{user?.name}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex gap-2 font-medium">
              <span>{user?.name}</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 font-medium">
              <span>{user?.email}</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex gap-2 font-medium uppercase">
              <span>{user?.role}</span>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
              <div className="flex w-full items-center justify-between">
                <Label
                  htmlFor="theme-toggle"
                  className="flex items-center space-x-2"
                >
                  <Moon className="h-4 w-4" />
                  <span>Dark Mode</span>
                </Label>
                <Switch
                  id="theme-toggle"
                  checked={theme === "dark"}
                  onCheckedChange={(checked) => {
                    checked ? setTheme("dark") : setTheme("light");
                  }}
                />
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex gap-2 font-medium">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="flex gap-2 font-medium focus:text-red-500"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              <LogOut className="h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
