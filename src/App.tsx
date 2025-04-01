import * as React from 'react'

function App() {
  // State for the typing animation
  const [textIndex, setTextIndex] = React.useState(0);
  const fullText = "\"Hey, build me a...\"";
  const displayText = fullText.substring(0, textIndex);
  
  React.useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
    
    // Reset the animation after 3 seconds
    const resetTimeout = setTimeout(() => {
      setTextIndex(0);
    }, 3000);
    
    return () => clearTimeout(resetTimeout);
  }, [textIndex]);

  return (
    <div className="h-screen bg-[#f7f7f7] flex flex-col items-center justify-center px-6 font-sans">
      <div className="w-full max-w-2xl mx-auto">
        {/* Main Content - clean, elegant card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl text-[#202124] mb-5 font-light">Welcome to your coding playground!</h2>
          
          <p className="text-[#5f6368] text-xl mb-8 font-light">
            While things warm up behind the scenes, why not start dreaming up what you'll build?
          </p>
          
          <div className="mb-8">
            <div className="flex items-center mb-1">
              <span className="mr-2 text-xl">👋</span> 
              <span className="text-xl text-[#202124] font-light">Just type your first prompt when you're ready.</span>
            </div>
            <div className="h-8 flex items-center font-light">
              <span className="text-xl text-blue-500">{displayText}</span>
              <span className={`ml-0.5 w-0.5 h-6 bg-blue-500 ${textIndex < fullText.length ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>
          </div>
          
          <div className="h-px w-full bg-gray-100 my-8"></div>
          
          <div>
            <p className="text-xl text-[#202124] mb-5 font-light">Need inspiration? Try these starter ideas:</p>
            
            <ul className="space-y-3 text-lg text-[#5f6368]">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3 text-lg">•</span> 
                <span className="font-light">A to-do list that actually motivates you</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-3 text-lg">•</span> 
                <span className="font-light">A personal finance tracker (that won't judge your coffee habits)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-3 text-lg">•</span> 
                <span className="font-light">A random recipe generator for your sad pantry items</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3 text-lg">•</span> 
                <span className="font-light">A mood tracker with unnecessary but delightful animations</span>
              </li>
            </ul>
          </div>
        </div>
        
        <p className="text-base text-[#5f6368] text-center mt-5 font-light italic">
          Remember: There are no coding emergencies. Except when there are. But not right now!
        </p>
      </div>
    </div>
  )
}

export default App
