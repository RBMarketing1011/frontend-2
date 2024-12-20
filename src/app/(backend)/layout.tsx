import Sidebar from '@/components/organism/Sidebar'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function Layout ({ children }: Readonly<{ children: React.ReactNode }>)
{

  return (
    <Sidebar>
      { children }
    </Sidebar>
  )
}

