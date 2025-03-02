import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 text-center">
      <div className="space-y-6 max-w-md mx-auto">
        <FileQuestion className="h-24 w-24 mx-auto text-muted-foreground" />

        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter">404 - Page Not Found</h1>
          <p className="text-muted-foreground">Oops! The page you're looking for doesn't exist or has been moved.</p>
        </div>

        <Button asChild className="mt-6">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}

