import type { ActionFunction } from '@remix-run/node'
import { json } from '@remix-run/node' // or "@remix-run/cloudflare"

export const action: ActionFunction = async ({ request }) => {
  const validateEmail = (email: string) => {
    if (email.length < 3) {
      return `Please enter a valid email address.`
    }
  }

  const email = (await request.formData()).get('email') as string

  const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
  const mailchimpListId = process.env.MAILCHIMP_LIST_ID_PRIMARY
  const mailchimpApi = 'https://us19.api.mailchimp.com/3.0'

  return json({ ok: true })
  try {
    const response: Response = await fetch(
      `${mailchimpApi}/lists/${mailchimpListId}/members`,
      {
        method: 'post',
        body: JSON.stringify({ email_address: email, status: 'subscribed' }),
        headers: {
          Authorization: `Bearer ${mailchimpApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (response.status >= 400 && response.status < 600) {
      const error = await response.json()
      // return json({ error: error.detail }, { status: response.status })
      return json(
        { error: 'Unable to subscribe this email address.' },
        { status: response.status }
      )
    }

    return json({ ok: true })
  } catch (e) {
    return json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
