export default function TextField({ title, subTitle }) {
  return (
    <>
      <div>
        <label>{title}</label>
        <input />
        <span>{subTitle}</span>
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          width: 350px;
        }
        span {
          text-align: right;
        }
        input {
          border-radius: 40px;
          border: 1px solid #00000055;
          padding: 5px 10px;
          outline: none;
        }
      `}</style>
    </>
  )
}
