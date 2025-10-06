import { buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  FOR_RENT_PROPERTIES,
  FOR_SALE_PROPERTIES,
  PROPERTIES_TYPES,
} from "./constant";
import { LuChevronRight } from "react-icons/lu";

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/properties"
            title="Semua Properti"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            Properti
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Dijual</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-fit flex flex-col">
                {FOR_SALE_PROPERTIES.map((prop) => (
                  <NavigationMenuLink
                    key={prop.value}
                    href={prop.value}
                    className={cn(
                      buttonVariants({ size: "lg", variant: "ghost" }),
                      "justify-between w-full gap-2",
                    )}
                  >
                    {prop.key}
                    <LuChevronRight />
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Disewa</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-fit flex flex-col">
                {FOR_RENT_PROPERTIES.map((prop) => (
                  <NavigationMenuLink
                    key={prop.value}
                    href={prop.value}
                    className={cn(
                      buttonVariants({ size: "lg", variant: "ghost" }),
                      "justify-between w-full gap-2",
                    )}
                  >
                    {prop.key}
                    <LuChevronRight />
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tipe</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-fit flex flex-col">
                {PROPERTIES_TYPES.map((prop) => (
                  <NavigationMenuLink
                    key={prop.value}
                    href={prop.value}
                    className={cn(
                      buttonVariants({ size: "lg", variant: "ghost" }),
                      "justify-between w-full gap-2",
                    )}
                  >
                    {prop.key}
                    <LuChevronRight />
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/agents"
            title="Agen Properti"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            Agen
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/blog"
            title="Tips dan Trik Properti"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/franchise"
            title="Franchise Properti PrimePro"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            Franchise
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            title="Tentang PrimePro"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            Tentang
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
