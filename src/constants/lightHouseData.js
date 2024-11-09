export let lighthouses = [];
// 992px以上瀑布流
export const lighthousesMobile = [
  {
    area: '北部區域',
    areaData: [
      {
        title: '新北市富貴角燈塔',
        subtitle: 'New Taipei City Fuguijiao Lighthouse',
        imageSrc: './public/pic-north-lifgrhouse-3.jfif',
        alt: '新北市富貴角燈塔',
        link: '#',
        content:''
      },
      {
        title: '桃園市白沙岬燈陶塔',
        subtitle: 'Taoyuan City Baishajia Lighthouse',
        imageSrc: './public/pic-north-lighthouse-4.jpg',
        alt: '桃園市白沙岬燈陶塔',
        link: '#',
        content:''
      },
      {
        title: '新北市三貂角燈塔',
        subtitle: 'Sandiao Cape Lighthouse',
        imageSrc: './public/pic-north-lifgrhouse-1.jfif',
        alt: '新北市三貂角燈塔',
        link: '#',
        content:''
      }
    ]
  },
  {
    area: '南部區域',
    areaData: [
      {
        title: '台南市國聖港燈塔',
        subtitle: 'Guosheng Lighthouse',
        imageSrc: './public/pic-sorth-lighthouse-1.jpg',
        alt: '台南市國聖港燈塔',
        link: '#',
        content:''
      },
      {
        title: '高雄燈塔（旗后燈塔）',
        subtitle: 'Kaohsiung Lighthouse',
        imageSrc: './public/pic-north-lifgrhouse-1.jfif',
        alt: '高雄燈塔（旗后燈塔）',
        link: '#',
        content:''
      },
      {
        title: '屏東鵝鑾鼻燈塔',
        subtitle: 'Eluanbi Cape Lighthouse',
        imageSrc: './public/pic-sorth-lighthouse-3.jpg',
        alt: '屏東鵝鑾鼻燈塔',
        link: '#',
        content:''
      }
    ]
  },
  {
    area: '東部區域',
    areaData: [
      {
        title: '台東縣綠島燈塔',
        subtitle: 'Green Island Lighthouse',
        imageSrc: './public/pic-east-lifgrhouse-1.jfif',
        alt: '台東縣綠島燈塔',
        link: '#',
        content:''
      }
    ]
  },
  {
    area: '西部區域',
    areaData: [
      {
        title: '彰化縣芳苑燈塔',
        subtitle: 'Fangyuan Lighthouse',
        imageSrc: './public/pic-wast-lighthouse-1.jpg',
        alt: '彰化縣芳苑燈塔',
        link: '#',
        content:''
      }
    ]
  }
]
// 因切換992px 不同可能導致不同步改用pinia寫
// import { $get } from '@/api/util/axiosInstance';

// // 定义获取文章数据的函数
// export const getArticleData = async () => {
//   try {
//     const data = await $get('articles');
//     if (data) {
//       lighthouses = data.articles;
//       console.log(data.articles);
//       return lighthouses;
//     }
//     return null;  // 如果没有数据，返回 null
//   } catch (error) {
//     console.error('Error fetching article data:', error);
//     throw error;  // 抛出错误，以便调用处处理
//   }
// };