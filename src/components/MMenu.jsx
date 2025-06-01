
import {
  Button,
  MegaMenu,
  MegaMenuDropdown,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function MMenu() {
  return (
    <MegaMenu>
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink>
        </NavbarLink>
      </NavbarCollapse>
    </MegaMenu>
  );
}

export default MMenu