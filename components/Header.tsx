'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ExternalLink as ExternalLinkIcon } from 'lucide-react'

export default function Header() {
  const [isSSR, setIsSSR] = useState(true)

  useEffect(() => {
    setIsSSR(false)
  }, [])

  return (
    <header className="mb-2">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="https://read.cv/jaycedotbin" legacyBehavior passHref>
              <NavigationMenuLink
                rel="noopener noreferrer"
                target="_blank"
                className={navigationMenuTriggerStyle()}
              >
                Resume
                <ExternalLinkIcon className="pb-1 w-4 h-4" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' && !isSSR && (
            <NavigationMenuItem>
              <Link href="/studio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Studio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
