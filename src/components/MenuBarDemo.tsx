import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarDemo() {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className="bg-red-600">COCKTAILS</MenubarTrigger>
                <MenubarContent>
                <MenubarItem>
                    APEROL SPRITZ
                </MenubarItem>
                <MenubarItem>
                    CANDY LADY
                </MenubarItem>
                <MenubarItem>
                    ANGEL'S KISS (bellini)
                </MenubarItem>
                <MenubarItem>
                    BLUE DREAM (Havana)
                </MenubarItem>
                <MenubarItem>
                    PORNSTAR MARTINI
                </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="bg-sky-600">MOCKTAILS</MenubarTrigger>
                <MenubarContent>
                <MenubarItem>
                    CĂPȘUNĂ + ANANAS – WILD PASSION
                </MenubarItem>
                <MenubarItem>
                    LEMONGRASS + MARACUIA - LEMONGLOW
                </MenubarItem>
                <MenubarItem>
                    ZMEURĂ + GRAPEFRUIT – PINK GRAPEFRUIT
                </MenubarItem>
                <MenubarItem>
                    LYCHEE + MARACUIA - EXOTIC LYCHEE
                </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="bg-lime-200">SHOTS</MenubarTrigger>
                <MenubarContent>
                <MenubarItem>
                    B-52
                </MenubarItem>
                <MenubarItem>
                    HEROSHIMA
                </MenubarItem>
                <MenubarItem>
                    GREEN MEXICAN
                </MenubarItem>
                <MenubarItem>
                    TEQUILA SUNRISE SHOT – dream shot
                </MenubarItem>
                <MenubarItem>
                    BLUE KAMIKAZE
                </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
