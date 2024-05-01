'use client'

import { AI } from "@/lib/chat/actions"
import { useActions, useUIState } from "ai/rsc"
import { useState } from "react"


export function MugPurchase({
    props: { status = 'requires_action', }
}) {
    const [purchasingUI, setPurchasingUI] = useState<null | React.ReactNode>(null)
    const [, setMessages] = useUIState<typeof AI>()
    const { buyMug } = useActions()

    return (
        <div className="rounded-xl border bg-zinc-950 p-4 text-green-400">
            {purchasingUI ? (
                <div className="mt-4 text-zinc-200">{purchasingUI}</div>
            ) : status === 'requires_action' ? (
                <>
                    <iframe src="https://checkout-demo.dispatch.co/v1/content/001/662ca29cf73109a017f2cc8a" className="relative z-30 mx-auto mb-12 h-[600px] w-[300px] border transition-all" title="Dispatch" id="dispatchCheckout" allow="payment; clipboard-read; clipboard-write" loading="lazy"></iframe>
                    {/* <div className="mt-6">
                        <p>Total cost</p>
                        <div className="flex flex-wrap items-center text-xl font-bold sm:items-end sm:gap-2 sm:text-3xl">
                            <div className="mt-2 basis-full border-t border-t-zinc-700 pt-2 text-center sm:mt-0 sm:basis-auto sm:border-0 sm:pt-0 sm:text-left">
                                $10
                            </div>
                        </div>
                    </div>

                    <button
                        className="mt-6 w-full rounded-lg bg-green-400 px-4 py-2 font-bold text-zinc-900 hover:bg-green-500"
                        onClick={async () => {
                            const response = await buyMug()
                            setPurchasingUI(response.purchasingUI)

                            // Insert a new system message to the UI.
                            setMessages((currentMessages: any) => [
                                ...currentMessages,
                                response.newMessage
                            ])
                        }}
                    >
                        Purchase
                    </button> */}
                </>
            ) : status === 'completed' ? (
                <p className="mb-2 text-white">
                    You have successfully purchased a stanley mug! Total cost: $10
                </p>
            ) : status === 'expired' ? (
                <p className="mb-2 text-white">Your checkout session has expired!</p>
            ) : null}
        </div>
    )
}