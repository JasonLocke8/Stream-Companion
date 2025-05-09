import React from 'react';
import { Camera, MessageSquare, MonitorPlay } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 to-black text-white p-4">
      <div className="grid grid-cols-[1fr_350px] gap-4 h-screen">
        {/* Main Content Area */}
        <div className="bg-zinc-800/50 rounded-xl backdrop-blur-sm border border-zinc-700/50 p-2 relative">
          <div className="absolute top-2 left-2 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="relative w-full aspect-video max-w-[1720px] bg-zinc-900/80 rounded-lg border border-zinc-700/50">
              <MonitorPlay className="w-16 h-16 text-zinc-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-4 left-4 text-sm text-zinc-400 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Display Area (1920x1080)
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Camera and Chat */}
        <div className="space-y-4">
          {/* Camera Module */}
          <div className="bg-zinc-800/50 rounded-xl backdrop-blur-sm border border-zinc-700/50 h-[350px] p-4 relative">
            <div className="absolute top-4 right-4 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              LIVE
            </div>
            <div className="h-full flex items-center justify-center">
              <Camera className="w-16 h-16 text-zinc-600" />
            </div>
          </div>

          {/* Chat Module */}
          <div className="bg-zinc-800/50 rounded-xl backdrop-blur-sm border border-zinc-700/50 h-[calc(100vh-390px)] p-4">
            <div className="flex items-center gap-2 mb-4 text-zinc-400">
              <MessageSquare className="w-5 h-5" />
              <h2 className="font-medium">Stream Chat</h2>
            </div>
            <div className="h-[calc(100%-2rem)] bg-zinc-900/50 rounded-lg border border-zinc-700/30 p-4">
              <div className="text-zinc-500 text-sm flex flex-col gap-2">
                <p>Welcome to the chat!</p>
                <p>Chat messages will appear here...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;