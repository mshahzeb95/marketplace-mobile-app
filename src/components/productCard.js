import Image from 'next/image';
import styles from '@/styles/productCard.module.css';

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <span className={styles.like}>
        <i
          className="bi bi-heart"
          style={{
            fontSize: '24px',
          }}
        ></i>
      </span>
      <Image
        src="/images/t-shirt.png"
        alt="A classic Tshirt for males"
        width={400}
        height={400}
        priority
      />
      <article>
        <h2>Shirt</h2>
        <h3>Essential Men&apos;s Short-Sleeve CrewNeck T-shirt</h3>
        <div>
          <p>
            <span>
              <i className="bi bi-star-fill" style={{ color: 'gold' }}></i>
            </span>
            &nbsp; 4.9 | 2539
          </p>
          <p>$32.00</p>
        </div>
      </article>
    </div>
  );
}
