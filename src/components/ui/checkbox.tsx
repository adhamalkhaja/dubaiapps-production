"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-neutral-300 dark:border-neutral-700 bg-white dark:bg-bg-2 data-[state=checked]:bg-accent data-[state=checked]:text-white data-[state=checked]:border-accent focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 aria-invalid:ring-destructive/30 aria-invalid:border-destructive size-4 shrink-0 rounded-[0.25rem] border shadow-sm transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
