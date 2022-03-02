export default function Button(props) {
  const { className, interaction, color } = props
  const title = className[0].toUpperCase() + className.slice(1)

  return (
    <button
      title={title}
      className="button"
      onClick={interaction}
      style={{ backgroundColor: color || '#747171' }}
    >
      <i className={`fa-solid fa-${className}`}></i>
    </button>
  )
}