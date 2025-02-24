<script setup>
import { ref } from "vue";

//  bg small image
import bgSmall1 from "../assets/images/switcher/small/background/bg1.jpg";
import bgSmall2 from "../assets/images/switcher/small/background/bg2.jpg";
import bgSmall3 from "../assets/images/switcher/small/background/bg3.jpg";
import bgSmall4 from "../assets/images/switcher/small/background/bg4.jpg";
import bgSmall5 from "../assets/images/switcher/small/background/bg5.jpg";
import bgSmall6 from "../assets/images/switcher/small/background/bg6.jpg";
import bgSmall7 from "../assets/images/switcher/small/background/bg7.jpg";

// bg large iamge
import bgLarge1 from "../assets/images/switcher/large/background/bg1.jpg";
import bgLarge2 from "../assets/images/switcher/large/background/bg2.jpg";
import bgLarge3 from "../assets/images/switcher/large/background/bg3.jpg";
import bgLarge4 from "../assets/images/switcher/large/background/bg4.jpg";
import bgLarge5 from "../assets/images/switcher/large/background/bg5.jpg";
import bgLarge6 from "../assets/images/switcher/large/background/bg6.jpg";
import bgLarge7 from "../assets/images/switcher/large/background/bg7.jpg";

//  bg pattern image
import patternSmall1 from "../assets/images/switcher/small/pattern/pt1.jpg";
import patternSmall2 from "../assets/images/switcher/small/pattern/pt2.jpg";
import patternSmall3 from "../assets/images/switcher/small/pattern/pt3.jpg";
import patternSmall4 from "../assets/images/switcher/small/pattern/pt4.jpg";
import patternSmall5 from "../assets/images/switcher/small/pattern/pt5.jpg";
import patternSmall6 from "../assets/images/switcher/small/pattern/pt6.jpg";
import patternSmall7 from "../assets/images/switcher/small/pattern/pt7.jpg";

//  bg large pattern image
import patternLarge1 from "../assets/images/switcher/large/pattern/pt1.jpg";
import patternLarge2 from "../assets/images/switcher/large/pattern/pt2.jpg";
import patternLarge3 from "../assets/images/switcher/large/pattern/pt3.jpg";
import patternLarge4 from "../assets/images/switcher/large/pattern/pt4.jpg";
import patternLarge5 from "../assets/images/switcher/large/pattern/pt5.jpg";
import patternLarge6 from "../assets/images/switcher/large/pattern/pt6.jpg";
import patternLarge7 from "../assets/images/switcher/large/pattern/pt7.jpg";
import router from "../router";
const bgThemeColors = ref([
  {
    bgColor: "skin-1",
    skin: "color_1",
    color: "bg-color-1",
    colorValue: "#7da640",
    bgSmall: bgSmall1,
    bgLarge: bgLarge1,
    patternSmall: patternSmall1,
    patternLarge: patternLarge1,
  },
  {
    bgColor: "skin-2",
    skin: "color_2",
    color: "bg-color-2",
    colorValue: "#fe9f10",
    bgSmall: bgSmall2,
    bgLarge: bgLarge2,
    patternSmall: patternSmall2,
    patternLarge: patternLarge2,
  },
  {
    bgColor: "skin-3",
    skin: "color_3",
    color: "bg-color-3",
    colorValue: "#ee2737",
    bgSmall: bgSmall3,
    bgLarge: bgLarge3,
    patternSmall: patternSmall3,
    patternLarge: patternLarge3,
  },
  {
    bgColor: "skin-4",
    skin: "color_4",
    color: "bg-color-4",
    colorValue: "#a75d5d",
    bgSmall: bgSmall4,
    bgLarge: bgLarge4,
    patternSmall: patternSmall4,
    patternLarge: patternLarge4,
  },
  {
    bgColor: "skin-5",
    skin: "color_5",
    color: "bg-color-5",
    colorValue: "#ea5c2b",
    bgSmall: bgSmall5,
    bgLarge: bgLarge5,
    patternSmall: patternSmall5,
    patternLarge: patternLarge5,
  },
  {
    bgColor: "skin-6",
    skin: "color_6",
    color: "bg-color-6",
    colorValue: "#a9907e",
    bgSmall: bgSmall6,
    bgLarge: bgLarge6,
    patternSmall: patternSmall6,
    patternLarge: patternLarge6,
  },
  {
    bgColor: "skin-7",
    skin: "color_7",
    color: "bg-color-7",
    colorValue: "#87805e",
    bgSmall: bgSmall7,
    bgLarge: bgLarge7,
    patternSmall: patternSmall7,
    patternLarge: patternLarge7,
  },
]);
const openSwitcher = ref(false);
const addbgActive = ref(0);
const addLayoutActive = ref("wide-layout");
const addHeaderActive = ref("sticky-header");
const addBgImageActive = ref(null);
const addBgColorActive = ref(null);
const addpatternImageActive = ref(null);

function bgColorButton(ind, skin) {
  addbgActive.value = ind;
  document.body.setAttribute("data-color", skin);
  localStorage.setItem("skin", skin);
  localStorage.setItem("addbgActive", ind);
}

