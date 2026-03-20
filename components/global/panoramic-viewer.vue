<template>
  <div></div>
</template>

<script setup></script>


<!--<template>-->
<!--  <div ref="container" style="height: 100%;width: 100%;z-index: 8"></div>-->
<!--  <div-->
<!--      class="py-2 px-4 rounded"-->
<!--      style="position: absolute;left: 12px;top: 12px;z-index: 1;background-color: rgba(0,0,0,.75)">-->
<!--    <p class="text-center text-white text-h5">-->
<!--      {{ room.name }}-->
<!--    </p>-->
<!--  </div>-->
<!--  <template v-for="marker in markers" v-if="!isEntering">-->
<!--    <div-->
<!--        v-if="marker.position > 0 && marker.position < 100"-->
<!--        :style="[{-->
<!--        'left': `calc(${marker.position}%)`-->
<!--      }]"-->
<!--        @click="goToRoom(marker)"-->
<!--        class="pulsating-circle">-->
<!--      <span-->
<!--          :style="`left: calc(${marker.position}% - 100px)`"-->
<!--          style="position: absolute;top: -32px;z-index: 2;text-shadow: 1px 1px #000;width: 200px"-->
<!--          class="text-white text-center text-h6">-->
<!--        {{ marker.name }}-->
<!--      </span>-->
<!--      <v-icon :icon="mdiChevronUp" style="position: absolute;left: 4px;top: 4px;z-index: 2;"></v-icon>-->
<!--    </div>-->
<!--  </template>-->
<!--</template>-->

<!--<script setup>-->
<!--import {computed, watch} from 'vue';-->
<!--import {mdiChevronLeft, mdiChevronUp, mdiChevronRight, mdiChevronDown} from '@mdi/js'-->

<!--const props = defineProps({-->
<!--  room: {-->
<!--    type: Object,-->
<!--    required: true-->
<!--  }-->
<!--})-->
<!--const emit = defineEmits(['changeRoom'])-->
<!--import {ref, onMounted, onUnmounted} from 'vue';-->
<!--import * as THREE from 'three';-->

<!--const container = ref(null);-->
<!--let camera, scene, renderer, mesh;-->
<!--let mouseX = 0, mouseY = 0;-->
<!--let isDragging = false;-->
<!--const isEntering = ref(false);-->
<!--const scale = ref(1);-->
<!--const rotation = ref(0);-->
<!--onMounted(() => {-->
<!--  createScene();-->
<!--});-->

<!--onUnmounted(() => {-->
<!--  // Clean up when component is unmounted-->
<!--  renderer.dispose();-->

<!--});-->

<!--const goToRoom = (marker) => {-->
<!--  container.value.classList.add('three-container');-->
<!--  isEntering.value = true;-->
<!--  setTimeout(() => {-->
<!--    isEntering.value = false;-->
<!--    container.value.classList.remove('three-container');-->
<!--    emit('changeRoom', marker);-->
<!--  }, 700)-->
<!--}-->

<!--function onMouseDown(event) {-->
<!--  isDragging = true;-->
<!--  mouseX = event.clientX;-->
<!--  mouseY = event.clientY;-->
<!--}-->

<!--function onMouseMove(event) {-->
<!--  if (!isDragging) return;-->

<!--  const deltaX = event.clientX - mouseX;-->
<!--  const deltaY = event.clientY - mouseY;-->

<!--  mouseX = event.clientX;-->
<!--  mouseY = event.clientY;-->

<!--  if(!isEntering.value){-->
<!--    camera.rotation.y += deltaX * 0.005;-->
<!--  }-->
<!--  let rotation2 = THREE.MathUtils.radToDeg(camera.rotation.y);-->
<!--  if (rotation2 < -360) rotation2 = rotation2 + 360;-->
<!--  if (rotation2 < 0) rotation2 = 360 + rotation2;-->
<!--  if (rotation2 > 360) rotation2 = rotation2 - 360;-->
<!--  if(!isEntering.value){-->
<!--    rotation.value = rotation2;-->
<!--  }-->
<!--  // camera.rotation.x += deltaY * 0.001;-->
<!--}-->

<!--function onMouseUp() {-->
<!--  isDragging = false;-->
<!--}-->

<!--const createScene = () => {-->
<!--  // Create a new Three.js scene-->
<!--  scene = new THREE.Scene();-->

<!--  // Create a new camera-->
<!--  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);-->
<!--  camera.target = new THREE.Vector3(0, 0, 0);-->

