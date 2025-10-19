import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-text-primary placeholder:text-neutral-400 dark:placeholder:text-neutral-500 selection:bg-accent/20 selection:text-black flex h-9 w-full min-w-0 rounded-[0.625rem] border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-bg-2 px-3 py-1 text-base text-text-primary transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2",
        "aria-invalid:ring-destructive/30 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
