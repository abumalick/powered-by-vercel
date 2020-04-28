# Powered By Vercel

Add Powered By Vercel SVG to your React app

[![Alt text](https://raw.github.com/abumalick/powered-by-vercel/powered-by-vercel.svg 'Powered by Vercel')](https://vercel.com?utm_source=powered-by-vercel)

## Installation

```
npm install --save powered-by-vercel
# OR
yarn add powered-by-vercel
```

## Usage

```jsx
import React from 'react'
import PoweredByVercel from 'powered-by-vercel'

export default function MyApp() {
  return (
    <div>
      <PoweredByVercel />
      <br />
      <br />
      <PoweredByVercel utmSource="my-org-name" />
      <br />
      <PoweredByVercel
        utmSource="my-source"
        target="blank"
        rel="noopener noreferrer"
        svgProps={{
          width: 150,
        }}
      />
    </div>
  )
}
```

If you need to add the logo to your `README.md`. You can use the following (and change the utm_source accordingly)

```md
[![Alt text](https://raw.github.com/abumalick/powered-by-vercel/powered-by-vercel.svg 'Powered by Vercel')](https://vercel.com?utm_source=powered-by-vercel)
```
