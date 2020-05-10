import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const vowels = ['a', 'i', 'u', 'e', 'o'];
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const shuffleArr = (arr) => {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
};

const GenerateFlyingKana = ({ kanaCharacters }) => {
    let counter = 0;
    return shuffleArr(kanaCharacters).map((kana) => {
        ++counter;
        return (
            <div key={kana} className={`flying-kana-${counter}`}>
                {kana}
            </div>
        );
    });
};

const getRandomKana = (kana) => {
    if (kana === null) return [];
    return vowels.map((vowel) => {
        return kana[`${vowel}${randomNumber(1, 7)}`].hiragana;
    });
};

const FlyingKana = ({ kana }) => {
    useEffect(() => {
        let interval = setInterval(() => setKana(getRandomKana(kana.kana)), 60000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const [currentKana, setKana] = useState(getRandomKana(kana.kana));

    return (
        <div className='Flying-Kana-Container'>
            <GenerateFlyingKana kanaCharacters={currentKana} />
        </div>
    );
};

const mapStateToProps = (state) => ({
    kana: state.kana,
});

export default connect(mapStateToProps, null)(FlyingKana);
