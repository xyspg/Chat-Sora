"use server"
import {headers} from "next/headers";
import {db} from "../../db";
import {soraWaitlist} from "../../db/migrations/schema";
import { z } from 'zod'
import {eq} from "drizzle-orm";
import {redirect} from "next/navigation";

const schema = z.object({
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }),
})
export const joinWaitlist = async (formdata: FormData) => {
  function getIP(headerList: Headers) {
    const xff = headerList.get('x-forwarded-for')
    if (xff === '::1') {
      return '127.0.0.1'
    }

    return xff?.split(',')?.[0] ?? '127.0.0.1'
  }

  const validatedFields = schema.safeParse({
    email: formdata.get('email'),
  })

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const email = formdata.get("email")
  if (!email || typeof email !== "string") return

  const headerList = headers()
  const ua = headerList.get("user-agent") ?? ''
  const ip = getIP(headerList)

  // check if email already exists
  const existing = await db.select().from(soraWaitlist).where(eq(soraWaitlist.email, email))
  if (existing.length) {
    return {
      errors: {
        email: 'Email already exists',
      }
    }
  }
  // @ts-ignore
  await db.insert(soraWaitlist).values({
    email, ua, ip
  })
  redirect('/thankyou')
}