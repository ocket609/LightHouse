// stores/lighthouse.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { $get } from '@/api/util/axiosInstance';
import debounce from 'lodash/debounce';

export const useLighthouseStore = defineStore('lighthouse', () => {
  // 使用 ref 定義 state
  const lighthouses = ref([]);  // 初始化空数组
	const lighthousesMobile = ref([]);
  const isLoading = ref(false);
  // 定義 getArticleData 函數
  const getArticleData = async () => {
    try {
      let allArticles = [];
      let currentPage = 1;
      let totalPages = 1;
  
      do {
        const responseData = await $get(`articles`);        
        // 發送分頁請求，包含目前頁數
        const response = await $get(`articles?page=${currentPage}&limit=10`);
        
        if (response && response.articles) {
          allArticles = allArticles.concat(response.articles); // 合併資料
          totalPages = responseData.pagination.total_pages || 1; // 確認總頁數
          currentPage++;  // 下一頁
        } else {
          break; // 如果回應異常，終止迭代
        }
      } while (currentPage <= totalPages);
  
      // 篩選符合條件的資料
      const filteredArticlesDown = allArticles.filter(article => article.author === 'Effie992down');
      const filteredArticlesUp = allArticles.filter(article => article.author === 'Effie992up');
  
      // 更新狀態
      lighthousesMobile.value = filteredArticlesDown;
      lighthouses.value = filteredArticlesUp;
      
      // console.log(lighthouses.value);
      
    } catch (error) {
      console.error('Error fetching all articles:', error);
      throw error;
    }
  };
  


const filterLighthouses = debounce(async (filterValue) => {
  isLoading.value = true;
  await getArticleData();
  lighthouses.value = lighthouses.value.filter(
    (lighthouse) => lighthouse.tag.includes(filterValue)
  );
  console.log(filterValue);
  
  isLoading.value = false;
}, 300); // 300ms 防抖延遲

  // 返回需要暴露的 state 和 actions
  return {
    filterLighthouses,
    isLoading,
    lighthouses,
		lighthousesMobile,
    getArticleData,
  };
});
