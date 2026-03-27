import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

const HERO_ROUTE_NAMES = ["index", "hill-house-1", "hill-house-2"];
const VILLA_ROUTE_NAMES = ["hill-house-1", "hill-house-2"];

const getBaseRouteName = (routeName) => String(routeName ?? "").split("___")[0];

export const useSectionNavigation = () => {
  const localePath = useLocalePath();
  const route = useRoute();
  const router = useRouter();
  const { t } = useI18n({ useScope: "global" });

  const currentRouteName = computed(() => getBaseRouteName(route.name));
  const isHeroRoute = computed(() => HERO_ROUTE_NAMES.includes(currentRouteName.value));
  const isVillaRoute = computed(() => VILLA_ROUTE_NAMES.includes(currentRouteName.value));

  const menuItems = computed(() => {
    if (isVillaRoute.value) {
      return [
        { title: "Hill House", to: localePath("/"), back: true },
        { title: t("layout.menu.villaOverview"), href: "#about" },
        { title: t("layout.menu.amenities"), href: "#amenities" },
        { title: t("layout.menu.testimonials"), href: "#testimonials" },
        { title: t("layout.menu.gallery"), to: localePath(`/${currentRouteName.value}/gallery`) },
        { title: t("layout.menu.pricing"), to: localePath(`/${currentRouteName.value}/pricing`) },
        { title: t("layout.menu.map"), href: "#map" },
      ];
    }

    return [
      { title: t("layout.menu.about"), href: "#about" },
      { title: t("layout.menu.villas"), href: "#villas" },
      { title: t("layout.menu.occasions"), href: "#occasions" },
      { title: t("layout.menu.testimonials"), href: "#testimonials" },
      { title: t("layout.menu.gallery"), to: localePath("/gallery") },
      { title: t("layout.menu.pricing"), to: localePath("/pricing") },
      { title: t("layout.menu.map"), href: "#map" },
    ];
  });

  const navigateToSection = (target) => {
    if (isHeroRoute.value) {
      const element = document.querySelector(target);
      if (!element) {
        return;
      }

      window.scrollTo({
        top: element.offsetTop - 112,
        left: 0,
        behavior: "smooth",
      });
      return;
    }

    router.push({ path: localePath("/"), hash: target });
  };

  return {
    menuItems,
    isHeroRoute,
    isVillaRoute,
    navigateToSection,
  };
};