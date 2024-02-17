import { headers } from "next/headers";

import { Button } from '@/components/Button'

import { db } from '@/../db'
import {soraWaitlist} from "../../db/migrations/schema";
import { joinWaitlist } from "@/app/actions";


export function SignUpForm() {

  return (
    <form action={joinWaitlist} className="relative isolate mt-8 flex items-center pr-1">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        required
        type="email"
        autoComplete="email"
        name="email"
        id="email"
        placeholder="Email address"
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-[0.8125rem]/6"
      />
      <Button type="submit" arrow>
        Join Waitlist
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
    </form>
  )
}
