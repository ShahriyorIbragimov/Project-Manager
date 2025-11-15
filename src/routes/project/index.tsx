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
import { Plus, Check } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/project/')({
    component: RouteComponent,
})

function RouteComponent() {
    const [inputs, setInputs] = useState<{ id: string; type?: string; text?: string }[]>(
        () => [{ id: String(Date.now()), type: undefined, text: '' }],
    )

    function addInput() {
        setInputs((prev) => [...prev, { id: String(Date.now()), type: undefined, text: '' }])
    }

    function updateInput(id: string, patch: Partial<{ type?: string; text?: string }>) {
        setInputs((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)))
    }

    function handleSave() {
        console.log(inputs.map(({ id, type, text }) => ({ id, type, text })))
    }

    return (
        <>
            <SiteHeader title="Project" />
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 p-4 md:gap-6 md:py-6">
                        {inputs.map((it) => (
                            <div key={it.id} className="flex gap-2">
                                <div className="h-full">
                                    <Select value={it.type} onValueChange={(val) => updateInput(it.id, { type: val })}>
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
                                <Textarea
                                    placeholder="Type your message here."
                                    value={it.text}
                                    onChange={(e) => updateInput(it.id, { text: (e.target as HTMLTextAreaElement).value })}
                                />
                                <div>
                                    <Button className='h-full'>
                                        <Check />
                                    </Button>
                                </div>
                            </div>
                        ))}
                        <div className="flex gap-2">
                            <Button variant="outline" className="w-full h-full" onClick={addInput}>
                                <Plus />
                            </Button>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button onClick={handleSave}>Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
