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
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div>
        <NavigationMenu>
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[500px] max-w-[90vw]">
            <NavigationMenuList className="px-8 py-4 rounded-4xl border shadow-md shadow-blue-500 flex justify-around w-full">
              <NavigationMenuItem>
                <NavigationMenuLink className="text-xl font-bold">About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-xl font-bold">Experience</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-xl font-bold">Projects</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        </NavigationMenu>
      </div>

      <div className="fixed bottom-5 right-5 z-50">
        <ModeToggle />
      </div>

      <div className="flex flex-col items-center justify-center text-center mb-20">
        <TypewriterEffect words={intro} />
        <p className="mt-4 text-lg px-6">
          I am a passionate developer with experience in building web
          applications.
        </p>
      </div>
    </div>
  );
}
