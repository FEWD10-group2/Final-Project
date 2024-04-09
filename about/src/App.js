import "./App.css";

function App() {
  return (
    <div>
      <div className="bg-top-bg h-[550px] w-auto bg-cover top-0 left-0 right-0 z-10 border rounded-bl-[60px] ">
        <p className="flex items-center justify-center text-white text-5xl">
          About us
        </p>
      </div>
      <div className="w-[840px] border rounded-lg absolute flex justify-center flex-nowrap flex-col z-20 px-10 ml-52 top-96 bg-white mt-24">
        <p className="flex items-center text-2xl">See The World For Less</p>
        <span className="m-0">
          Agoda is an online travel platform that brings high-value and
          rewarding travel experiences to people all over the world through the
          Agoda app and Agoda website. Our mission is to empower everyone to be
          a traveler by offering affordable deals on hotels, flights,
          activities, and more, with an Agoda booking experience that is
          hassle-free from start to finish. Since the Agoda company was founded
          in 2005, we’ve made searching and booking travel as easy and
          stress-free as it should be. Agoda is now considered one of Asia’s
          leading travel-tech companies with millions of registered customers
          supported by a truly diverse team of more than 6,700 people in 31
          markets and Agoda customer service available 24/7.
        </span>
        <p className="flex items-center text-2xl">Visitor Numbers</p>
        <p>
          In accordance with Agoda.com obligations under the EU’s Digital
          Services Act (DSA), we estimate that the average monthly recipients*
          of the Agoda.com service in the European Union from 1 February 2023 up
          to and including 31 July2023, is well below 45 million.
        </p>
        <p>
          This is only an estimate and is based on the data available to
          Agoda.com at this time, and the limited guidance in the DSA. This
          estimate is required to be published under the DSA and should not be
          used for any other purpose. The methodologies used to estimate average
          monthly recipients as defined in the DSA require significant judgement
          and design inputs, are subject to data and other limitations, and
          inherently are subject to statistical variances and uncertainties.
          This estimate may be revised upwards or downwards as Agoda.com refines
          its approach and in response to the publication of methodology by the
          European Commission.
        </p>
        <p className="flex items-end">
          Please refer to the website for metrics we consider relevant to
          Agoda.com’s business.
        </p>
      </div>
    </div>
  );
}

export default App;
