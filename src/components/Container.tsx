import Navigation from "./Navigation"
import Footer from "./Footer"

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
