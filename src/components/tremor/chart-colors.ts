// ============================================================
// Tremor chartColors [v0.1.0] — copied from tremorlabs/tremor.
//
// The Tremor charts source uses these helpers to map a category
// name to a stable Tailwind color class (`bg-violet-500`,
// `fill-blue-500`, …). Tremor's "Raw" distribution is copy-paste
// — there is no `@tremor/raw` npm package — so the canonical
// approach is to vendor the file unchanged and customise locally.
//
// Source: https://github.com/tremorlabs/tremor/blob/main/src/utils/chartColors.ts
// License: Apache 2.0 (Tremor)
// ============================================================

export type ColorUtility = "bg" | "stroke" | "fill" | "text"

export const chartColors = {
  blue: {
    bg: "bg-foreground",
    stroke: "stroke-foreground",
    fill: "fill-foreground",
    text: "text-foreground",
  },
  emerald: {
    bg: "bg-muted-foreground",
    stroke: "stroke-muted-foreground",
    fill: "fill-muted-foreground",
    text: "text-muted-foreground",
  },
  violet: {
    bg: "bg-foreground",
    stroke: "stroke-foreground",
    fill: "fill-foreground",
    text: "text-foreground",
  },
  amber: {
    bg: "bg-border",
    stroke: "stroke-border",
    fill: "fill-border",
    text: "text-border",
  },
  gray: {
    bg: "bg-muted",
    stroke: "stroke-muted-foreground",
    fill: "fill-muted-foreground",
    text: "text-muted-foreground",
  },
  cyan: {
    bg: "bg-foreground",
    stroke: "stroke-foreground",
    fill: "fill-foreground",
    text: "text-foreground",
  },
  pink: {
    bg: "bg-muted-foreground",
    stroke: "stroke-muted-foreground",
    fill: "fill-muted-foreground",
    text: "text-muted-foreground",
  },
  lime: {
    bg: "bg-muted",
    stroke: "stroke-muted",
    fill: "fill-muted",
    text: "text-muted",
  },
  fuchsia: {
    bg: "bg-border",
    stroke: "stroke-border",
    fill: "fill-border",
    text: "text-border",
  },
} as const satisfies {
  [color: string]: {
    [key in ColorUtility]: string
  }
}

export type AvailableChartColorsKeys = keyof typeof chartColors

export const AvailableChartColors: AvailableChartColorsKeys[] = Object.keys(
  chartColors,
) as Array<AvailableChartColorsKeys>

export const constructCategoryColors = (
  categories: string[],
  colors: AvailableChartColorsKeys[],
): Map<string, AvailableChartColorsKeys> => {
  const categoryColors = new Map<string, AvailableChartColorsKeys>()
  categories.forEach((category, index) => {
    categoryColors.set(category, colors[index % colors.length])
  })
  return categoryColors
}

export const getColorClassName = (
  color: AvailableChartColorsKeys,
  type: ColorUtility,
): string => {
  const fallbackColor = {
    bg: "bg-muted",
    stroke: "stroke-muted-foreground",
    fill: "fill-muted-foreground",
    text: "text-muted-foreground",
  }
  return chartColors[color]?.[type] ?? fallbackColor[type]
}
