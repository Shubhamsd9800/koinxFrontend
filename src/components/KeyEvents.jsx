import React, { memo } from 'react';
import news from "../assets/news.png";
import { FaExclamationCircle } from "react-icons/fa";

const Event = memo(({ event }) => (
  <div
    className={`${event.bgColor} p-4 rounded-lg transition-all duration-300 hover:shadow-md`}
  >
    <div className="flex gap-3">
      <div
        className={`${event.iconBg} p-2 rounded-lg h-fit flex items-center justify-center min-w-[40px]`}
      >
        {event.icon}
      </div>
      <div className="flex-1">
        <h3 className="font-medium mb-2 text-left line-clamp-2">
          {event.title}
        </h3>
        <p className="text-sm text-gray-600 text-left line-clamp-3">
          {event.description}
        </p>
      </div>
    </div>
  </div>
));

const KeyEvents = memo(() => {
  const events = [
    {
      id: 1,
      type: "news",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-500",
      icon: <img src={news} alt="" className="w-6 h-6" />,
      title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    },
    {
      id: 2,
      type: "trend",
      bgColor: "bg-green-50",
      iconBg: "bg-green-500",
      icon: (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      title: "Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.",
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-6">Sentiment</h2>
      <div className="flex gap-2 items-center mb-4">
        <h3 className=" text-lg font-normal">Key Events</h3>
        <span className="text-gray-500 cursor-help" title="Important events affecting the market">
          <FaExclamationCircle className="mt-[3px]" />
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
});

export default KeyEvents;
