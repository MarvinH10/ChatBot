import { SendIcon, SparklesIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function Chatbot() {
  return (
    <div className="flex flex-col h-[80vh] w-full max-w-[672px] mx-auto bg-background rounded-lg shadow-lg">
      <div className="flex-1 overflow-auto p-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 border border-gray-700 rounded-full">
              <SparklesIcon className="size-5 text-primary" fill="currentColor" />
            </div>
            <div className="bg-muted rounded-lg p-3 max-w-[70%]">
              <p className="text-sm text-muted-foreground">Hello! I`m an AI assistant. How can I help you today?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary rounded-lg p-3 max-w-[70%]">
              <p className="text-sm text-primary-foreground">
                Hi there! I have a few questions about your product features.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted/50 px-4 py-3 flex items-center gap-2">
        <div className="relative flex-1">
          <Textarea
            placeholder="Type your message..."
            className="rounded-lg border-none focus:ring-0 pr-12 min-h-[64px]"
            rows={2}
          />
          <Button type="submit" size="icon" className="absolute bottom-5 right-3 rounded-full">
            <SendIcon className="w-5 h-5" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  )
}