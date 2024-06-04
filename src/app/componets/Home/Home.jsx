'use client'
import SliderbarPage from "../Sliderbar/page";
import TopCardmenuPage from "../TopCardmenu/page";
import TopAiToolsPage from "../TopAiTools/page";
import MostSavedToolsPage from "../MostSavedTools/page";
import NewsPage from "../News/page";
import TopFreeToolsPage from "../TopFreeTools/page";
import BusinessToolsPage from "../BusinessTools/page";
import ProductivityToolsPage from "../ProductivityTools/page";
import AutomationToolsPage from "../AutomationTools/page";


function Home() {
  return (
    <>
      <div className="dark:bg-dark-black">
        <div className='py-10'>
          <div className='flex'>
            <div className='hidden lg:block lg:w-2/12'>
              <SliderbarPage></SliderbarPage>
            </div>
            <div className='w-full lg:w-10/12 reletive'>
              <TopCardmenuPage></TopCardmenuPage>
              <TopAiToolsPage></TopAiToolsPage>
              <MostSavedToolsPage></MostSavedToolsPage>
              <NewsPage></NewsPage>
              <TopFreeToolsPage></TopFreeToolsPage>
              <BusinessToolsPage></BusinessToolsPage>
              <ProductivityToolsPage></ProductivityToolsPage>
              <AutomationToolsPage></AutomationToolsPage>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
