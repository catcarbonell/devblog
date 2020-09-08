import Container from './container'
import Socials from './socials'

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-20">
      <Container>
        <div className="flex flex-col justify-center items-center content-center self-center">
          <div className="mb-4">
            <h6>Find me elsewhere:</h6>
          </div>
          <Socials />
        </div>
      </Container>
    </footer>
  )
}