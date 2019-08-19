import {showSearchInput, closeSearchInput} from "./header-search";
import {showMenuOnHover, onOpenMenu, showMenuMobile, hiddenLogo, goBackSubMenu} from "./header-menu";

showSearchInput();
closeSearchInput();

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  onOpenMenu();
  goBackSubMenu();
} else {
  showMenuOnHover();
}
hiddenLogo();
showMenuMobile();
