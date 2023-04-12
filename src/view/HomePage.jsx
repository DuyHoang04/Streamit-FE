import React, { useEffect, useState } from 'react'
export default function HomePage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    
  }, [])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}
