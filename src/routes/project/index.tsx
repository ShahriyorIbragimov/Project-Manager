import { createFileRoute } from '@tanstack/react-router'
import { SiteHeader } from "@/components/site-header"
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Plus } from 'lucide-react'

export const Route = createFileRoute('/project/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>
            <SiteHeader title="Project" />
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <div className='min-h-36 flex px-4 gap-2'>
                            <div className='h-full'>
                                <Select>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="cmd">CMD</SelectItem>
                                            <SelectItem value="file">File</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Textarea placeholder="Type your message here." />
                        </div>
                        <div className='min-h-36 flex px-4 gap-2'>
                            <Button variant="outline" className='w-full h-full'>
                                <Plus />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
