import { Fugaz_One } from "next/font/google";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function MoodButtons({ moods, handleSetMood }) {
  return (
    <div className="flex items-stretch flex-wrap gap-4">
      {Object.keys(moods).map((mood, index) => (
        <button
          onClick={() => handleSetMood(index + 1)}
          className="p-4 px-5 rounded-2xl purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex flex-col gap-3 items-center flex-1"
          key={index}
        >
          <p className="text-4xl sm:text-5xl md:text-6xl">{moods[mood]}</p>
          <p
            className={`${fugaz.className} text-indigo-500 text-xs sm:text-sm md:text-base`}
          >
            {mood}
          </p>
        </button>
      ))}
    </div>
  );
}
