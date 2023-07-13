import { useState, useEffect } from 'react'

export const useIsDesktop = () => {
    const [isDesktop, setIsDesktop] = useState(null)

    useEffect(() => {
        if (typeof window !== `undefined`) {
            import(`matchmedia-polyfill`)
                .then(() => {
                    import(`matchmedia-polyfill/matchMedia.addListener`)
                        .then(() => {
                            const match = matchMedia(`(min-width: 768px)`)
                            const changeState = (e) => {
                                setIsDesktop(e.matches)
                            }

                            match.addListener(changeState)

                            setIsDesktop(screen.width >= 768)
                            return () => {
                                match.removeListener(changeState)
                            }
                        })
                        .catch(err => {
                            console.error(err)
                        })
                })
        }
    }, [])

    return { isDesktop }
}
