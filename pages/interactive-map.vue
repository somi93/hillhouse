<template>
  <div></div>
</template>

<script setup></script>

<!--<template>-->
<!--  <v-row no-gutters justify="center" style="height: 100vh;background-color: #151515" align="center">-->
<!--    <div style="width: 100%;height: 100%">-->
<!--      <v-btn-->
<!--          flat-->
<!--          fab-->
<!--          icon-->
<!--          height="48px"-->
<!--          variant="tonal"-->
<!--          width="48px"-->
<!--          style="position: absolute;right: 12px;top: 12px;z-index: 1;"-->
<!--          :to="{name: 'index'}">-->
<!--        <v-icon size="28px" color="#fff" :icon="mdiClose"></v-icon>-->
<!--      </v-btn>-->
<!--      <panoramic-viewer-->
<!--          v-if="selectedRoom"-->
<!--          @changeRoom="changeRoom"-->
<!--          :room="selectedRoom">-->
<!--      </panoramic-viewer>-->
<!--    </div>-->
<!--  </v-row>-->
<!--</template>-->

<!--<script setup>-->
<!--import {ref} from 'vue';-->
<!--import {mdiClose} from '@mdi/js'-->
<!--import PanoramicViewer from "@/components/global/panoramic-viewer";-->

<!--const rooms = ref([-->
<!--  {-->
<!--    id: 1,-->
<!--    image: '/media/images/360/entry.jpg',-->
<!--    name: 'Ulaz',-->
<!--    paths: [-->
<!--      {-->
<!--        roomId: 2,-->
<!--        name: 'Dnevna Soba',-->
<!--        rotation: {-->
<!--          from: 247,-->
<!--          to: 355-->
<!--        }-->
<!--      }-->
<!--    ]-->
<!--  },-->
<!--  {-->
<!--    id: 2,-->
<!--    image: '/media/images/360/workshop.jpg',-->
<!--    name: 'Dnevna Soba',-->
<!--    paths: [-->
<!--      {-->
<!--        roomId: 1,-->
<!--        name: 'Ulaz',-->
<!--        rotation: {-->
<!--          from: 99,-->
<!--          to: 207-->
<!--        }-->
<!--      }-->
<!--    ]-->
<!--  },-->
<!--])-->
<!--const selectedRoom = ref(rooms.value[0]);-->
<!--const changeRoom = (marker) => {-->
<!--  selectedRoom.value = rooms.value.find(room => room.id === marker.roomId);-->
<!--}-->
<!--</script>-->