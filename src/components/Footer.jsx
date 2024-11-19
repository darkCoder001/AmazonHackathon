

import { Layers } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Features',
      links: ['Analytics', 'Team Collaboration', 'Mobile App', 'Integrations'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Tutorials', 'Blog', 'Support Center'],
    },
    {
      title: 'Contact',
      links: ['Sales', 'Partnership', 'Career', 'Press'],
    },
    {
      title: 'About',
      links: ['Our Story', 'Team', 'Investors', 'Terms of Service'],
    },
  ]

  return (
    <footer className="w-full py-12 bg-[#64748b] bg-opacity-70  text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="cursor-pointer text-muted-foreground transition-transform transform duration-300 hover:scale-110 hover:text-primary"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-muted">
          <div className="flex items-center mb-4 md:mb-0">
            <Layers className="h-8 w-8 mr-2 text-primary" />
            <span className="text-xl font-bold">X-MCF</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} X-MCF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
