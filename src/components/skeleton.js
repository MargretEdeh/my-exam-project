import React from 'react'
import Skeleton from 'react-loading-skeleton'
import "./skeleton.css"


export default function SkeletonCard({card}) {
  return (
    Array(card).fill(0).map(each =>
        <div className='card' >
        <div className='img-section'>
            <Skeleton className='circle' circle />

        </div>
        <div className='text-section'>
            <Skeleton count={4} />
        </div>
    </div>
        )
   
  )
}
