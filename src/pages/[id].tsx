import { useRouter } from "next/router";
import Header from "@/components/Organisms/Header";
import FetchNews from "@/components/Molecules/News";

const Page = () => {
    const router = useRouter();
    const { id } = router.query;

    switch(id) {
        case "business":
          return (
            <div>
              <header className="fixed w-full top-0">
                <Header name="Simple News"/>
              </header>
              <main className="bg-black mt-20 h-full flex flex-col">
                <div className="mx-12 md:mx-16 lg:mx-24">
                  <FetchNews category="business"/>
                </div>
              </main>
            </div>
          )
        case "technology":
          return (
            <div>
              <header className="fixed w-full top-0">
                <Header name="Simple News" />
              </header>
              <main className="bg-black mt-20 h-full flex flex-col">
                <div className="mx-12 md:mx-16 lg:mx-24">
                  <FetchNews category="technology"/>
                </div>
              </main>
            </div>
          )
        case "entertainment":
            return (
              <div>
                <header className="fixed w-full top-0">
                  <Header name="Simple News" />
                </header>
                <main className="bg-black mt-20 h-full flex flex-col">
                  <div className="mx-12 md:mx-16 lg:mx-24">
                    <FetchNews category="entertainment"/>
                  </div> 
                </main>
              </div>
            )
        case "sports":
            return (
              <div>
                <header className="fixed w-full top-0">
                  <Header name="Simple News" />
                </header>
                <main className="bg-black mt-20 h-full flex flex-col">
                  <div className="mx-12 md:mx-16 lg:mx-24">
                    <FetchNews category="sports" />
                  </div>
                </main>
              </div>
            )
        default:
            return <div>Not Found</div>
    }
}

export default Page

