import Link from '@docusaurus/Link';
import { Card as CardProps } from '@site/src/typing';
import styles from './index.module.css';

const Card = ({ card }: { card: CardProps }) => {
  const { title, blocks, color } = card;
  return (
    <div className={styles.card} style={{ color: `${color}` }}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardContent} style={{ borderColor: `${color}` }}>
        {blocks.map((block) => (
          <div className={styles.block}>
            <div className={styles.blockTitle}>{block.title}</div>
            {block.content.map(
              ({ title, link }) =>
                 (
                  <Link to={link}>
                    <span className={styles.link} style={{ color: `${color}` }}>
                      {title}
                    </span>
                  </Link>
                )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
