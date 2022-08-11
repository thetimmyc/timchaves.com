import React from 'react'

const HeadTags = () => {
  return (
    // <!-- Google tag (gtag.js) -->
    <React.Fragment>
      {process.env.NODE_ENV === 'development' ? null : (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-58K2PGXCWX`}
          />
          <script
            async
            id="gtag-init"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-58K2PGXCWX', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </React.Fragment>
  )
}
export { HeadTags }