<!--  // Create a new renderer-->
<!--  renderer = new THREE.WebGLRenderer();-->
<!--  const rect = container.value.getBoundingClientRect();-->
<!--  renderer.setSize(rect.width, rect.height);-->
<!--  container.value.appendChild(renderer.domElement);-->

<!--  // Load 360-degree image-->
<!--  const loader = new THREE.TextureLoader();-->
<!--  const texture = loader.load(props.room.image);-->

<!--  // Create a sphere geometry-->
<!--  const geometry = new THREE.SphereGeometry(500, 60, 40);-->
<!--  geometry.scale(-1, 1, 1);-->

<!--  // Create a material-->
<!--  const material = new THREE.MeshBasicMaterial({map: texture});-->

<!--  // Create a mesh-->
<!--  mesh = new THREE.Mesh(geometry, material);-->

<!--  // Add mesh to the scene-->
<!--  scene.add(mesh);-->

<!--  // Adjust camera position-->
<!--  camera.position.set(0, 0, 0.1);-->


<!--  // Handle mouse events-->
<!--  container.value.addEventListener('mousedown', onMouseDown);-->
<!--  container.value.addEventListener('mousemove', onMouseMove);-->
<!--  container.value.addEventListener('mouseup', onMouseUp);-->

<!--  // Render the scene-->
<!--  const animate = () => {-->
<!--    requestAnimationFrame(animate);-->
<!--    renderer.render(scene, camera);-->
<!--  };-->

<!--  animate();-->
<!--}-->

<!--const markers = computed(() => {-->
<!--  return (props.room.paths || []).map(path => {-->
<!--    const rotationDistance = path.rotation.to - path.rotation.from;-->
<!--    const position = 100 - (100 / (rotationDistance / (path.rotation.to - rotation.value)));-->
<!--    return {position, ...path}-->
<!--  });-->
<!--})-->

<!--watch(-->
<!--    () => props.room,-->
<!--    () => {-->
<!--      rotation.value = 0;-->
<!--      renderer.dispose();-->
<!--      container.value.removeChild(renderer.domElement);-->
<!--      createScene();-->
<!--    }-->
<!--)-->
<!--</script>-->

<!--<style lang="scss">-->
<!--.pulsating-circle {-->
<!--  position: absolute;-->
<!--  top: calc(50% - 20px);-->
<!--  z-index: 1;-->
<!--  border: 4px solid #fff;-->
<!--  border-radius: 50%;-->
<!--  width: 40px;-->
<!--  height: 40px;-->
<!--  transform: translateX(-50%) translateY(-50%);-->
<!--  cursor: pointer;-->

<!--  &:before {-->
<!--    content: '';-->
<!--    position: relative;-->
<!--    display: block;-->
<!--    width: 300%;-->
<!--    height: 300%;-->
<!--    box-sizing: border-box;-->
<!--    margin-left: -100%;-->
<!--    margin-top: -100%;-->
<!--    border-radius: 45px;-->
<!--    background-color: #01a4e9;-->
<!--    animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;-->
<!--  }-->

<!--  &:after {-->
<!--    content: '';-->
<!--    position: absolute;-->
<!--    left: 0;-->
<!--    top: 0;-->
<!--    display: block;-->
<!--    width: 100%;-->
<!--    height: 100%;-->
<!--    background-color: white;-->
<!--    border-radius: 15px;-->
<!--    box-shadow: 0 0 8px rgba(0, 0, 0, .3);-->
<!--    animation: pulse-dot 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -.4s infinite;-->
<!--  }-->
<!--}-->

<!--@keyframes pulse-ring {-->
<!--  0% {-->
<!--    transform: scale(.33);-->
<!--  }-->
<!--  80%, 100% {-->
<!--    opacity: 0;-->
<!--  }-->
<!--}-->

<!--@keyframes pulse-dot {-->
<!--  0% {-->
<!--    transform: scale(.8);-->
<!--  }-->
<!--  50% {-->
<!--    transform: scale(1);-->
<!--  }-->
<!--  100% {-->
<!--    transform: scale(.8);-->
<!--  }-->
<!--}-->



<!--.three-container {-->
<!--  scale: 2;-->
<!--  transition: all .85s ease;-->
<!--}-->
<!--</style>-->