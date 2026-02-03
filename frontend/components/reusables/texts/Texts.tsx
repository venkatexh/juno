const SmallText = ({ children }: { children: string }) => {
  return (
    <p className="text-sm text-gray-400">
      {children}
    </p>
  )
}

const MediumText = ({ text }: { text: string }) => {
  return (
    <p className="text-base text-gray-400">
      {text}
    </p>
  )
}

const LargeText = ({ children }: { children: string }) => {
  return (
    <p className="text-lg text-gray-400">
      {children}
    </p>
  )
}

export { SmallText, MediumText, LargeText }