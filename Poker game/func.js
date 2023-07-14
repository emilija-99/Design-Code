"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handRank = void 0;
var rankToNumber = function (rank) {
    return rank === 'A' ? 1 :
        rank === 'J' ? 12 :
            rank === 'Q' ? 13 :
                rank === 'K' ? 14 : Number(rank);
};
var suitToNumber = function (suit) {
    return suit === '♥' ? 1 :
        suit === '♦' ? 2 :
            suit === '♠' ? 3 : 4;
};
var Hand;
(function (Hand) {
    Hand[Hand["HighCard"] = 0] = "HighCard";
    Hand[Hand["OnePair"] = 1] = "OnePair";
    Hand[Hand["TwoPairs"] = 2] = "TwoPairs";
    Hand[Hand["ThreeOfAKind"] = 3] = "ThreeOfAKind";
    Hand[Hand["Straight"] = 4] = "Straight";
    Hand[Hand["Flush"] = 5] = "Flush";
    Hand[Hand["FullHouse"] = 6] = "FullHouse";
    Hand[Hand["FourOfAKing"] = 7] = "FourOfAKing";
    Hand[Hand["StraightFlush"] = 8] = "StraightFlush";
    Hand[Hand["RolayFlush"] = 9] = "RolayFlush";
})(Hand || (Hand = {}));
function handRank(cardString) {
    var cards = cardString.map(function (str) { return ({
        rank: rankToNumber(str.substring(0, str.length - 1)),
        suit: suitToNumber(str.charAt(-1))
    }); });
    var countBySuit = new Array(5).fill(0);
    var countByRank = new Array(15).fill(0);
    var countBySet = new Array(5).fill(0);
    cards.forEach(function (card) {
        countByRank[card.rank]++;
        countBySuit[card.suit]++;
    });
    countByRank.forEach(function (count) { return count && countBySet[count]++; });
    countByRank[14] = countByRank[1];
    if (countBySet[4] === 1 && countBySet[1] === 1) {
        return Hand.FourOfAKing;
    }
    else if (countBySet[3] && countBySet[2] === 1) {
        return Hand.FullHouse;
    }
    else if (countBySet[3] && countBySet[1] === 2) {
        return Hand.ThreeOfAKind;
    }
    else if (countBySet[2] === 2 && countBySet[1] === 1) {
        return Hand.TwoPairs;
    }
    else if (countBySet[2] === 1 && countBySet[1] === 3) {
        return Hand.OnePair;
    }
    else if (countBySet[1] === 5) {
        if (countByRank.join('').includes('11111'))
            return !countBySuit.includes(5) ? Hand.Straight : countByRank.slice(10).join('') === '11111' ? Hand.RolayFlush : Hand.StraightFlush;
        else {
            return countBySuit.includes(5) ? Hand.Flush : Hand.HighCard;
        }
    }
    else {
        throw new Error('Unown hand! THis cannot happend.');
    }
}
exports.handRank = handRank;
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
