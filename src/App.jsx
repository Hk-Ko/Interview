import React from "react";
import { QAs } from "./components/Html";

const App = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="mb-5">
        <div className="w-full h-full fixed top-0 ">
          <h1 className="text-center text-4xl font-bold text-red-600 bg-white px-3 py-1">
            TO STUDY EVERYDAY
          </h1>
        </div>
      </div>
      <div className="flex items-start justify-between gap-5 h-full">
        <div className="w-full ps-5">
          <div className="container mx-auto my-5">
            <div className="flex flex-col items-start gap-5">
              {QAs.map((qa, index) => (
                <div key={qa.id}>
                  <div className="flex items-start gap-5">
                    <div className="">{index}.</div>
                    <div className="">
                      <h1 className="text-sm font-semibold text-red-500">
                        {qa.question}
                      </h1>
                      <p className="font-semibold text-blue-600">{qa.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default App;
