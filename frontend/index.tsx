import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import { Helmet } from 'react-helmet'
import GithubCorner from 'react-github-corner'

import './styles.scss'

function PreviewCard({ src }) {
  return (
    <div className="preview-card">
      {src && <img src={src} alt="Preview card" />}
    </div>
  )
}

function Gallery({ children }) {
  return <div className="gallery">{children}</div>
}

function Metatags() {
  return (
    <Helmet>
      <meta charSet="utf-8" />

      {/** Primary Meta Tags **/}
      <title>Webshot</title>
      <meta name="title" content="Webshot" />
      <meta name="description" content="Screenshot websites as a Service" />

      {/** Open Graph / Facebook **/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://webshot.deam.io/" />
      <meta property="og:title" content="Webshot" />
      <meta
        property="og:description"
        content="Screenshot websites as a Service"
      />
      <meta
        property="og:image"
        content="https://webshot.deam.io/https://webshot.deam.io/"
      />

      {/** Twitter  **/}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://webshot.deam.io" />
      <meta property="twitter:title" content="Webshot" />
      <meta
        property="twitter:description"
        content="Screenshot websites as a Service"
      />
      <meta
        property="twitter:image"
        content="https://webshot.deam.io/https://webshot.deam.io/"
      />
    </Helmet>
  )
}

function SearchBar(props) {
  return (
    <div className="search-bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="search-icon"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input
        type="search"
        placeholder="Enter a website e.g. https://stripe.com/"
        {...props}
      />
    </div>
  )
}

export function App() {
  const [search, setSearch] = useState('')
  const [website, setWebsite] = useState('')

  let link

  if (website) {
    link = 'https://webshot.deam.io/' + website
  }

  return (
    <div className="Wrapper">
      <Metatags />
      <GithubCorner href="https://github.com/deamme/webshot/" />
      <h1 className="brand">Webshot</h1>
      <h2 className="description">Screenshot websites as a Service</h2>
      <SearchBar
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            setWebsite(search)
            setSearch('')
          }
        }}
      />
      {link && (
        <a className="link" href={link}>
          {link.length > 100 ? link.substring(0, 64) + '...' : link}
        </a>
      )}
      <Gallery>
        <PreviewCard src={link} />
      </Gallery>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
