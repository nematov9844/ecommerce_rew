import BettselletCards from './components/BettselletCards'
import Brands from './components/Brands'
import Feature from './components/Feature'
import Header from './components/Header'
import Hero from './components/Hero'
import WeekProduct from './components/WeekProduct'

function App() {

  return (
    <div className='flex flex-col gap-4  lg:gap-9 w-full'>
    <Header/>
    <Hero/>
    <Brands/>
    <WeekProduct/>
    <BettselletCards/>
    <Feature/>
    </div>
  )
}

export default App
