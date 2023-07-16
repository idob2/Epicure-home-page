import {PadKiMaoCost, PadKiMaoCost2, PadKiMaoCost3, RedFarmCost, TaLaMaKoCost} from './dishesCosts';
import {PadKiMaoDesc, PadKiMaoDesc2, PadKiMaoDesc3, RedFarmDesc, TaMaLaKoDesc} from './dishesDescription';
import {PadKiMao, PadKiMao2, PadKiMao3, RedFarm, TaMaLaKo} from './dishesImages';

const Dishes = [{image:PadKiMao, name: "Pad Ki Mao", description: PadKiMaoDesc, cost: PadKiMaoCost},
{image:PadKiMao2, name: "Pad Ki Mao", description: PadKiMaoDesc2, cost: PadKiMaoCost2}, 
{image:PadKiMao3, name: "Pad Ki Mao", description: PadKiMaoDesc3, cost: PadKiMaoCost3},
{image:RedFarm, name: "Red Farm", description: RedFarmDesc, cost: RedFarmCost},
{image:TaMaLaKo, name: "Ta La Ma Ko", description: TaMaLaKoDesc, cost: TaLaMaKoCost}];

export default Dishes;