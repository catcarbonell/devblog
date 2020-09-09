export default function PostTitle({ children }) {
    return (
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        {children}
      </h1>
    )
  }