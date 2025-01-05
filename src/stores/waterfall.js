import { defineStore } from 'pinia';
import { ref, watch } from 'vue'
import imagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'
import { useLighthouseStore } from '@/stores/lightHouseList.js'

export const useWaterfallStore = defineStore('waterfall', () => {
  const lighthouseStore = useLighthouseStore()
  const masonryContainer = ref(null)
let masonryInstance = null

// 初始化 Masonry 佈局
const initMasonry = () => {
  if (!masonryContainer.value) return;

  imagesLoaded(masonryContainer.value, () => {
      masonryInstance = new Masonry(masonryContainer.value, {
          itemSelector: '.col-6, .col-lg-4',
          percentPosition: true,
      });
      masonryInstance.layout(); // 確保初始佈局
  });
};


  // 監測資料改變並重新佈局
  watch(
    () => lighthouseStore.lighthouses,
    () => {
      if (masonryInstance) {
        masonryInstance.destroy(); // 銷毀舊的 Masonry 實例
        masonryInstance = null; // 重置 instance，防止重複初始化
      }
      initMasonry(); // 重新初始化 Masonry
    },
    { immediate: true } // 立即監測
  );


return {
  initMasonry,
  masonryContainer
}
})
