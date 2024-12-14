import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, MoreVertical } from "lucide-react"
import { Id } from "../../../convex/_generated/dataModel"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface DocumentMenuProps {
    documentId: Id<"documents">;
    title: string;
    onNewTab: (id: Id<"documents">) => void;
}

export const DocumentMenu = ({ documentId, title, onNewTab }: DocumentMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreVertical className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    onClick={() => onNewTab(documentId)}
                >
                    <ExternalLinkIcon className="size-4 mr-2" />
                    Open in a new Tab
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}