import { ArrowDown, ArrowUp, Minus } from 'lucide-react'
import type { ComponentType } from 'react'
import { cn } from '@/lib/utils'

interface MetricCardProps {
  title: string
  /** Pre-formatted value for display (e.g. "42" or "$1,250"). */
  value: string
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  /**
   * Delta-mode secondary row: arrow + delta text. Omit when the metric
   * doesn't have a sensible comparison (e.g. total pipeline value).
   */
  delta?: {
    /** Positive / negative / zero drives arrow + color. */
    sign: number
    /** Pre-formatted delta, e.g. "+3 vs yesterday". */
    label: string
  }
  /** Used instead of `delta` when the metric has a static subtitle. */
  subtitle?: string
}

export function MetricCard({ title, value, icon: Icon, delta, subtitle }: MetricCardProps) {
  return (
    <div className="rounded-3xl border border-transparent bg-card p-8 transition-all hover:shadow-sm hover:bg-secondary/40">
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[#86868B]">{title}</p>
        <Icon className="h-[18px] w-[18px] text-muted-foreground/60 flex-shrink-0" strokeWidth={1.5} />
      </div>
      <p className="mt-5 text-4xl sm:text-[42px] font-extrabold tracking-tight leading-none text-foreground">
        {value}
      </p>
      {delta ? <DeltaRow sign={delta.sign} label={delta.label} /> : subtitle ? (
        <p className="mt-3 text-[13px] font-medium text-muted-foreground/60">{subtitle}</p>
      ) : null}
    </div>
  )
}

function DeltaRow({ sign, label }: { sign: number; label: string }) {
  const tone =
    sign > 0
      ? 'text-emerald-500'
      : sign < 0
      ? 'text-rose-500'
      : 'text-muted-foreground/60'
  const Arrow = sign > 0 ? ArrowUp : sign < 0 ? ArrowDown : Minus
  return (
    <div className={cn('mt-3 flex items-center gap-1 text-[13px] font-semibold', tone)}>
      <Arrow className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
      <span className="tabular-nums">{label}</span>
    </div>
  )
}
