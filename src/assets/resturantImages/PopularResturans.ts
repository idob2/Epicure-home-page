import {Claro, Lumina, TigerLily, KabKem, Messa, NitanThai, YaPan} from './index'
import {FiveStars, FourStars, ThreeStars, TwoStars, OneStar} from '../ratingImages/index';
const PopularResturantsList = [
    {imgUrl: Claro,
    name: "Claro", chef: "Ran Shmueli" ,rating: FiveStars},
    {imgUrl: Lumina,
    name: "Lumina", chef: "Meir Adoni", rating: OneStar},
    {imgUrl: TigerLily,
    name: "Tiger-Lily", chef: "Yanir Green", rating: ThreeStars},
    {imgUrl: KabKem,
        name: "Kab Kem", chef: "Yariv Malili", rating:TwoStars},
        {imgUrl: Messa,
        name: "Messa", chef: "Aviv Moshe", rating: FourStars},
        {imgUrl: NitanThai,
        name: "Nitan Thai", chef: "Shahaf Shabtay", rating: OneStar},
        {imgUrl: YaPan,
            name: "Ya Pan", chef: "Yuval Ben Moshe", rating: FourStars},

]

export default PopularResturantsList;