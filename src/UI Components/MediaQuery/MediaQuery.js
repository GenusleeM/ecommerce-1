import { useMediaQuery } from 'react-responsive'



export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767, orientation: 'portrait'  })
  return isMobile ? children : null
}
export const MobileLandscape = ({ children }) => {
  const isNotMobile = useMediaQuery({ maxWidth: 767, orientation: 'landscape' })
  return isNotMobile ? children : null
}