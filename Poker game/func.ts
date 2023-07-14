type Rank = 
| 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' 

type Suit = '♥' | '♦' | '♠' | '♣';

type Card = {rank : number, suit : number};

const rankToNumber = (rank : Rank) : number => 
    rank === 'A' ? 1 :
    rank === 'J' ? 12 :
    rank === 'Q' ? 13 :
    rank === 'K' ? 14 : Number(rank);

const suitToNumber = (suit : Suit) : number => 
    suit === '♥' ? 1 :
    suit === '♦' ? 2 :
    suit === '♠' ? 3 : 4;


enum Hand {
    HighCard,
    OnePair,
    TwoPairs,
    ThreeOfAKind,
    Straight,
    Flush,
    FullHouse,
    FourOfAKing,
    StraightFlush,
    RolayFlush
}

export function handRank(
    cardString:[string, string, string, string, string]
):Hand{

const cards : Card[] = cardString.map((str: string) => ({
    rank : rankToNumber(
        str.substring(0, str.length-1) as Rank
    ),
    suit : suitToNumber(str.charAt(-1) as Suit)
}));

const countBySuit = new Array(5).fill(0);
const countByRank = new Array(15).fill(0);
const countBySet = new Array(5).fill(0);

    cards.forEach((card : Card) =>{
        countByRank[card.rank]++;
        countBySuit[card.suit]++;
    })

    countByRank.forEach(
        (count : number) => count && countBySet[count]++
    );

    countByRank[14] = countByRank[1];

    if(countBySet[4] === 1 && countBySet[1] === 1){
        return Hand.FourOfAKing;
    }else if(countBySet[3] && countBySet[2] === 1){
        return Hand.FullHouse;
    }else if(countBySet[3] && countBySet[1] === 2){
        return Hand.ThreeOfAKind;
    }else if(countBySet[2] === 2 && countBySet[1] === 1){
        return Hand.TwoPairs;
    }else if(countBySet[2] === 1 && countBySet[1] === 3){
        return Hand.OnePair;
    }else if(countBySet[1] === 5){
        if(countByRank.join('').includes('11111'))
            return !countBySuit.includes(5) ? Hand.Straight : countByRank.slice(10).join('') === '11111' ? Hand.RolayFlush : Hand.StraightFlush;
        else{
            return countBySuit.includes(5) ? Hand.Flush : Hand.HighCard;
        }
    }else{
        throw new Error('Unown hand! THis cannot happend.');
    }
}
console.log(handRank(['3♥', '5♦', '8♣', 'A♥', '6♠'])); // 0
console.log(handRank(['3♥', '5♦', '8♣', 'A♥', '5♠'])); // 1
console.log(handRank(['3♥', '5♦', '3♣', 'A♥', '5♠'])); // 2
console.log(handRank(['3♥', '5♦', '8♣', '5♥', '5♠'])); // 3
console.log(handRank(['3♥', '2♦', 'A♣', '5♥', '4♠'])); // 4
console.log(handRank(['J♥', '10♦', 'A♣', 'Q♥', 'K♠'])); // 4
console.log(handRank(['3♥', '4♦', '7♣', '5♥', '6♠'])); // 4
console.log(handRank(['3♥', '4♥', '9♥', '5♥', '6♥'])); // 5
console.log(handRank(['3♥', '5♦', '3♣', '5♥', '3♠'])); // 6
console.log(handRank(['3♥', '3♦', '3♣', '5♥', '3♠'])); // 7
console.log(handRank(['3♥', '4♥', '7♥', '5♥', '6♥'])); // 8
console.log(handRank(['K♥', 'Q♥', 'A♥', '10♥', 'J♥'])); // 9