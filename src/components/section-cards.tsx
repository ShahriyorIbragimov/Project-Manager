import {
  Atom,
  Check
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "@tanstack/react-router"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Link to="/project">
        <Card className="@container/card hover:cursor-pointer">
          <CardHeader>
            <CardTitle>
              <Atom size="96" />
            </CardTitle>
            <CardAction>
              <Badge variant="default" className="bg-green-600">
                <Check />
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.4">
            <div className="text-2xl font-bold">
              Python 3.14.0
            </div>
            <div className="text-muted-foreground">
              Quick venv. environment setup.
            </div>
          </CardFooter>
        </Card>
      </Link>
    </div>
  )
}
