// Available color themes with proper Tailwind classes
export const availableThemes = {
  lavender: {
    name: "Lavender Dreams",
    primary: "violet-400",
    secondary: "violet-300",
    accent: "violet-500",
    light: "violet-200",
    lighter: "violet-100"
  },
  rose: {
    name: "Rose Garden", 
    primary: "rose-400",
    secondary: "rose-300",
    accent: "rose-500",
    light: "rose-200",
    lighter: "rose-100"
  },
  ocean: {
    name: "Ocean Breeze",
    primary: "sky-400",
    secondary: "sky-300", 
    accent: "sky-500",
    light: "sky-200",
    lighter: "sky-100"
  },
  mint: {
    name: "Mint Fresh",
    primary: "emerald-400",
    secondary: "emerald-300",
    accent: "emerald-500", 
    light: "emerald-200",
    lighter: "emerald-100"
  },
  sunset: {
    name: "Golden Sunset",
    primary: "amber-400",
    secondary: "amber-300",
    accent: "amber-500",
    light: "amber-200", 
    lighter: "amber-100"
  },
  cosmos: {
    name: "Purple Cosmos", 
    primary: "purple-400",
    secondary: "purple-300",
    accent: "purple-500",
    light: "purple-200",
    lighter: "purple-100"
  }
};

// Generate theme object based on selected theme and mode
export const createTheme = (themeKey = 'lavender', isDark = true) => {
  const colors = availableThemes[themeKey];
  
  if (isDark) {
    return {
      // Backgrounds
      bg: 'bg-gradient-to-br from-gray-900 via-black to-gray-900',
      cardBg: 'bg-gray-800/70 backdrop-blur-sm',
      sidebarBg: 'bg-gradient-to-b from-gray-900 to-gray-800',
      mainBg: 'bg-gradient-to-br from-black via-gray-950 to-black',
      sectionBg: 'bg-gray-900/40',
      inputBg: 'bg-gray-700/70',
      
      // Borders
      cardBorder: 'border-gray-700',
      cardHoverBorder: `hover:border-${colors.primary}`,
      inputBorder: 'border-gray-600',
      footerBorder: 'border-gray-700',
      sidebarBorder: `border-${colors.primary}/30`,
      
      // Text colors
      text: 'text-white',
      textSecondary: 'text-gray-400',
      textAccent: `text-${colors.primary}`,
      
      // Interactive states
      cardHoverBg: 'hover:bg-gray-800/80',
      inputFocusBg: 'focus:bg-gray-700',
      inputFocusBorder: `focus:border-${colors.primary}`,
      
      // Theme colors
      primary: `text-${colors.primary}`,
      primaryBg: `bg-${colors.primary}`,
      secondary: `text-${colors.secondary}`,
      secondaryBg: `bg-${colors.secondary}`,
      accent: `text-${colors.accent}`,
      accentBg: `bg-${colors.accent}`,
      light: `text-${colors.light}`,
      lighter: `text-${colors.lighter}`,
      
      // Gradients
      gradient: `from-${colors.secondary} to-${colors.primary}`,
      buttonGradient: `from-${colors.primary} to-${colors.accent}`,
      cardGradient: `from-${colors.primary}/25 to-${colors.secondary}/25`,
      sidebarGradient: `from-${colors.primary}/40 via-${colors.secondary}/30 to-${colors.light}/40`,
      
      // Hover effects
      hoverPrimary: `hover:text-${colors.accent}`,
      hoverBg: `hover:bg-${colors.primary}/15`
    };
  } else {
    return {
      // Backgrounds
      bg: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
      cardBg: 'bg-white/90 backdrop-blur-sm',
      sidebarBg: `bg-gradient-to-br from-${colors.lighter}/90 via-${colors.light}/70 to-${colors.secondary}/80`,
      mainBg: 'bg-gradient-to-br from-gray-50 via-white to-gray-100',
      sectionBg: 'bg-white/60',
      inputBg: 'bg-white/80',
      
      // Borders
      cardBorder: 'border-gray-200',
      cardHoverBorder: `hover:border-${colors.primary}`,
      inputBorder: 'border-gray-300',
      footerBorder: 'border-gray-200',
      sidebarBorder: `border-${colors.primary}/30`,
      
      // Text colors
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textAccent: `text-${colors.accent}`,
      
      // Interactive states
      cardHoverBg: 'hover:bg-gray-50/90',
      inputFocusBg: 'focus:bg-white',
      inputFocusBorder: `focus:border-${colors.primary}`,
      
      // Theme colors
      primary: `text-${colors.primary}`,
      primaryBg: `bg-${colors.primary}`,
      secondary: `text-${colors.secondary}`,
      secondaryBg: `bg-${colors.secondary}`,
      accent: `text-${colors.accent}`,
      accentBg: `bg-${colors.accent}`,
      light: `text-${colors.light}`,
      lighter: `text-${colors.lighter}`,
      
      // Gradients
      gradient: `from-${colors.light} to-${colors.primary}`,
      buttonGradient: `from-${colors.primary} to-${colors.accent}`,
      cardGradient: `from-${colors.primary}/25 to-${colors.secondary}/25`,
      sidebarGradient: `from-${colors.lighter} via-${colors.light} to-${colors.secondary}`,
      
      // Hover effects
      hoverPrimary: `hover:text-${colors.accent}`,
      hoverBg: `hover:bg-${colors.primary}/10`
    };
  }
};