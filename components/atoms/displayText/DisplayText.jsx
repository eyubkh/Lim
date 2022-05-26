export default function DisplayText({ text, ...props }) {
  return (
    <>
      <p className={text}>{text}</p>
      <style jsx>{`
        .${text} {
          text-align: ${props.subTitle ? 'right' : 'left'};
          font-size: ${props.title ? '16px' : '14px'};
        }
      `}</style>
    </>
  )
}
