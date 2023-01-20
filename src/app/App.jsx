import styles from './App.module.css';
import '../styles/global.css';
import { Card, Header } from '../components/index';
import { products } from '../data/data';

export const App = () => {
    return (
        <div className={styles.container}>
            <Header
                    title='Ты сегодня покормил кота?'
                />
            <div className={styles.productWrapper}>
                {
                    products.map((product, i) => {
                        return (
                            <Card key={i}
                                title={product.title}
                                name={product.name}
                                taste={product.taste}
                                size={product.size}
                                gifts={product.gifts}
                                extra={product.extra}
                                weight={product.weight}
                                productImg={product.productImg}
                                presence={product.presence}
                                description={product.description}
                                className={`card${i + 1}`}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
