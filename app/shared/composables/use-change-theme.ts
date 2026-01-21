enum ThemesVariant {
  Light = 'light',
  Dark = 'dark',
}

const themesColors: Record<ThemesVariant, string> = {
  [ThemesVariant.Light]: '#faf4f2',
  [ThemesVariant.Dark]: '#0d1117',
}

function useChangeTheme() {
  const theme = useColorMode()

  function applyToHead(value: ThemesVariant) {
    useHead({
      meta: [
        { name: 'theme-color', content: themesColors[value] },
      ],
    })
  }

  function getHeadThemeColor() {
    return themesColors[theme.value as ThemesVariant] || themesColors[ThemesVariant.Light]
  }

  const setTheme = (value: ThemesVariant) => {
    theme.preference = value
    applyToHead(value)
  }

  return {
    theme,
    getHeadThemeColor,
    setTheme,
  }
}

export { useChangeTheme }
export { ThemesVariant }
