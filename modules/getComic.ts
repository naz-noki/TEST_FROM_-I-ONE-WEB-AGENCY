import comics from '../public/comics/comics'
import IcastomComics from '~/types/IcastomComics';

// export default async (id: number) => {
//     try {
//       const request = await fetch(`https://xkcd.com/${id}/info.0.json`);
//       const data = await request.json();
//       return data;
//     } catch (error) {
//       console.error(error);
//       return error;
//     }
//   }

export default (id:number):IcastomComics => {
  let img:string = comics[id].split(' ').join('_')+'_2x.png';
  return {
    name: comics[id],
    img: `https://imgs.xkcd.com/comics/${img}`,
  }
}