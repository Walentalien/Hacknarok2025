const BadWordsNext = require('bad-words-next')
const en = require('bad-words-next/lib/en')
const pl = require('bad-words-next/lib/pl')
const badwords = new BadWordsNext({ data: en })
badwords.add(pl)

// sentance: string
function check_a_sentance(sentance){
    if (!badwords.check( sentance )){
        return false;
    }

    // ewentualny dostęp do zewnętrznego api
    return true;
}

