import React, {FC, useEffect, useState} from 'react'

import '../../styles/card.css'
import {PointCard} from "../../model/card/point-card.model";
import {PointCardType} from "../../model/card/point-card-type.model";
import {getFruitImage} from "../../util/fruit/fruit-image.util";
import {FruitType} from "../../model/fruit.model";

enum PointCardStyleType {
  TEXT_EQUALS,
  COMPLETE_SET,
  POINTS_FOR,
  MOST_FEWEST,
  EVEN_ODD,
  DOUBLE_SET,
  TRIPLE_SET,
  LINEAR,
}

export const PointCardComponent: FC<{ card: PointCard }> = ({card}) => {
  const [component, setComponent] = useState(PointCardStyleType.LINEAR);

  useEffect(() => {
    switch(card.pointType) {
      case PointCardType.LINEAR: setComponent(PointCardStyleType.LINEAR); break;
      case PointCardType.DIFF_SET:
      case PointCardType.SAME_SET:
        if (card.fruitTypes.length === 2) {
          setComponent(PointCardStyleType.DOUBLE_SET);
        } else {
          setComponent(PointCardStyleType.TRIPLE_SET);
        }

        break;
      case PointCardType.FEWEST_OF_TYPE:
      case PointCardType.MOST_OF_TYPE: setComponent(PointCardStyleType.MOST_FEWEST); break;
      case PointCardType.FEWEST_FRUIT:
      case PointCardType.MOST_FRUIT: setComponent(PointCardStyleType.TEXT_EQUALS); break;
      case PointCardType.MISSING_TYPE:
      case PointCardType.AT_LEAST_2:
      case PointCardType.AT_LEAST_3: setComponent(PointCardStyleType.POINTS_FOR); break;
      case PointCardType.EVEN_ODD: setComponent(PointCardStyleType.EVEN_ODD); break;
      case PointCardType.FRUIT_SALAD: setComponent(PointCardStyleType.COMPLETE_SET); break;
    }
  }, [card]);

  return <div className={'card-wrapper'}>
    <div className={`card point`}>
      <div className={`point-card-reverse-top ${card.reverseType}`}/>
      <div className={`point-card-reverse-bottom ${card.reverseType}`}/>
      {component === PointCardStyleType.LINEAR && <LinearPointCardComponent card={card}/>}
      {component === PointCardStyleType.DOUBLE_SET && <DoubleSetPointCardComponent card={card}/>}
      {component === PointCardStyleType.TRIPLE_SET && <TripleSetPointCardComponent card={card}/>}
      {component === PointCardStyleType.MOST_FEWEST && <MostFewestPointCardComponent card={card}/>}
      {component === PointCardStyleType.TEXT_EQUALS && <TextEqualsPointCardComponent card={card}/>}
      {component === PointCardStyleType.POINTS_FOR && <PointsForPointCardComponent card={card}/>}
      {component === PointCardStyleType.EVEN_ODD && <EvenOddPointCardComponent card={card}/>}
      {component === PointCardStyleType.COMPLETE_SET && <CompleteSetPointCardComponent card={card}/>}
    </div>
  </div>
}

const LinearPointCardComponent: FC<{card: PointCard}> = ({card}) => {
  return <>
    {card.fruitTypes.map((fruitType, index) =>
      <div className={'card-points-per'}>
        <span className={'card-points-per-point'}>{card.pointValues[index]}</span>
        <span className={'card-points-per-slash'}>/</span>
        <div className={`card-points-per-fruit`}>
          <img src={getFruitImage(fruitType)}/>
        </div>
      </div>
    )}
  </>
}

const DoubleSetPointCardComponent: FC<{card: PointCard}> = ({card}) => {
  return <>
    <div className={'point-card-set'}>
      <div className={`point-card-double-set-type-1`}>
        <img src={getFruitImage(card.fruitTypes[0])}/>
      </div>
      <div className={`point-card-double-set-type-2`}>
        <img src={getFruitImage(card.fruitTypes[1])}/>
      </div>
      <span className={'point-card-double-set-plus'}>+</span>
      <span className={'point-card-double-set-score'}>={card.pointValues[0]}</span>
    </div>
  </>
}