function themeHandlerLayout(layout) {
  document.body.setAttribute("data-layout", layout);
  addLayoutActive.value = layout;
  localStorage.setItem("layout", layout);
}

// sticky-header
function headerPosition(position) {
  let header = document.querySelectorAll(".main-bar-wraper");
  if (header !== null) {
    header.forEach((ell) => {
      position === "sticky-no"
        ? ell.classList.add("sticky-no")
        : ell.classList.remove("sticky-no");
    });
  }

  addHeaderActive.value = position;
  localStorage.setItem("header", position);
}

//  theme

function backgroundColor(ind, color) {
  addBgColorActive.value = ind;
  addBgImageActive.value = null;
  addpatternImageActive.value = null;
  document.body.setAttribute("style", `background:${color}`);
  localStorage.setItem("bgColor", color);
  localStorage.setItem("bgImgInd", null);
  localStorage.setItem("bgPatternIng", null);
  localStorage.setItem("bgColorInd", ind);
  localStorage.setItem("background", "bgcolor");
}

//  bg image

function bgImage(ind, img) {
  addBgImageActive.value = ind;
  addpatternImageActive.value = null;
  addBgColorActive.value = null;
  document.body.setAttribute("style", `background-image: url(${img});`);
  localStorage.setItem("bgimg", img);
  localStorage.setItem("bgColorInd", null);
  localStorage.setItem("bgPatternIng", null);
  localStorage.setItem("bgImgInd", ind);
  localStorage.setItem("background", "bgimg");
}

//  bg pattern
function bgpattern(ind, img) {
  addpatternImageActive.value = ind;
  addBgImageActive.value = null;
  addBgColorActive.value = null;
  document.body.setAttribute("style", `background-image: url(${img});`);
  localStorage.setItem("bgPattern", img);
  localStorage.setItem("bgColorInd", null);
  localStorage.setItem("bgImgInd", null);
  localStorage.setItem("bgPatternIng", ind);
  localStorage.setItem("background", "bgpattern");
}

function getCookie() {
  let bgActive = localStorage.getItem("addbgActive");
  let skin = localStorage.getItem("skin");
  let layout = localStorage.getItem("layout");
  let position = localStorage.getItem("header");
  let bgColor = localStorage.getItem("bgColor");
  let bgColorInd = localStorage.getItem("bgColorInd");
  let bgimg = localStorage.getItem("bgimg");
  let bgimgInd = localStorage.getItem("bgImgInd");
  let bgPatter = localStorage.getItem("bgPattern");
  let bgPatternInd = localStorage.getItem("bgPatternIng");
  let backgroundValue = localStorage.getItem("background");
  document.body.setAttribute("data-color", skin === null ? "color_1" : skin);
  addbgActive.value = Number(bgActive) === null ? 0 : Number(bgActive);
  document.body.setAttribute("data-layout", layout === null ? "" : layout);
  addLayoutActive.value = layout === null ? "wide-layout" : layout;

  let header = document.getElementsByClassName("main-bar-wraper");

  if (header !== null) {
    for (let i = 0; i < header.length; i++) {
      header[i].classList.add(position);
    }
  }
  addHeaderActive.value = position === null ? "sticky-header" : position;

  addBgColorActive.value = bgColorInd === null ? "" : Number(bgColorInd);
  addBgImageActive.value = bgimgInd === null ? "" : Number(bgimgInd);
  addpatternImageActive.value =
    bgPatternInd === null ? "" : Number(bgPatternInd);

  switch (backgroundValue) {
    case "bgcolor":
      document.body.setAttribute(
        "style",
        `background:${bgColor === null ? "" : bgColor}`
      );
      break;
    case "bgimg":
      document.body.setAttribute(
        "style",
        `background-image: url(${bgimg === null ? "" : bgimg});`
      );
      break;
    case "bgpattern":
      document.body.setAttribute(
        "style",
        `background-image: url(${bgPatter === null ? "" : bgPatter});`
      );
      break;
    default:
      break;
  }
}

getCookie();
router.afterEach(() => {
  getCookie();
});

const deleteAllCookie = () => {
  localStorage.setItem("addbgActive", 0);
  localStorage.setItem("skin", "color_1");
  localStorage.setItem("layout", "wide-layout");
  localStorage.setItem("header", "sticky-header");
  localStorage.setItem("bgColor", "");
  localStorage.setItem("bgColorInd", null);
  localStorage.setItem("bgImgInd", null);
  localStorage.setItem("bgPatternIng", null);
  window.location.reload();
};
</script>

