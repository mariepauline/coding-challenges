import React from 'react';
import { Link } from 'react-router';
import styles from './card.module.css';
import Tag from '../tag/tag';

interface CardProps {
  header: string;
  subheader?: string;
  link: string;
  children: React.ReactNode;
  tags?: Array<string>;
}

const Card: React.FC<CardProps> = ({
  header,
  subheader,
  link,
  children,
  tags,
}) => {
  return (
    <Link to={link} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.top}>
          <h2>{header}</h2>
          {subheader && <span className={styles.subheader}>{subheader}</span>}
        </div>
        <div className={styles.content}>{children}</div>
        {tags && (
          <>
            <h3>Tags</h3>
            <div className={styles.tags}>
              {tags?.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default Card;
