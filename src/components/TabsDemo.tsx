import { AppWindowIcon, CodeIcon, Martini } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="barMobil">
            <TabsList className="h-20 w-full">
                <TabsTrigger value="barMobil" className="">
                            <Martini />
                </TabsTrigger>
                <TabsTrigger value="cabinaFoto" className="">
                            <Martini />
                </TabsTrigger>
            </TabsList>
            <TabsContent value="barMobil">
                <Card>
                        Bar mobil
                </Card>
            </TabsContent>
            <TabsContent value="cabinaFoto">
                <Card>
                    Cabina Foto
                </Card>
            </TabsContent>
        </Tabs>
    </div>
  )
}
