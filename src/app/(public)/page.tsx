export default function Home() {
  return (
      <div className="">

          <nav className="h-14  w-full flex items-center justify-around p-5 bg-lime-950 text-amber-50">
              <div className="text-3xl font-bold">Carbon</div>
              <ul className="flex gap-5 font-bold">
                  <li className="relative after:transition-all after:duration-150
                  after:ease-in-out hover:after:content-[''] hover:after:absolute
                  hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:bottom-[-2px] hover:after:h-1
                  hover:after:bg-amber-50 hover:after:w-3/4 after:w-0">
                      How it works
                  </li>
                  <li className="">Region</li>
                  <li className="">Your stats</li>
              </ul>
          </nav>


          <main className="relative z-10 bg-amber-50 rounded-2xl">
              <header className="flex flex-col justify-end h-[500px] bg-lime-950 text-amber-50 rounded-b-2xl">

                  <div className="max-w-[1100px] w-11/12 mx-auto">

                      <div className="flex flex-col justify-between max-h-lg pb-24">
                          <h1 className="text-4xl font-bold py-3">
                              Understand
                              <span className="block h-2"/>
                              Your Environmental Impact
                          </h1>

                          <p className="text-xl max-w-2xl">
                              Our easy-to-use calculator helps you measure your daily carbon emissions from transportation,
                              energy, and diet. Discover simple ways to reduce your environmental impact and track your
                              progress over time.
                          </p>
                      </div>

                  </div>

              </header>


              <div className="py-20">
                  <div className="max-w-[1100px] w-11/12 mx-auto p-5">

                      <h1 className="text-5xl">
                          How It Works: A Simple 3-Step Process
                      </h1>

                      <p className="text-xl mt-2 max-w-4xl">
                          Calculating your carbon footprint has never been easier. Just provide a few details about your
                          lifestyle, and we'll handle the rest.
                      </p>

                      <div className="flex flex-col gap-10 mt-10">

                          <div className="mt-10">

                              <h1 className="text-4xl">
                                  1. Your Travel Habits
                              </h1>

                              <p className="text-xl mt-2 max-w-4xl">
                                  <span className="italic">Track Your Transportation Footprint. </span>
                                  Start by telling us about your travel routines. Input your average weekly driving mileage
                                  and your total flight hours for the year. This helps us calculate the carbon emissions
                                  from your daily commute and long-distance travel.
                              </p>


                          </div>

                          <div className="mt-10">

                              <h1 className="text-4xl">
                                  2. Your Home Energy
                              </h1>

                              <p className="text-xl mt-2 max-w-4xl">
                                  <span className="italic">Measure Your Energy Consumption. </span>
                                  Next, enter your average monthly electricity usage. Your home is a significant part of
                                  your footprint, and understanding your energy consumption is a key step toward reducing
                                  it.
                              </p>


                          </div>

                          <div className="mt-10">

                              <h1 className="text-4xl">
                                  3. Your Dietary Choices
                              </h1>

                              <p className="text-xl mt-2 max-w-4xl">
                                  <span className="italic">Analyze the Impact of Your Diet. </span>
                                  What you eat matters. Select the dietary profile that best describes your habits—from
                                  vegan to meat-lover—to see how your food choices contribute to your overall carbon
                                  footprint.
                              </p>


                          </div>
                      </div>

                  </div>
              </div>
          </main>


          <footer className="sticky bottom-0 left-0 w-full bg-lime-950 z-0 h-[350px] flex items-center justify-center text-amber-50">
              <div className="max-w-[1100px] w-11/12 mx-auto">
                  <div className="flex justify-between w-full text-2xl">
                      <div className="text-9xl flex font-bold ">C.F.</div>
                      <div className="text-right">
                          <span className="font-bold">Navigation</span>
                          <ul className="mr-2">
                              <li><a href="#">How it works</a></li>
                              <li><a href="#">Region</a></li>
                              <li><a href="#">Your stats</a></li>
                          </ul>
                      </div>
                  </div>
                  <div className="flex justify-between mt-10">
                      <div className="flex gap-5 font-light">
                          <a href="#">Privacy Policy</a>
                          <a href="#">Terms of Service</a>
                      </div>
                      <span>Made by TheVideoFelix</span>
                  </div>
              </div>
          </footer>

      </div>
  );
}
