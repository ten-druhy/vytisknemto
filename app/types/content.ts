export interface NavLink {
  label: string
  to: string
}

export interface NavContent {
  navLinks: NavLink[]
  ctaButton: {
    label: string
    to: string
    icon?: string
  }
  ctaMobileLabel: string
}

export interface FooterColumn {
  label: string
  links: NavLink[]
}

export interface FooterContent {
  tagline: string
  columns: FooterColumn[]
  copyrightSuffix: string
  legalLinks: NavLink[]
}

export interface PricingPlan {
  title: string
  description: string
  price: string
  features: string[]
  cta: string
  to: string
  highlight?: boolean
}

export interface MaterialRow {
  material: string
  priceFrom: string
  unit: string
  note: string
}

export interface MaterialsSection {
  headline: string
  title: string
  description: string
}

export interface ModelingSection {
  headline: string
  title: string
  rate: string
  minimumNote: string
  ctaLabel: string
  ctaTo: string
}

export interface ValueCard {
  icon: string
  title: string
  description: string
}

export interface ProcessStep {
  icon: string
  number: string
  title: string
  description: string
  detail: string
}

export interface TurnaroundSection {
  headline: string
  title: string
  description: string
}

export interface TurnaroundRow {
  category: string
  standard: string
  express: string
  expressAvailable: boolean
}

export interface MaterialCard {
  name: string
  props: string
  color: string
}

export interface SluzbyCtaSection {
  title: string
  description: string
  ctaLabel: string
  ctaTo: string
}
