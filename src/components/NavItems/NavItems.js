import { Link } from './NavItems.styled';

import { NavItemsList } from './NavItems.styled';

export function NavItems() {
  return (
    <>
      <nav>
        <NavItemsList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="movies">Movies</Link>
          </li>
        </NavItemsList>
      </nav>
    </>
  );
}
