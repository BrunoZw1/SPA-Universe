import { Router } from "./router.js"
import { bgHome, bgUniverse, bgExploration, btnInfo } from "./elements.js"
import { Backgrounds } from "./events.js"

const backgrounds = Backgrounds({
  bgHome,
  bgUniverse,
  bgExploration,
  btnInfo
});

backgrounds.backgroundHome()


if (bgHome) {
  bgHome.addEventListener("click", function () {
    backgrounds.backgroundHome();
  });
}

if (bgUniverse) {
  bgUniverse.addEventListener("click", function () {
    backgrounds.backgroundUniverse();
  });
}

if (bgExploration) {
  bgExploration.addEventListener("click", function () {
    backgrounds.backgroundExploration();
  });
}

if (btnInfo) {
  btnInfo.addEventListener("click", function() {
    backgrounds.backgroundUniverse()
  })
}

const router = new Router()

router.add('/', "./pages/home.html")
router.add('/universe', './pages/universe.html')
router.add('/exploration', './pages/exploration.html')


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
