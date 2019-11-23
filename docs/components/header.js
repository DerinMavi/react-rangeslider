import React from 'react'
import GitHubButton from 'react-github-button'

function Header () {
  return (
    <section className='block'>
      <h1><a href='/'>React Inputrange</a></h1>
      <p>
        A fast & lightweight react component as a drop in replacement for HTML5 input range slider element.
      </p>
      <p style={{ marginTop: 20, textAlign: 'center' }}>
        Please refer to the source on
        {' '}
        <a href='http://github.com/DerinMavi/react-inputrange'>Github</a>
      </p>
      <div style={{ textAlign: 'center' }}>
        <GitHubButton
          size='large'
          type='stargazers'
          namespace='DerinMavi'
          repo='react-inputrange'
        />
        <GitHubButton
          size='large'
          type='forks'
          namespace='DerinMavi'
          repo='react-inputrange'
        />
      </div>
    </section>
  )
}

export default Header
