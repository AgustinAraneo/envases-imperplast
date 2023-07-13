import Prueba from '@/components/desktop/Prueba'
import Home from '@/components/mobile/Home'
import { useIsDesktop } from '../hooks/useIsDesktop'
import { FaSpinner } from 'react-icons/fa'


const Index = () => {
  const { isDesktop } = useIsDesktop()

  if (isDesktop) {
    return <Prueba />
  } else if (isDesktop === false) {
    return <Home />
  }
  return <p><FaSpinner size={50} color="grey" className='animate-spin mx-auto mt-[30rem] bg-white text-black text-5xl' /></p>
}

export default Index