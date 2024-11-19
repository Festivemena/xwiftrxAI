import React from "react";

const Roadmap = () => {
  const roadmapData = [
    {
      period: "Q1-Q3 2025",
      steps: [
        "Enhance AI fraud detection and expand token bridging support.",
        "Onboard early adopters through partnerships.",
        "Refine user experience with AI-driven security measures.",
      ],
    },
    {
      period: "Q3-Q4 2025",
      steps: [
        "Introduce DeFi integration for advanced financial features.",
        "Expand user base across Web3 ecosystems.",
        "Secure institutional collaborations for broader adoption.",
      ],
    },
    {
      period: "Long Term (Post-2025)",
      steps: [
        "Achieve full blockchain abstraction for seamless use.",
        "Explore collaborations, mergers, and acquisitions.",
        "Focus on user-centered growth and ecosystem scaling.",
      ],
    },
  ];

  return (
    <div className="bg-cyan-100 rounded-xl py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-cyan-800 mb-8 sm:mb-10">
          Roadmap to Success
        </h2>
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {roadmapData.map((item, index) => (
            <div
              key={index}
              className="bg-cyan-600 shadow-lg rounded-lg p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                {item.period}
              </h3>
              <ul className="list-disc list-inside text-cyan-50 space-y-2">
                {item.steps.map((step, idx) => (
                  <li key={idx} className="text-sm sm:text-md">
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
