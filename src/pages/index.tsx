import Header from "@/components/Organisms/Header"
import TokyoWeather from "@/components/Molecules/Weather"
import FetchNews from "@/components/Molecules/FetchNews"
import TopicsNews from "@/components/Molecules/Topics"


// tailwind CSS スマホ→タブレット→パソコンの順で書いた方が良い
const HomePage = () => {
  return (
    <div>
      <header className="fixed w-full h-20 top-0">
        <Header name="Simple News" />
      </header>
      <main className="bg-black mt-20 h-full flex flex-col lg:flex-row">
        <div className="mx-12 md:mx-16 lg:mx-24">
          <FetchNews category="general" />
        </div>
        <div className="mx-12 md:mx-16 lg:mx-24 mt-8">
          <TokyoWeather />
          <div className="my-4">
            <TopicsNews keyword="仮想通貨"/>
          </div>          
        </div>
      </main>
    </div>
  )
}

export default HomePage