<template>
  <div
    id="dzSwitcher-right"
    class="styleswitcher"
    :style="`left: ${
      openSwitcher === true ? '30px' : '-450px'
    }; transition: all .4s;`"
  >
    <div class="overlay-switch"></div>
    <div class="switcher-btn-bx" @click="openSwitcher = !openSwitcher">
      <a href="javascript:void(0);" class="switch-btn closed">
        <span class="fas fa-cog"></span>
      </a>
    </div>
    <div class="styleswitcher-inner">
      <div class="sw-main-title">
        Theme Setting
        <a
          href="javascript:void(0);"
          class="dez-page btn btn-primary btn-sm"
          @click="deleteAllCookie"
          >Delete All Cookie</a
        >
      </div>
      <div class="theme-design theme-option row" opt="themeFullColor">
        <div class="theme-box col-md-12">
          <h5 class="switcher-title">
            <span>Theme</span>
          </h5>
          <ul val="themeFullColor" class="color-skins theme-panel-save">
            <li
              v-for="(item, index) in bgThemeColors"
              :class="addbgActive === index ? 'active' : ''"
              :key="index"
              @click="bgColorButton(index, item.skin)"
            >
              <a
                :class="`theme-skin ${item.bgColor} theme-color`"
                href="javascript:void(0);"
                data-color-theme="skin-1"
                data-logo-selector=".logo-dark img, .logo-white img, .layout-dark .header .logo-dark img"
                data-logo-image="assets/images/logo.png, assets/images/logo-white.png, assets/images/logo-white.png"
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="theme-design theme-option row theme-layout-wrapper"
        opt="themeLayout"
      >
        <div class="theme-box col-md-12">
          <h5 class="switcher-title">
            <span>Theme Layout</span>
          </h5>
          <ul val="themeLayout" class="layout layout-view theme-panel-save">
            <li
              :class="`wide-layout ${
                addLayoutActive === 'wide-layout' ? 'active' : ''
              }`"
              @click="themeHandlerLayout('wide-layout')"
            >
              <a href="javascript:void(0);" dir="wide-layout">
                <div></div>
                <span>Wide</span>
              </a>
            </li>
            <li
              :class="`boxed ${addLayoutActive === 'boxed' ? 'active' : ''}`"
              @click="themeHandlerLayout('boxed')"
            >
              <a href="javascript:void(0);" dir="boxed">
                <div>
                  <span></span>
                </div>
                <span>Boxed</span>
              </a>
            </li>
            <li
              :class="`frame ${addLayoutActive === 'frame' ? 'active' : ''}`"
              @click="themeHandlerLayout('frame')"
            >
              <a href="javascript:void(0);" dir="frame">
                <div>
                  <span></span>
                </div>
                <span>Frame</span>
              </a>
            </li>
          </ul>
          <div
            id="ThemeRangeSlider"
            class="price-slide-2 range-slider px-2 mb-3"
            style="display: none"
          >
            <div class="price">
              <input
                type="text"
                id="FramePadding"
                class="amount"
                readonly=""
                value="20px"
              />
              <div id="slider-range-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="theme-design theme-option row theme-view-wrapper">
        <div class="col-lg-12 theme-box">
          <h5 class="switcher-title">
            <span>Header</span>
          </h5>
          <ul
            val="headerOption"
            class="tab-checkbx header-view theme-panel-save"
          >
            <li
              :class="`header-fixed ${
                addHeaderActive === 'sticky-header' ? 'active' : ''
              }`"
              @click="headerPosition('sticky-header')"
            >
              <a href="javascript:void(0);">Fixed</a>
            </li>
            <li
              :class="`header-static ${
                addHeaderActive === 'sticky-no' ? 'active' : ''
              }`"
              @click="headerPosition('sticky-no')"
            >
              <a href="javascript:void(0);">Static</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="theme-design row mb-0 theme-background-wrapper"
        :style="`display: ${addLayoutActive !== 'wide-layout' ? '' : 'none'}`"
      >
        <div
          class="col-md-12 theme-box theme-option mb-4"
          opt="backgroundColor"
        >
          <h5 class="switcher-title">
            <span>Background Color</span>
          </h5>
          <ul val="backgroundColor" class="bg-color-switcher theme-panel-save">
            <li
              v-for="(item, ind) in bgThemeColors"
              :key="ind"
              :class="addBgColorActive === ind ? 'active' : ''"
              @click="backgroundColor(ind, item.colorValue)"
            >
              <a :class="item.color" href="javascript:void(0);"></a>
            </li>
          </ul>
        </div>
        <div
          class="col-md-12 theme-box theme-option mb-4"
          opt="backgroundImage"
        >
          <h5 class="switcher-title">
            <span>Background Image</span>
          </h5>
          <ul
            val="backgroundImage"
            class="background-switcher theme-panel-save"
          >
            <li
              v-for="(item, ind) in bgThemeColors"
              :key="ind"
              :class="addBgImageActive === ind ? 'active' : ''"
              @click="bgImage(ind, item.bgLarge)"
            >
              <img
                :src="item.bgSmall"
                dir="assets/images/switcher/large/background/bg1.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div class="col-md-12 theme-box theme-option" opt="backgroundPattern">
          <h5 class="switcher-title">
            <span>Background Pattern</span>
          </h5>
          <ul val="backgroundPattern" class="pattern-switcher theme-panel-save">
            <li
              v-for="(item, ind) in bgThemeColors"
              :key="ind"
              @click="bgpattern(ind, item.patternLarge)"
              :class="addpatternImageActive === ind ? 'active' : ''"
            >
              <img
                :src="item.patternSmall"
                dir="assets/images/switcher/large/pattern/pt1.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 500px) {
  #dzSwitcher-right {
    display: none;
  }
}
</style>
