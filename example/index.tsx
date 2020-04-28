import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import PoweredByVercel from '../.'

const App = () => {
  return (
    <div>
      <PoweredByVercel />
      <br />
      <br />
      <PoweredByVercel utmSource="my-source" />
      <br />
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

ReactDOM.render(<App />, document.getElementById('root'))
