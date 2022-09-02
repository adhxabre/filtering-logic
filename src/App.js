import './App.css';

function App() {
  return (
    <div className='w-screen h-screen'>
      <div className="w-1/4 h-screen p-5 fixed right-0 bg-white overflow-hidden border-l-2 border-gray-400">
        <div className='w-full h-auto bg-blue-400'>
          <h1 className="text-xs">Mostly used components</h1>
        </div>
      </div>
      <div className="bg-white w-3/4 h-2/3 p-5 flex flex-col fixed overflow-scroll">
        <container id="header" className='w-full h-auto bg-white flex-col mb-7'>
          <h1 className='font-bold mb-2'>Header</h1>
          <div className='w-full h-24 border-2 border-gray-300 flex items-center'>
            <h1>text</h1>
          </div>
        </container>
        <container id="main" className='w-full h-auto bg-white flex-col mb-7'>
          <h1 className='font-bold mb-2'>Main</h1>
          <div className='w-full h-[100vh] border-2 border-gray-300 flex'>
            <h1>Test</h1>
          </div>
        </container>
      </div>
      <div className="bg-white w-3/4 h-1/3 p-5 border-t-2 border-gray-400 flex justify-center items-center fixed bottom-0">
        <div>
          <h1 className='text-rose-600 font-extrabold text-3xl'>Database Feature still not available!</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
