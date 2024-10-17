
import { Input } from "@/landing/ui/input";
import { actions } from "astro:actions";

export function FormAbonnement() {
  return <div className="flex flex-col mb-36min-h-[300px] mt-2 pb-12 p-8 justify-center items-center bg-slate-900 rounded-lg">
    <p className="mt-1 mb-4 text-lg text-slate-300 text-center">
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
      className="flex flex-col justify-center items-center"
    >
      <Input className="max-w-lg flex-1" placeholder="Your email" type="email" name="email" />
      <div className="flex flex-row items-center justiy-center">
        <img src="/img/renard.png" className="max-h-[30px] w-auto mt-4 mr-2" />
        <button
          type="submit"
          className="mt-4 p-2 mx-auto motion-safe:animate-color-rotate
    bg-orange-600 rounded-xl hover:bg-red-600
     disabled:opacity-50 hover:scale-105 motion-safe:transition-transform"
        >
          Notify Me
        </button>
        <img src="/img/renard.png" className="max-h-[30px] w-auto mt-4 ml-1" />
      </div>
    </form>
    {/*<FormEmail />*/}
  </div>
}