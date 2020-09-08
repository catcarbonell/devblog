import Container from './container'
import Socials from './socials'

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-20">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center items-center content-center self-center">
          <Socials />
        </div>
      </Container>
    </footer>
  )
}