import { getCountryColors } from "@/lib/country-colors"

interface CountryIconProps {
  country: string
  size?: number
  showLabel?: boolean
  className?: string
}

export function CountryIcon({ country, size = 24, showLabel = false, className = "" }: CountryIconProps) {
  const colors = getCountryColors(country)
  const icons: Record<string, string> = {
    china: "🇨🇳",
    malaysia: "🇲🇾",
    turkey: "🇹🇷"
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span 
        className={`bg-gradient-to-r ${colors.primary} p-2 rounded-full`}
        style={{ fontSize: `${size / 2}px` }}
      >
        {icons[country] || icons.china}
      </span>
      {showLabel && (
        <span className={`text-sm font-medium bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent capitalize`}>
          {country}
        </span>
      )}
    </div>
  )
}
