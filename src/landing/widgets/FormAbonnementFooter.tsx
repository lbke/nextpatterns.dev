
import { Input } from "@/landing/ui/input";
import { actions } from "astro:actions";

export function FormAbonnementFooter() {
  return <div className="flex flex-col h-[170px] mt-2 pb-12 p-8 justify-center items-center bg-slate-900 rounded-lg">
    <p className="text-sm mb-3">Subscribe to the Newsletter</p>
    <form
      method="POST"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const result = await actions.subscribe(formData);
        // TODO: display result using state
        //console.log({ result })
      }}
      className="flex flex-row justify-center items-center"
    >
      <Input className="max-w-lg flex-1 text-sm" placeholder="Your email" type="email" name="email" />
      <div className="flex flex-row items-center justiy-center">

        <button
          type="submit"
          className="ml-4 px-3 py-2 text-sm mx-auto motion-safe:animate-color-rotate
    bg-orange-600 rounded-xl hover:bg-red-600
     disabled:opacity-50 hover:scale-105 motion-safe:transition-transform"
        >
          Notify Me
        </button>
      </div>
    </form>
    {/*<FormEmail />*/}
  </div>
}