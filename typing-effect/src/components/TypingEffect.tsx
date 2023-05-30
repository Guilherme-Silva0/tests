import { useEffect, useState } from 'react'

const TypingEffect = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [displayTextColor, setDisplayTextColor] = useState('text-gray-200')

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    const textColors = [
      'text-rose-600',
      'text-fuchsia-600',
      'text-purple-600',
      'text-sky-600',
      'text-emerald-600',
    ]

    let timer: number

    if (displayText === currentWord) {
      timer = setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        const randomIndex = Math.floor(Math.random() * textColors.length)
        setDisplayTextColor(textColors[randomIndex])
        setDisplayText('')
      }, 1500)
    } else if (displayText.length < currentWord.length) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1))
      }, 100)
    }

    return () => clearTimeout(timer)
  }, [currentWordIndex, displayText, words])

  return (
    <span className={`${displayTextColor}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export default TypingEffect
