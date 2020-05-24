const getThemeColor = () => {
    const theme = typeof window !== "undefined" && window.__theme

    if (theme === "light") return "#62b0d3"
    if (theme === "dark") return "#272e39"
}

export default getThemeColor