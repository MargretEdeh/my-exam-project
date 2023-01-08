import React from 'react'
import "./errogame.css"
import { ErrorBoundary } from 'react-error-boundary'
import { useErrorHandler } from 'react-error-boundary'
import {AiFillWarning} from 'react-icons/ai'

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return(
        <div className='error-text' role="alert">
            <h1>Something went wrong: <AiFillWarning  style={{color: "red"}} /> </h1>
            <pre>{error.message}</pre>
            <button className='btn' onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

const TheButton = () => {
    const [color, setColor] = React.useState('white')
    const colors = ['red', 'yellow' , 'green', 'blue', 'purple' , 'orangered', 'pink' ] 
    const handleError = useErrorHandler()
    const handleClick = () => {
       try{
        const random = Math.floor(Math.random() * colors.length)
        setColor(colors[random])
        console.log(colors[random])
        if(colors[random] === 'red'){
            throw new Error('💥 Red color is not allowed ')
        } }catch(error){
            handleError(error)
        
       }
    }
    return (
        <div className={color}>
            <h1>Play Around with Random colors 🙂😎 </h1>
            <h2>Avoid the color Red 🎈 </h2>
            <button className='btn' onClick={handleClick}>random color</button>
        </div>
    )
}
export default function ErrorGame() {
    return (
        <div>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <TheButton />
            </ErrorBoundary>
        </div>
    )
}


 