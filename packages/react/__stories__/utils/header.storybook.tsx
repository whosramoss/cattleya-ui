// @ts-nocheck
import React from 'react'
import icon from './icon.svg?url'

interface PageHeaderProps {
  title: string
}

export function PageHeader({ title }: PageHeaderProps) {
  return <h1 className="title-500 !m-0 !text-[#a20058]">{title}</h1>
}
