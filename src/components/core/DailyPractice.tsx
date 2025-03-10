'use client';
import React, { useState, useRef, useEffect } from 'react';

const DailyPractice: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState<string | number>("auto");
  const contentRef = useRef<HTMLDivElement>(null);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  useEffect(() => {
    // Set initial height to just show the first section
    if (!isExpanded) {
      setHeight("120px"); // Approximate height of first section
    } else {
      // When expanded, set height to the full content height
      const contentHeight = contentRef.current?.scrollHeight;
      setHeight(contentHeight || "auto");
    }
  }, [isExpanded]);

  return (
    /* eslint-disable react/no-unescaped-entities */ 
    <div className="mt-6 p-4 bg-white bg-opacity-80 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-light text-sage-dark mb-4 text-center">
        Practicing Taoism for 5-10 Minutes a Day
      </h2>
      <p className="text-gray-600 mb-4">
        You don't need much time or any fancy setup—just a quiet moment and an open mind. Here's a beginner-friendly practice:
      </p>

      <h3 className="text-xl font-light text-sage-dark mb-2">Daily Practice (5-10 Minutes)</h3>

      <div 
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height }}
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-medium text-gold">Find Stillness (1-2 minutes)</h4>
            <p className="text-gray-600">
              Sit comfortably, anywhere—a chair, floor, or outside if you can. Close your eyes or soften your gaze. Breathe naturally. Notice the air moving in and out. Don't force it; just let it happen. This is your first taste of <em>wu wei</em>—non-striving awareness.
            </p>
          </div>

          <div className={`transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <h4 className="text-lg font-medium text-gold">Observe Without Judging (3-5 minutes)</h4>
            <p className="text-gray-600">
              Tune into your senses: the sounds around you, the feel of your seat, the temperature of the air. Let thoughts come and go like clouds—don't chase them or fight them. If your mind wanders (it will), gently return to the present. This aligns with accepting impermanence and letting the Tao flow.
            </p>
          </div>

          <div className={`transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <h4 className="text-lg font-medium text-gold">Reflect on Simplicity (1-2 minutes)</h4>
            <p className="text-gray-600">
              Ask yourself: "What can I let go of today?" It could be a worry, a grudge, or even a physical object cluttering your space. Don't overthink it—just note one thing and imagine releasing it, like dropping a stone into a stream.
            </p>
          </div>

          <div className={`transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <h4 className="text-lg font-medium text-gold">Move with Intention (1 minute)</h4>
            <p className="text-gray-600">
              Stand up slowly. Stretch or take a few steps, feeling each movement. Don't rush—move as if you're part of the moment, not pushing against it. This embodies <em>wu wei</em> in action.
            </p>
          </div>

          <div className={`transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-xl font-light text-gray-700 mt-6 mb-2">Tips to Start</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Pick a consistent time (morning or evening works well).</li>
              <li>Keep it light—no pressure to "get it right." Taoism is about ease, not perfection.</li>
              <li>
                If you're curious, read a short Taoist text like the <em>Tao Te Ching</em> (Lao Tzu)—one verse a day pairs nicely with this.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={toggleExpand}
        className="bg-sage-light text-sage-dark px-6 py-3 rounded-full text-lg transition-all duration-300 mx-auto block mt-6 hover:bg-sage hover:text-white cursor-pointer"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

export default DailyPractice;