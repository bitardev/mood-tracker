import { Fugaz_One } from "next/font/google";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });
export default function StatusDisplay({ statuses }) {
  return (
    <div className="grid grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg p-4 gap-4">
      {Object.keys(statuses).map((status, index) => (
        <div className="flex flex-col gap-1 sm:gap-2" key={index}>
          <p className="font-medium capitalize text-xs sm:text-sm truncate">
            {status.replaceAll("_", " ")}
          </p>
          <p className={`${fugaz.className} text-base sm:text-lg truncate`}>
            {statuses[status]} {status === "num_days" ? " 🔥" : ""}
          </p>
        </div>
      ))}
    </div>
  );
}
