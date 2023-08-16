import LoadingSVG from "./SVGs/LoadingSVG"

const LoadingOverlay = () => {
  return (
    <div className='fixed z-50 left-0 top-0 w-screen h-screen box-border bg-gray-200 flex justify-center items-center'>
      <LoadingSVG />
    </div>
  )
}

export default LoadingOverlay
