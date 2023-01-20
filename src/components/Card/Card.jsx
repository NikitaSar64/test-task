import { useState } from 'react';
import { boldFirstWord } from '../../helpers/boldFirstWord';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ( {title, name, taste, size, gifts, extra, weight, productImg, presence, description, className}) => {
    const [select, setSelect] = useState(false);
    const [visit, setVisit] = useState(false);
    
    switch (presence){
        case (true):
            return (
                <div className={cn(styles.card, styles[className])}>
                    <div className={styles.cardWrapper}
                        onClick={() => setSelect(!select)}
                        onMouseLeave={() => setVisit(true)}
                        >
                        <div className={styles.titleBox}>
                            <div className={cn(styles.triangleLine, 
                                {
                                    [styles.triangleLineSelected]: select,
                                    [styles.triangleLineNoSelected]: !select
                                },
                                {
                                    [styles.triangleLineVisit]: visit && !select,
                                    [styles.triangleLineSelectVisit]: visit && select
                                }
                            )}>
                            </div>
                            <div className={cn(styles.title, 
                                {
                                    [styles.titleSelect]: select,
                                    [styles.titleNoSelect]: !select
                                },
                                {
                                    [styles.titleVisit]: visit && !select,
                                    [styles.titleSelectVisit]: visit && select,
                                }
                            )}>
                                <div>{title}</div>
                            </div>
                        </div>
                        <div className={cn(styles.contentBox, 
                                {
                                    [styles.contentBoxSelect]: select,
                                    [styles.contentBoxNoSelect]: !select
                                }, 
                                {
                                    [styles.contentBoxVisit]: visit && !select,
                                    [styles.contentBoxSelectVisit]: visit && select,
                                }
                            )}>
                            <div className={styles.description}>
                                <div className={styles.name}>{name}</div>
                                <div className={styles.taste}>{taste}</div>
                                <div className={styles.text}>{boldFirstWord(size)}</div>
                                <div className={styles.text}>{boldFirstWord(gifts)}</div>
                                <div className={styles.text}>{extra}</div>
                            </div>
                            <div className={styles.imgWrapper}>
                                <img src={productImg} alt="product-image"/>
                            </div>
                            <div className={cn(styles.circle, 
                                    {
                                        [styles.circleSelect]: select,
                                        [styles.circleNoSelect]: !select
                                    }, 
                                    {
                                        [styles.circleVisit]: visit && !select,
                                        [styles.circleSeletVisit]: visit && select,
                                    }
                                )}>
                                {boldFirstWord(weight)}
                            </div>
                        </div>
                    </div>
                    {select 
                        ?  
                        <div className={styles.cardDescription}>{description}</div> 
                        :
                        <div className={styles.cardDescription}>
                            Чего сидишь? Порадуй котэ,
                            <button
                                className={styles.btn}
                                onClick={() => setSelect(!select)}
                                >
                                купи.
                            </button>
                        </div> 
                    }
                </div>
            )
        case (false):
            return (
                <div className={styles.card}>
                    <div className={cn(styles.cardWrapper, styles.noPresence)}>
                        <div className={styles.titleBox}>
                            <div className={cn(styles.triangleLine, styles.triangleLineNoPresence)}></div>
                            <div className={cn(styles.title, styles.titleNoPresence)}>
                                <div>{title}</div>
                            </div>
                        </div>
                        <div className={cn(styles.contentBox, styles.contentBoxNoPresence)}>
                            <div className={styles.description}>
                                <div className={cn(styles.name, styles.noPresence)}>{name}</div>
                                <div className={cn(styles.taste, styles.noPresence)}>{taste}</div>
                                <div className={cn(styles.text, styles.noPresence)}>{boldFirstWord(size)}</div>
                                <div className={cn(styles.text, styles.noPresence)}>{boldFirstWord(gifts)}</div>
                                <div className={cn(styles.text, styles.noPresence)}>{extra}</div>
                            </div>
                            <div className={cn(styles.imgWrapper, styles.noPresenceImg)}>
                                <img src={productImg} alt="product-image"/>
                            </div>
                            <div className={cn(styles.circle, styles.noPresenceCircle)}>
                                {boldFirstWord(weight)}
                            </div>
                        </div>
                    </div>
                    <div className={cn(styles.cardDescription, styles.noPresenceDescription)}>{description}</div> 
                </div>
            )
    }

}