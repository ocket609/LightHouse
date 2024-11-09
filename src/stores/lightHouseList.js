// stores/lighthouse.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { $get } from '@/api/util/axiosInstance';

export const useLighthouseStore = defineStore('lighthouse', () => {
  // 使用 ref 定義 state
  const lighthouses = ref([]);  // 初始化空数组
	const lighthousesMobile = ref([]);
  // 定義 getArticleData 函數
  const getArticleData = async () => {
    try {
      const data = await $get('articles');
      if (data && data.articles) {
        // 篩選出 author 為 Effie992down 的文章
        const filteredArticlesDown = data.articles.filter(article => article.author === 'Effie992down');
        const filteredArticlesUp = data.articles.filter(article => article.author === 'Effie992up');
        // 更新狀態，只將符合條件的文章存入 lighthouses
        lighthousesMobile.value = filteredArticlesDown;
				lighthouses.value = filteredArticlesUp;
        console.log(data.articles);
      }
    } catch (error) {
      console.error('Error fetching article data:', error);
      throw error;  // 抛出错误，以便调用处处理
    }
  };

  // 返回需要暴露的 state 和 actions
  return {
    lighthouses,
		lighthousesMobile,
    getArticleData,
  };
});
