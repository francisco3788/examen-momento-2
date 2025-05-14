import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-400 p-4">
      <div className="w-72 overflow-hidden shadow-xl">
        {/* Header Section - Exact Qatar Airways Color */}
        <div className="text-white" style={{ backgroundColor: "#6A1B57" }}>
          <div className="p-5 pb-0">
            <div className="flex items-center mb-3">
              <ArrowLeft size={18} />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-xl font-extrabold">
                <div>LHR</div>
                <div className="text-xs font-normal tracking-wide opacity-80">LONDON</div>
              </div>
              
              <div className="flex items-center justify-center mx-2">
                <div className="relative">
                  <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="relative w-6 h-1 bg-white -rotate-45">
                      <div className="absolute top-0 left-1/2 w-2 h-2 bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-sm"></div>
                      <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white transform -translate-x-1/2 translate-y-1/2 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-xl font-extrabold text-right">
                <div>DXB</div>
                <div className="text-xs font-normal tracking-wide opacity-80">DUBAI</div>
              </div>
            </div>
          </div>
          
          <div className="text-center text-xs pb-2 pt-3 font-light tracking-widest uppercase" style={{ letterSpacing: "0.2em", fontSize: "10px" }}>
            QATAR AIRWAYS
          </div>
        </div>
        
        <div className="bg-white p-3 pt-1">
          <div className="flex justify-between items-center mb-2">
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <div></div>
                <div className="text-gray-400 text-sm">Business</div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="text-xl font-medium mr-4">3:40am</div>
                <div className="relative w-10 h-0.5 bg-gray-400">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <svg width="16" height="6" viewBox="0 0 16 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 3H15M15 3L12 1M15 3L12 5" stroke="#9CA3AF" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
                <div className="text-xl font-medium ml-4">1:15pm</div>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between">
              <div>
                <div className="text-gray-400 text-xs">Boarding</div>
                <div className="font-medium text-sm">January 17, 2015</div>
              </div>
              <div className="text-right">
                <div className="text-gray-400 text-xs invisible">Time</div>
                <div className="font-medium text-sm">3:00am</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between pt-2">
            <div>
              <div className="text-gray-400 text-xs">Flight</div>
              <div className="font-medium text-sm">BAW31</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 text-xs">Gate</div>
              <div className="font-medium text-sm">E30</div>
            </div>
            <div className="text-right">
              <div className="text-gray-400 text-xs">Seat</div>
              <div className="font-medium text-sm">21a</div>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex justify-center items-center">
              <div className="w-full h-16">
                <svg viewBox="0 0 100 20" className="w-full h-full">
                  <rect x="0" y="0" width="1" height="20" fill="black" />
                  <rect x="2" y="0" width="1" height="20" fill="black" />
                  <rect x="4" y="0" width="2" height="20" fill="black" />
                  <rect x="7" y="0" width="1" height="20" fill="black" />
                  <rect x="9" y="0" width="3" height="20" fill="black" />
                  <rect x="13" y="0" width="2" height="20" fill="black" />
                  <rect x="16" y="0" width="1" height="20" fill="black" />
                  <rect x="18" y="0" width="2" height="20" fill="black" />
                  <rect x="21" y="0" width="3" height="20" fill="black" />
                  <rect x="25" y="0" width="1" height="20" fill="black" />
                  <rect x="27" y="0" width="1" height="20" fill="black" />
                  <rect x="29" y="0" width="3" height="20" fill="black" />
                  <rect x="33" y="0" width="2" height="20" fill="black" />
                  <rect x="36" y="0" width="1" height="20" fill="black" />
                  <rect x="38" y="0" width="2" height="20" fill="black" />
                  <rect x="41" y="0" width="1" height="20" fill="black" />
                  <rect x="43" y="0" width="3" height="20" fill="black" />
                  <rect x="47" y="0" width="1" height="20" fill="black" />
                  <rect x="49" y="0" width="1" height="20" fill="black" />
                  <rect x="51" y="0" width="3" height="20" fill="black" />
                  <rect x="55" y="0" width="2" height="20" fill="black" />
                  <rect x="58" y="0" width="1" height="20" fill="black" />
                  <rect x="60" y="0" width="2" height="20" fill="black" />
                  <rect x="63" y="0" width="1" height="20" fill="black" />
                  <rect x="65" y="0" width="3" height="20" fill="black" />
                  <rect x="69" y="0" width="1" height="20" fill="black" />
                  <rect x="71" y="0" width="1" height="20" fill="black" />
                  <rect x="73" y="0" width="3" height="20" fill="black" />
                  <rect x="77" y="0" width="2" height="20" fill="black" />
                  <rect x="80" y="0" width="1" height="20" fill="black" />
                  <rect x="82" y="0" width="2" height="20" fill="black" />
                  <rect x="85" y="0" width="1" height="20" fill="black" />
                  <rect x="87" y="0" width="3" height="20" fill="black" />
                  <rect x="91" y="0" width="1" height="20" fill="black" />
                  <rect x="93" y="0" width="1" height="20" fill="black" />
                  <rect x="95" y="0" width="3" height="20" fill="black" />
                  <rect x="99" y="0" width="1" height="20" fill="black" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
