// import { useState } from "react";
// import { cn } from "src/utils/utils2.ts";
{
  /*import { browserComponentsHome } from "src/components/config/links.ts"*/
}
//import { FormEmail } from "./forms/email-collect";
/**
 * The component needs JavaScript for the form : load it with "client:load"
 */
import { Input } from '@/landing/ui/input';
import { actions } from 'astro:actions';

export function Abonnement() {
  //const [showForm, setShowForm] = useState<boolean>(false);
  return (
    <section
      className="w-full py-12 md:py-24 
        bg-gradient-to-r from-[blue-500/40] to-green-500/40 dark:from-blue-700/40 dark:to-sky-400/40"
      id="newsletter"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-2">
            <h1
              className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none 
              p-4
              text-blue-gradient
              
              "
            >
              Be informed when new patterns are released
            </h1>
            <div className="mx-auto max-w-[700px] text-zinc-900 md:text-xl dark:text-zinc-200">
              <p>
                Gain access to all the patterns or only the ones you need. Level up your coding skills one pattern at a
                time.
              </p>
              <p className="font-semibold">
                NextPatterns is in beta and will stay entirely free until a final version is released.
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-8 gap-y-4 md:flex-row md:gap-x-4">
            {/*<button
                className={cn(
                  " inline-flex h-9 items-center justify-center rounded-md",
                  "bg-gradient-to-r from-blue-900 to-purple-900",
                  "px-4 py-2 text-sm font-medium text-zinc-50",
                  "shadow transition-colors",
                  "hover:bg-blue-900/90",
                  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950",
                  "disabled:pointer-events-none disabled:opacity-50",
                  "dark:border dark:border-white",
                  "dark:bg-zinc-50 dark:text-white dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300",
                  !showForm && "motion-safe:animate-bounce"
                )}
                //href="#"
                onClick={() => {
                  setShowForm(true);
                  // sendGTMEvent({ event: "conversion" });
                  {/*if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
                    // @ts-ignore
                    window?.gtag?.("event", "conversion", {
                      send_to: "AW-825847055/Pb1fCOyvlfIYEI_a5YkD",
                    });
                  }
                }}
              >
                Count me in
              </button>
              */}
            <a
              className="inline-flex h-9 items-center justify-center rounded-md border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50  dark:bg-[var(--aw-color-primary)] dark:hover:bg-cyan-500 dark:hover:text-zinc-50 dark:focus-visible:orange-zinc-300 hover:scale-105 motion-safe:transition-transform"
              href="https://nextpatterns.dev/p/get-started/welcome"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discover NextPatterns
            </a>
            <a
              className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-cyan-500 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300 dark:border-zinc-800 hover:scale-105 motion-safe:transition-transform"
              href="mailto:support@nextpatterns.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us
            </a>
          </div>
          <div className="flex flex-col mt-12 p-8 justify-center items-center bg-slate-900 rounded-lg">
            <p className="mt-2 mb-4">
              NextPatterns is under active development. Enter your email to be informed when new patterns are released:
            </p>
            <form
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const result = await actions.subscribe(formData);
                // TODO: display result using state
                //console.log({ result })
              }}
            >
              <Input className="max-w-lg flex-1" placeholder="Your email" type="email" name="email" />
              <button
                type="submit"
                className="mt-4 p-2 motion-safe:animate-color-rotate dark:hover:bg-red-600
            bg-orange-600 rounded-xl
             disabled:opacity-50 hover:scale-105 motion-safe:transition-transform"
              >
                Notify Me
              </button>
            </form>
            {/*<FormEmail />*/}
          </div>
        </div>
      </div>
    </section>
  );
}
