import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { ModeToggle } from "../components/ui/theme-toggle";

export default function Home() {
  return (
    <div>
      <div className="fixed top-5 right-5 z-50">
        <ModeToggle />
      </div>
      <NavigationMenu>
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
          <NavigationMenuList className="p-4 rounded-4xl shadow-md">
            <NavigationMenuItem>
              <NavigationMenuLink className="">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="">Experience</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="">Projects</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>
  );
}
