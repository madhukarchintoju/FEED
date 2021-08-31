import React, { useState } from 'react'

const useDebounce = () => {
  const [typingTimeout, setTypingTimeout] = useState('')
  const debounce = (cb) => {
    clearTimeout(typingTimeout)

    const timeout = setTimeout(() => cb(), 800)
    setTypingTimeout(timeout)
  }
  return debounce
}

export default useDebounce
