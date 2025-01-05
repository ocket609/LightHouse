import { defineStore } from 'pinia';
import { ref } from 'vue';
import { $get } from '@/api/util/axiosInstance';
import debounce from 'lodash/debounce';


export const useLighthouseStore = defineStore('lighthouse', () => {
  const originalLighthouses = ref([]); // 存储原始数据
  const originalMobileLighthouses = ref([]); // 存储原始数据
  const lighthouses = ref([]);
  const lighthousesMobile = ref([]);
  const isLoading = ref(false);
  const isDataLoaded = ref(false); // false 表示未加载，true 表示已加载


  const getArticleData = async () => {
    if (isDataLoaded.value) return; // 如果数据已加载，不重复请求
    isLoading.value = true;
    try {
      let allArticles = [];
      let currentPage = 1;
      let totalPages = 1;

      do {
        const responseData = await $get(`articles`);
        const response = await $get(`articles?page=${currentPage}&limit=10`);

        if (response && response.articles) {
          allArticles = allArticles.concat(response.articles);
          totalPages = responseData.pagination.total_pages || 1;
          currentPage++;
        } else {
          break;
        }
      } while (currentPage <= totalPages);

      const filteredArticlesDown = allArticles.filter(article => article.author === 'Effie992down');
      const filteredArticlesUp = allArticles.filter(article => article.author === 'Effie992up');
      
      originalMobileLighthouses.value =filteredArticlesDown;
      lighthousesMobile.value = filteredArticlesDown;
      originalLighthouses.value = filteredArticlesUp;
      lighthouses.value = filteredArticlesUp; // 初始化显示数据
      
      isDataLoaded.value = true; // 数据加载完成
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      isLoading.value = false;
    }
  };

  const searchKey = (filterValue) =>{
console.log(filterValue);

  }

  const filterLighthouses = debounce(async (filterValue) => {
    // console.log(filterValue);
    
    // 当数据未加载或需要重新加载时，先加载数据
    if (!isDataLoaded.value) {
      await getArticleData(); 
      isDataLoaded.value = true; 
    }
  
    if(filterValue !== '所有區域' && filterValue !== '所有特色'){
      lighthouses.value = originalLighthouses.value.filter((lighthouse) =>
        lighthouse.tag.some(tag => filterValue.includes(tag) || tag.includes(filterValue))
      );
      lighthousesMobile.value = originalMobileLighthouses.value.filter((lighthouse) =>
        lighthouse.tag.some(tag => filterValue.includes(tag) || tag.includes(filterValue))
      );
      isLoading.value = false; // 标记筛选完成
    }else{
      console.log(lighthouses.value);
            
      lighthouses.value = originalLighthouses.value;
      lighthousesMobile.value = originalMobileLighthouses.value;
    }

  }, 300); 
  

  const regionOrder = ["北部", "東部", "中部", "西部", "南部"];

  const sortLighthouses = debounce(async (filterValue) => {
    
    if(filterValue === '由北至南'){
      // 篩選條件
      lighthouses.value = originalLighthouses.value
        .filter((lighthouse) =>
          lighthouse.tag.some(tag => regionOrder.includes(tag) || tag.includes(regionOrder)) // 確保篩選符合篩選值
        )
        // 排序
        .sort((a, b) => {
          const regionA = regionOrder.indexOf(a.tag.find(tag => regionOrder.includes(tag)) || ''); 
          const regionB = regionOrder.indexOf(b.tag.find(tag => regionOrder.includes(tag)) || ''); 
          return regionA - regionB; 
        });
        console.log(`'由北至南'`,lighthouses.value);
        console.log(`'由北至南'`,lighthousesMobile.value);
        
        
    } else if (filterValue === '由南至北') {
      // 篩選條件
      lighthouses.value = originalLighthouses.value
        .filter((lighthouse) =>
          lighthouse.tag.some(tag => regionOrder.includes(tag) || tag.includes(regionOrder)) 
        )
        // 排序
        .sort((a, b) => {
          const regionA = regionOrder.indexOf(a.tag.find(tag => regionOrder.includes(tag)) || ''); 
          const regionB = regionOrder.indexOf(b.tag.find(tag => regionOrder.includes(tag)) || ''); 
          return regionB - regionA; // 反向排序
        });
    }

  }, 300);

  
  
  return {
    filterLighthouses,
    sortLighthouses,
    isLoading,
    lighthouses,
    originalLighthouses,
    lighthousesMobile,
    getArticleData,
    originalMobileLighthouses,
    searchKey
  };
});

