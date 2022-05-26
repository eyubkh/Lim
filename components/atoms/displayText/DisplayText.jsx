export default function DisplayText({ text, ...props }) {
  return (
    <>
      <p>{text}</p>
      <style jsx>{`
        p {
          text-align: ${props.subTitle ? 'right' : 'left'};
          font-size: ${props.title ? '16px' : '14px'};
        }
      `}</style>
    </>
  )
}
