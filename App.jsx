import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"


function App() {
  

  return (
    <>
      <div className="bg-yellow-100 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10">
      <Header/>
      <Body/>
      <Footer/>
      
      </div>
    </>
  )
}

export default App
