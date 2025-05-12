import React from 'react'
import { ThumbsUp } from "lucide-react"


export default function TopicPost() {
  return (
    <div className='flex flex-col border-b-[1px] border-gray-300'>
            <div className='grid grid-cols-12 p-4'>
                <div className=' col-span-2 rounded-full bg-gray-300 w-12 h-12'></div>
                <div className=' col-span-10 flex flex-col gap-y-1'>
                    <h3 className='text-lg font-bold'>Andıçın ev arkadaşını değiştirmesi doğru bir karar mı?</h3>
                    <div className='flex items-center text-sm text-gray-600 gap-x-2'>
                        <p>Anıl Eren Candan</p>
                        <p>-</p>
                        <p>16 Ağustos, 2025</p>
                    </div>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Autem, quia nisi. Incidunt porro, totam corporis aliquid magni magnam, 
                        voluptatibus modi dolore odit voluptates mollitia repellat...
                    </div>
                    <div className="flex items-center justify-between w-full text-sm text-gray-600 font-semibold pt-4 pb-2">
                        {/* Sol kısım: Yardımcı Oldu */}
                        <div className="flex items-center gap-2">
                            <ThumbsUp className="w-4 h-4" />
                            <span>Yardımcı Oldu (87)</span>
                        </div>

                        {/* Sağ kısım: Okuma Süresi */}
                        <div>8 dakika okuma süresi</div>
                    </div>

                </div>

            </div>
        </div>
    )
}
