// TODO: merge with src/components/widgets/Abonnement.tsx
import { actions } from "astro:actions";
import { useState } from "react";


export function SubscribeForm() {
    const [result, setResult] = useState<any | null>(null)
    const [errorState, setError] = useState<any | null>(null)
    return <div className="my-4">
        <form
            method="POST"
            onSubmit={async (e) => {
                e.preventDefault();
                setResult(null)
                setError(null)
                const formData = new FormData(e.target as HTMLFormElement);
                const { data, error } = await actions.subscribe(formData);
                if (error) {
                    setError(error)
                }
                console.log(data)
                setResult(data)
                // TODO: display result using state
                //console.log({ result })
            }}
            className="flex gap-4 mb-2"
        >
            <input
                className="rounded px-4 
            text-gray-900 border border-slate-600 
            placeholder:text-gray-600
            dark:placeholder:text-gray-300
            dark:border-white dark:bg-slate-900 dark:text-white"
                placeholder="Enter your email here"
                type="email"
                name="email"
            />
            <button
                type="submit"
                className="h-full p-4 motion-safe:animate-color-rotate rounded
            motion-safe:transition-colors	
            bg-cyan-200
            hover:bg-cyan-300
            dark:bg-pink-800
            hover:dark:bg-pink-600
             disabled:opacity-50"
            >
                Notify Me
            </button>
        </form>
        {result?.message && <p className="font-bold">{result.message}</p>}
        {errorState && <p className="font-bold">Error: {errorState.message}</p>}
    </div>

}