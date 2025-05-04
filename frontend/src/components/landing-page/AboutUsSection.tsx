import { MessageSquareText } from "lucide-react";

export default function AboutUsSection() {
    return (
        <div className="px-4 flex flex-col gap-y-12  justify-center items-center text-black border-t-[1px] border-gray-300 py-12">
            <div className="flex flex-col gap-y-4 items-center justify-center text-sm w-full max-w-[500px]">
              <h2 className="text-2xl text-black font-semibold">Internsy ile Yolculuğa Çık</h2>
              <p className="text-center text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam labore eius doloribus praesentium cum sit at adipisci consequatur ullam quos.
              </p>

            </div>
            <div className="w-full grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-6">
                {Array.from({ length: 4 }, (_, index) => (
                <div className="flex flex-col gap-y-2 items-center justify-center text-sm ">
                  <div className="p-3 border-[2px] border-black rounded-full "><MessageSquareText size={36} /></div>
                  <span className="text-center">İş Topluluklarına Katıl</span>
                </div>
              ))}
            </div>
          </div>
    )
}