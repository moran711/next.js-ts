export const menu: MenuItemType[] = [
  {
    text: 'Main',
    link: '/'
  },
  {
    text: 'Matches calendar',
    link: '/calendar'
  },
  {
    text: 'News',
    link: '/news'
  },
  {
    text: 'Fans',
    link: '/fans'
  },
  {
    text: 'Contacts',
    link: '/contacts'
  },
  {
    text: 'Admin',
    link: '/admin'
  }
]

export interface MenuItemType {
  link: string,
  text: string
}