"use client"

import Link from 'next/link'
import { UserPlus, Briefcase, Radio, Zap } from 'lucide-react'
import type { ComponentType } from 'react'

import { useTranslations } from 'next-intl'

interface Action {
  labelKey: string
  href: string
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
}

const ACTIONS: Action[] = [
  { labelKey: 'newContact', href: '/contacts', icon: UserPlus },
  { labelKey: 'newDeal', href: '/pipelines', icon: Briefcase },
  { labelKey: 'newBroadcast', href: '/broadcasts/new', icon: Radio },
  { labelKey: 'newAutomation', href: '/automations/new', icon: Zap },
]

export function QuickActions() {
  const t = useTranslations('Dashboard.quickActions')
  
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {ACTIONS.map((a) => {
        const Icon = a.icon
        return (
          <Link
            key={a.href}
            href={a.href}
            className="group flex flex-col items-start rounded-2xl border border-border/40 bg-card p-8 transition-all hover:border-border/80 hover:shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary/70 text-foreground transition-transform group-hover:scale-105">
              <Icon className="h-5 w-5 text-foreground/80" strokeWidth={1.5} />
            </div>
            <span className="mt-6 text-[17px] font-bold tracking-tight text-foreground">{t(a.labelKey as string)}</span>
            <span className="mt-1 text-[13px] font-medium text-muted-foreground/60">Shortcut</span>
          </Link>
        )
      })}
    </div>
  )
}
