<template>
  <div ref="mapEl" class="leaflet-map-root"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, nextTick } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const props = defineProps({
  // Array of { coords: [lat, lng], label: String, mapsLink: String }
  pins: { type: Array, required: true },
});

const mapEl = ref(null);
let map = null;

// Gold diamond SVG marker
function makeIcon(label) {
  return L.divIcon({
    className: "",
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -20],
    html: `
      <div class="lmap-pin">
        <svg viewBox="0 0 36 36" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="18,2 34,18 18,34 2,18" fill="#C9A84C" stroke="#fff" stroke-width="1.5"/>
        </svg>
        <span class="lmap-pin__label">${label}</span>
      </div>`,
  });
}

onMounted(async () => {
  await nextTick();
  if (!mapEl.value) return;

  // Centre view on all pins
  const lats = props.pins.map((p) => p.coords[0]);
  const lngs = props.pins.map((p) => p.coords[1]);
  const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;
  const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
  const zoom = props.pins.length > 1 ? 12 : 14;

  map = L.map(mapEl.value, {
    center: [centerLat, centerLng],
    zoom,
    zoomControl: true,
    scrollWheelZoom: false,
    dragging: true,
    attributionControl: false,
  });

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    { maxZoom: 19 }
  ).addTo(map);

  map.invalidateSize();

  // Compact attribution bottom-right
  L.control.attribution({ prefix: false, position: "bottomright" }).addTo(map);
  map.attributionControl.addAttribution(
    '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/" target="_blank">CARTO</a>'
  );

  props.pins.forEach((pin) => {
    const marker = L.marker(pin.coords, { icon: makeIcon(pin.label) }).addTo(map);
    if (pin.mapsLink) {
      marker.bindPopup(
        `<a href="${pin.mapsLink}" target="_blank" rel="noopener" class="lmap-popup-link">${pin.label} — otvori na mapi ↗</a>`,
        { closeButton: false }
      );
      marker.on("click", () => marker.openPopup());
    }
  });
});

onBeforeUnmount(() => {
  if (map) {
    map.remove();
    map = null;
  }
});
</script>

<style>
/* Global — Leaflet popup override */
.leaflet-popup-content-wrapper {
  border-radius: 6px;
  padding: 0;
  background: rgba(255, 253, 249, 0.96);
  border: 1px solid rgba(95, 90, 82, 0.12);
  box-shadow: 0 8px 24px rgba(36, 22, 13, 0.14);
}
.leaflet-popup-content {
  margin: 0;
  padding: 0;
}
.leaflet-popup-tip-container {
  display: none;
}
.lmap-popup-link {
  display: block;
  padding: 10px 16px;
  color: var(--brand-gold, #c9a84c);
  text-decoration: none;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
}
.lmap-pin {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}
.lmap-pin__label {
  background: rgba(255, 253, 249, 0.92);
  border: 1px solid rgba(95, 90, 82, 0.1);
  padding: 2px 7px;
  font-size: 0.68rem;
  letter-spacing: 0.07em;
  color: #2a1f14;
  white-space: nowrap;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}
</style>

<style scoped>
.leaflet-map-root {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
