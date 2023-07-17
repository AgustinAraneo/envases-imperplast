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
  return <div className='relative w-full h-screen bg-white'><p><FaSpinner size={50} color="black" className='absolute left-0 right-0 mx-auto text-5xl text-black bg-white animate-spin top-60'/></p></div>
}

export default Index