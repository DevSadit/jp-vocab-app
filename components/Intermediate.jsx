
import React from "react";
import { Book, Play, Clock } from "lucide-react";

const Intermediate = () => {
  const tutorialVideos = [
    {
      title: "Web Development Fundamentals",
      description: "Learn the core concepts of web development from scratch",
      duration: "1h 23m",
      iframe: "https://www.youtube.com/embed/9rq8WWvRI7g?si=0NqMU6JjAzJm_5CB",
      views: "10.5K",
    },
    {
      title: "JavaScript for Absolute Beginners",
      description: "Master the basics of JavaScript programming",
      duration: "2h 15m",
      iframe: "https://www.youtube.com/embed/4TuJtqLNYBc?si=6hm6gpNHemlNzMx2",
      views: "15.2K",
    },
    {
      title: "Responsive Design Essentials",
      description: "Create websites that look great on any device",
      duration: "1h 45m",
      iframe: "https://www.youtube.com/embed/6p9Il_j0zjc?si=8Dr8TNg_-21FypfD",
      views: "8.7K",
    },
  ];

  return (
    <div className="bg-[#F76B54]  py-10 px-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-white mb-8">
        Intermediate Tutorials
      </h1>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorialVideos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <iframe
              width="100%"
              height="200"
              src={video.iframe}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {video.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{video.description}</p>
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {video.duration}
                </div>
                <div className="flex items-center">
                  <Play className="w-4 h-4 mr-1" />
                  {video.views} views
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intermediate;
