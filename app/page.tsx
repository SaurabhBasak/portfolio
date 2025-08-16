import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import { ModeToggle } from "../components/ui/theme-toggle";
import { Timeline } from "../components/ui/timeline";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { intro, timelineData } from "../lib/constants";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <NavigationMenu>
          <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[500px] max-w-[90vw]">
            <NavigationMenuList className="px-8 py-4 rounded-4xl border shadow-md shadow-blue-500 flex justify-around w-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
              <NavigationMenuItem>
                <NavigationMenuLink className="text-xl font-bold">
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-xl font-bold">
                  Experience
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-xl font-bold">
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        </NavigationMenu>
      </div>

      <div className="fixed bottom-5 right-5 z-50">
        <ModeToggle />
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-40 sm:mt-56 md:mt-72">
        <TypewriterEffect words={intro} />
        <p className="mt-4 text-lg px-6">
          I am just a passionate developer who loves to create.
        </p>
      </div>

      <div id="socials" className="mt-20 sm:mt-20 md:mt-32">
        <ul className="flex justify-center space-x-4">
          <li>
            <a
              href="https://github.com/saurabhbasak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-500 hover:underline group relative flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 inline-block"
              >
                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
              </svg>
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                Github
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saurabhbasak/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-500 hover:underline group relative flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                fill="currentColor"
                className="w-10 h-10 inline-block"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
              <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 rounded bg-gray-800 text-white text-sm opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap z-10">
                LinkedIn
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-28">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className="w-15 h-15 text-blue-500 dark:text-blue-500 animate-bounce"
          >
            <path d="m12 17.586-7.293-7.293-1.414 1.414L12 20.414l8.707-8.707-1.414-1.414L12 17.586z" />
            <path d="m20.707 5.707-1.414-1.414L12 11.586 4.707 4.293 3.293 5.707 12 14.414l8.707-8.707z" />
          </svg>
        </a>
      </div>

      <div className="mt-10">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}