const TripleSetPointCardComponent: FC<{card: PointCard}> = ({card}) => {
  return <>
    <div className={'point-card-set'}>
      <div className={`point-card-triple-set-type-1`}>
        <img src={getFruitImage(card.fruitTypes[0])}/>
      </div>
      <div className={`point-card-triple-set-type-2`}>
        <img src={getFruitImage(card.fruitTypes[1])}/>
      </div>
      <div className={`point-card-triple-set-type-3`}>
        <img src={getFruitImage(card.fruitTypes[2])}/>
      </div>
      <span className={'point-card-triple-set-plus-1'}>+</span>
      <span className={'point-card-triple-set-plus-2'}>+</span>
      <span className={'point-card-triple-set-score'}>={card.pointValues[0]}</span>
    </div>
  </>
}

const MostFewestPointCardComponent: FC<{card: PointCard}> = ({card}) => {
  return <>
    <div className={'point-card-most-fewest'}>
        {card.pointType === PointCardType.MOST_OF_TYPE ? 'MOST' : 'FEWEST'}
        <div className={`point-card-most-fewest-fruit`}>
          <img src={getFruitImage(card.fruitTypes[0])}/>
        </div>
        ={card.pointValues[0]}
    </div>
  </>
}

const TextEqualsPointCardComponent: FC<{card: PointCard}> = ({card}) => {
  return <>
    <div className={'point-card-text-equals'}>
      <div className={'point-card-text-equals-text'}>
        {card.pointType === PointCardType.MOST_FRUIT ? 'MOST TOTAL FRUITS' : 'FEWEST TOTAL FRUITS'}
      </div>
      ={card.pointValues[0]}
    </div>
  </>
}

const PointsForPointCardComponent: FC<{card: PointCard}> = ({card}) => {
  const [text, setText] = useState('');

  useEffect(() => {
    switch (card.pointType) {
      case PointCardType.MISSING_TYPE: setText('MISSING FRUIT TYPE'); break;
      case PointCardType.AT_LEAST_2: setText('FRUIT TYPE WITH AT LEAST 2'); break;
      case PointCardType.AT_LEAST_3: setText('FRUIT TYPE WITH AT LEAST 3'); break;
    }
  }, [card]);

  return <>
    <div className={'point-card-points-for'}>
      {card.pointValues[0]}
      <span className={'point-card-points-for-slash'}>/</span>
      <div className={'point-card-points-for-text'}>
        {text}
      </div>
    </div>
  </>
}

const EvenOddPointCardComponent: FC<{card: PointCard}> = ({card}) => {
  return <>
    <div className={'point-card-even-odd'}>
      <div className={`point-card-even-odd-fruit`}>
        <img src={getFruitImage(card.fruitTypes[0])}/>
      </div>
      <div className={'point-card-even-odd-text'}>
        <div>
          <div className={'point-card-even-odd-description'}>
            EVEN TOTAL
          </div>
          <span>={card.pointValues[0]}</span>
        </div>
        <div>
          <div className={'point-card-even-odd-description'}>
            ODD TOTAL
          </div>
          <span>={card.pointValues[1]}</span>
        </div>
      </div>
    </div>
  </>
}

const CompleteSetPointCardComponent: FC<{card: PointCard}> = ({card}) => {
  return <>
    <div className={'point-card-complete-set'}>
      <div className={'point-card-complete-set-text'}>
        {card.pointValues[0]}
        <span className={'point-card-complete-set-slash'}>/</span>
        <span className={'point-card-complete-set-description'}>FRUIT SALAD</span>
        <div className={'point-card-complete-set-fruit'}>
          <img src={getFruitImage(FruitType.STRAWBERRY)}/>
        </div>
        <div className={'point-card-complete-set-fruit'}>
          <img src={getFruitImage(FruitType.MANGO)}/>
        </div>
        <div className={'point-card-complete-set-fruit'}>
          <img src={getFruitImage(FruitType.BANANA)}/>
        </div>
        <div className={'point-card-complete-set-fruit'}>
          <img src={getFruitImage(FruitType.GRAPE)}/>
        </div>
        <div className={'point-card-complete-set-fruit'}>
          <img src={getFruitImage(FruitType.BLUEBERRY)}/>
        </div>
        <div className={'point-card-complete-set-fruit'}>
          <img src={getFruitImage(FruitType.PEAR)}/>
        </div>
      </div>
    </div>
  </>
}