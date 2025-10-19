import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-neutral-400 dark:placeholder:text-neutral-500 selection:bg-accent/20 selection:text-black flex field-sizing-content min-h-16 w-full rounded-[0.625rem] border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-bg-2 px-3 py-2 text-base text-text-primary shadow-sm transition-all outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 aria-invalid:ring-destructive/30 aria-invalid:border-destructive disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
