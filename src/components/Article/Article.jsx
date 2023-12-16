import React from 'react'

export default function Article({heading, article, btntext}) {
  return (
    <div className="about-us-article-wrapper">
    <div className="about-us-heading">{heading}</div>
    <div className="about-us-artcilce">
      {article}
    </div>
    <div className="about-us-btn">{btntext}</div>
  </div>
  )
}
