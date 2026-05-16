// Country-specific color schemes for visual consistency
export const countryColors = {
  china: {
    primary: 'from-red-600 to-red-400',
    primaryLight: 'bg-red-500/10',
    primaryBorder: 'border-red-500/30',
    primaryText: 'text-red-400',
    primaryHover: 'hover:bg-red-500/20',
    icon: '🇨🇳',
    gradient: 'linear-gradient(135deg, #dc2626 0%, #f87171 100%)'
  },
  malaysia: {
    primary: 'from-emerald-600 to-emerald-400',
    primaryLight: 'bg-emerald-500/10',
    primaryBorder: 'border-emerald-500/30',
    primaryText: 'text-emerald-400',
    primaryHover: 'hover:bg-emerald-500/20',
    icon: '🇲🇾',
    gradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)'
  },
  turkey: {
    primary: 'from-cyan-600 to-cyan-400',
    primaryLight: 'bg-cyan-500/10',
    primaryBorder: 'border-cyan-500/30',
    primaryText: 'text-cyan-400',
    primaryHover: 'hover:bg-cyan-500/20',
    icon: '🇹🇷',
    gradient: 'linear-gradient(135deg, #0891b2 0%, #22d3ee 100%)'
  }
}

export function getCountryColors(country: string) {
  return countryColors[country as keyof typeof countryColors] || countryColors.china
}
