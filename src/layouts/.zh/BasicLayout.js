import { Footer } from '@/components/.zh/Footer'

export function BasicLayout({ children }) {
  return (
    <>
      <main className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">{children}</main>
      <Footer />
    </>
  )
}
