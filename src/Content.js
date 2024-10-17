import React from 'react'
import { Link } from 'react-router-dom'
const Content = () => {
  return (
    <main>
        Hello iam Content
        <Link to="/content/1">Post 1</Link>
        <Link to="/content/2">Post 2</Link>
        <Link to="/content/3">Post 3</Link>

    </main>
  )
}

export default Content
