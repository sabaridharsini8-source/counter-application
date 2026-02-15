import { useState } from "react";

function Counter()
{
    var[count,setcount]=useState(0)

    const increment=()=>
    {
        setcount(count+1)
    }

    const decrement=()=>
    {
        if (count > 0) {
        setcount(count - 1);
        }
    }

    const reset=()=>
    {
        setcount(0)
    }

    return(
        <div className="container">
            <h1>Counter Application</h1>
            <h2>{count}</h2>
            {
                count === 0 &&(
                    <p className="warning">⚠️ Minimum Limit Reached</p>
                )
            }
            <button class="btn-1" onClick={increment}>Increment</button>
            <button class="btn-2" onClick={decrement}>Decrement</button>
            <button class="btn-3" onClick={reset}>Reset</button>
            </div>
    )
}

export default Counter