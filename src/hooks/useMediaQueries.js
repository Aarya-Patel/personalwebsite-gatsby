import useMediaQuery from "@material-ui/core/useMediaQuery"

const breakpoints = {
  sm: "600px",
  md: "960px",
  lg: "1280px",
  xl: "1920px",
}

const useMediaQueries = breakpoint => {
  return useMediaQuery(`(max-width: ${breakpoints[breakpoint]})`)
}

export { useMediaQueries }
