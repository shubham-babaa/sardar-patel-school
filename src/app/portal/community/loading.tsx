import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, UserPlus, Calendar } from "lucide-react"

export default function CommunityLoading() {
  return (
    <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
          <Skeleton className="h-10 w-full sm:w-64" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      <Tabs defaultValue="directory" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="directory" className="flex items-center gap-1" disabled>
            <Users className="h-4 w-4 mr-1 hidden sm:inline" />
            Directory
          </TabsTrigger>
          <TabsTrigger value="groups" className="flex items-center gap-1" disabled>
            <UserPlus className="h-4 w-4 mr-1 hidden sm:inline" />
            Groups
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center gap-1" disabled>
            <Calendar className="h-4 w-4 mr-1 hidden sm:inline" />
            Events
          </TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div>
                          <Skeleton className="h-5 w-32 mb-1" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                      <Skeleton className="h-5 w-20" />
                    </div>
                  </CardHeader>
                  <CardFooter className="pt-2 flex justify-between">
                    <Skeleton className="h-8 w-20" />
                    <Skeleton className="h-8 w-24" />
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

