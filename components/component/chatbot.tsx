/**
 * v0 by Vercel.
 * @see https://v0.dev/t/T4ttFYxxGtL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Chatbot() {
  return (
    <div className="flex flex-col h-full max-h-[600px] w-full max-w-[600px] mx-auto bg-background rounded-lg shadow-lg">
      <div className="flex-1 overflow-auto p-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-lg p-3 max-w-[70%]">
              <p className="text-sm text-muted-foreground">Hello! I'm an AI assistant. How can I help you today?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary rounded-lg p-3 max-w-[70%]">
              <p className="text-sm text-primary-foreground">
                Hi there! I have a few questions about your product features.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-lg p-3 max-w-[70%]">
              <p className="text-sm text-muted-foreground">Sure, I'd be happy to help! What would you like to know?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary rounded-lg p-3 max-w-[70%]">
              <p className="text-sm text-primary-foreground">Can you tell me more about the integration options?</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-lg p-3 max-w-[70%]">
              <p className="text-sm text-muted-foreground">
                Absolutely! Our platform offers a variety of integration options, including APIs, webhooks, and
                pre-built integrations with popular tools. I'd be happy to go into more detail on the specific options
                that might work best for your needs.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary rounded-lg p-3 max-w-[70%]">
              <p className="text-sm text-primary-foreground">
                That sounds great, I'd love to learn more. Can you share some information on the pricing as well?
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="w-8 h-8 border">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <div className="bg-muted rounded-lg p-3 max-w-[70%]">
              <p className="text-sm text-muted-foreground">
                Absolutely, our pricing is designed to be flexible and scalable to fit the needs of businesses of all
                sizes. We offer a range of subscription plans starting at $19 per month for our basic plan, with
                additional features and support available in our higher-tier plans. I'd be happy to discuss the specific
                details that would work best for your use case.
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
          <Button type="submit" size="icon" className="absolute bottom-3 right-3 rounded-full">
            <SendIcon className="w-5 h-5" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}