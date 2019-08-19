const documentWindow = document;
const headerMenuItems = documentWindow.querySelectorAll(".header-menu_item");
const subMenuItems = documentWindow.querySelectorAll(".header-menu-sub");
const menuMobileButton = documentWindow.querySelector(".header-menu-mobile");
const headerMenuList = documentWindow.querySelector(".header-menu_list");
const headerLogoContainer = documentWindow.querySelector(".header-logo_container");
const subMenuGoBackButton  = documentWindow.querySelectorAll(".header-menu-sub_icon");

function changeImage (src) {
  documentWindow.querySelector(".header-menu-mobile_image").src = src
}

export function showMenuOnHover() {
  headerMenuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      subMenuItems.forEach(sub => {
        if (item.dataset.menu === sub.dataset.menu) {
          sub.classList.add("show-menu");
        }
      });
    });
    item.addEventListener("mouseleave", (e) => {
      subMenuItems.forEach(sub => {
        if (e.currentTarget.dataset.menu === item.dataset.menu) {
          sub.classList.remove("show-menu");
        }
      })
    })
  });
}

function closeMenu() {
  subMenuItems.forEach(sub => {
    if(sub.classList.contains("show-menu")) {
      sub.classList.remove("show-menu")
    }
  })
}

export function goBackSubMenu() {
  subMenuGoBackButton.forEach(item => {
    item.addEventListener("click", (e) => {
      subMenuItems.forEach(sub => {
        if(sub.dataset.menu === item.dataset.menu) {
          sub.style.transform="translateX(380px)";
          sub.style.visibility="hidden";
          setTimeout(() => closeMenu(), 500);
        }
      })
    })
  })


}

export function onOpenMenu() {
  headerMenuItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      subMenuItems.forEach(sub => {
        if(e.currentTarget.dataset.menu === sub.dataset.menu) {
          if(sub.classList.contains("show-menu")) {
            sub.classList.remove("show-menu")
          } else {
            closeMenu();
            subMenuItems.forEach(sub => {
              if(e.currentTarget.dataset.menu === sub.dataset.menu) {
                sub.style.transform="";
                sub.style.visibility="";
                sub.classList.add("show-menu");
              }
            });
          }
        }
      });
    })
  })
}

export function showMenuMobile() {
  menuMobileButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(headerMenuList.classList.contains("show-menu-mobile")) {
      headerMenuList.classList.remove("show-menu-mobile");
      changeImage("img/icon-menu.svg");
      hiddenLogo("flex");
      closeMenu();
    } else {
      headerMenuList.classList.add("show-menu-mobile");
      changeImage("img/cancel.svg");
      hiddenLogo("none");
    }
  })
}

export function hiddenLogo(value) {
  const currentWidth = document.documentElement.clientWidth;
  if(currentWidth < 501) {
    headerLogoContainer.style.display=value
  }

}



