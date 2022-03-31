import Header from './header'
import Footer from './footer'

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div id="app">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}