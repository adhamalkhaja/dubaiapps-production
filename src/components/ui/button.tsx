import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-accent/30 focus-visible:ring-offset-2 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-white hover:bg-accent/90 rounded-[0.625rem]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 rounded-[0.625rem]",
        outline:
          "border border-neutral-300 bg-white dark:bg-bg-2 hover:bg-neutral-100 dark:hover:bg-bg-3 text-text-primary rounded-[0.625rem]",
        secondary:
          "bg-neutral-100 dark:bg-bg-2 text-text-primary hover:bg-neutral-200 dark:hover:bg-bg-3 rounded-[0.625rem]",
        ghost:
          "hover:bg-neutral-100 dark:hover:bg-bg-3 text-text-primary rounded-[0.625rem]",
        link: "text-text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
