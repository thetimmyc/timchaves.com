import { useFetcher } from '@remix-run/react'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import { CheckCircleIcon } from '~/icons/check-circle-icon'
import { Button } from './Button'
import { Input } from './Input'
import { Error } from './Error'
import AnimateHeight from 'react-animate-height'
import { P } from './P'

type Props = {
  id?: string
  className: string
}

const EmailSubscribeBox = ({ id, className }: Props) => {
  const fetcher = useFetcher()
  const ref = useRef<HTMLFormElement>(null)

  const showSuccess = fetcher.type === 'done' && fetcher.data.ok

  const showError = fetcher.data && fetcher.data.error

  useEffect(() => {
    if (fetcher.type === 'done' && fetcher.data.ok) {
      ref.current?.reset()
    }
  }, [fetcher])

  return (
    <div
      id={id}
      className={clsx(
        className,
        `transition
         border border-background-3 dark:border-background-3-dark
         py-8 px-10 md:py-10 md:px-12 
         text-left dark:text-white`
      )}
    >
      <div>
        <P>
          I write a newsletter, often with ideas about Latter-day Saint faith,
          or how we can become the best versions of ourselves.
        </P>
        <P>
          It’s free, and I’ll never share your email. You can unsubscribe any
          time.
        </P>
        <div>
          <fetcher.Form ref={ref} method="post" action="/action/subscribe">
            <div className="flex flex-row items-center gap-x-3">
              <label className="grow">
                <Input
                  className="w-full"
                  type="email"
                  placeholder="Email address"
                  name="email"
                  required={true}
                  aria-invalid={Boolean(fetcher.data?.error) || undefined}
                  aria-errormessage={
                    fetcher.data?.error ? 'email-error' : undefined
                  }
                />
              </label>
              <Button className="w-16" loading={fetcher.state === 'submitting'}>
                Try It
              </Button>
            </div>
            <AnimateHeight duration={175} height={showError ? 'auto' : 0}>
              <Error>{fetcher.data?.error}</Error>
            </AnimateHeight>
            <AnimateHeight duration={175} height={showSuccess ? 'auto' : 0}>
              <div className="flex items-center mt-2">
                <CheckCircleIcon className="mr-1 fill-emerald-400 dark:fill-emerald-600" />
                <p className="text-sm text-foreground-2 dark:text-foreground-2-dark mb-0">
                  You're in! Thanks for signing up.
                </p>
              </div>
            </AnimateHeight>
          </fetcher.Form>
        </div>
      </div>
    </div>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="error-container">
      Something unexpected went wrong. Sorry about that.
    </div>
  )
}

export { EmailSubscribeBox }
