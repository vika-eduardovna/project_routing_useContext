import React from 'react'
import s from './style.module.sass'
import ItemDeal from '../../components/ItemDeal'

export default function ListDeals() {
  return (
    <div className={s.container}>
      <ItemDeal/>
      <ItemDeal/>
      <ItemDeal/>
      <ItemDeal/>
      <ItemDeal/>
    </div>
  )
}
