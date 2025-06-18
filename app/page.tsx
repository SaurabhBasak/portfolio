import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { ModeToggle } from "../components/ui/theme-toggle";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

export default function Home() {

  const intro = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "Saurabh",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Basak.",
      className: "text-blue-500 dark:text-blue-500",
    }
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div>
        <div className="fixed top-5 right-5 z-50">
          <ModeToggle />
        </div>
        <NavigationMenu>
          <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50">
            <NavigationMenuList className="p-4 rounded-4xl border bg-background shadow-md">
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
      <div className="flex flex-col items-center justify-center mt-20 p-4 max-w-2xl">
        <TypewriterEffect words={intro} />
        <p className="mt-4 text-lg">
          I am a passionate developer with experience in building web applications.
        </p>
      </div>
    </div>
  );
}
