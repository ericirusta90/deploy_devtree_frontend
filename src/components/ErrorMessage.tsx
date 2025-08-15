type ErrorMessageProps = {
    children: React.ReactNode
}

export default function ErrorMessage({ children } : ErrorMessageProps ) {
  return (
    <p className=" text-red-600 px-3 text-sm ">{children}</p>
  )
}
