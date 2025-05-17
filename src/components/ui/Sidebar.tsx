import { routes } from 'constants/routesConstants'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

interface ItemProps extends ISidebarItem {
  setOpen: Dispatch<SetStateAction<boolean>>
}

interface ISidebarItem {
  title: string
  href: string
}

const sidebarItems: ISidebarItem[] = [
  {
    title: 'Dashboard',
    href: routes.DASHBOARD_PREFIX,
  },
  {
    title: 'Users',
    href: `${routes.DASHBOARD_PREFIX}/users`,
  },
  {
    title: 'Roles',
    href: `${routes.DASHBOARD_PREFIX}/roles`,
  },
  {
    title: 'Products',
    href: `${routes.DASHBOARD_PREFIX}/products`,
  },
  {
    title: 'Orders',
    href: `${routes.DASHBOARD_PREFIX}/orders`,
  },
]

const Item: FC<ItemProps> = ({ href, setOpen, title }) => {
  return (
    <li className="mb-4">
      <NavLink
        className="text-decoration-none"
        to={href}
        onClick={() => setOpen(false)}
      >
        {title}
      </NavLink>
    </li>
  )
}

const Sidebar: FC = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button
        className="sidebar_btn-menu btn-dark text-light rounded-0 d-flex justify-content-center align-items-center"
        type="button"
        onClick={handleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-emoji-heart-eyes"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fillRule="evenodd"
            d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"
          />
        </svg>
      </Button>
      <Offcanvas
        show={open}
        onHide={handleClose}
        className="offcanvas offcanvas-start"
        tabIndex={-1}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="/images/logo.png" width={123} alt="Skillup Mentor" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="ps-0 list-unstyled">
            {sidebarItems.map((item, index) => (
              <Item
                key={index}
                title={item.title}
                href={item.href}
                setOpen={setOpen}
              />
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Sidebar
