import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/products.module.css';

export default function ProductPage() {
  const iconStyle = {
    fontSize: '24px',
  };

  const greyDotStyle = {
    color: '#7c7a7a',
  };

  return (
    <>
      <Head>
        <title>Marketplace Mobile App</title>
        <meta name="description" content="Marketplace Mobile App " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.product}>
        <header className={styles.header}>
          <Link href="/">
            <i className="bi bi-chevron-left" style={iconStyle}></i>
          </Link>

          <ul>
            <li>
              <i className="bi bi-heart" style={iconStyle}></i>
            </li>
            <li>
              <i className="bi bi-share" style={iconStyle}></i>
            </li>
            <li>
              <i className="bi bi-bag" style={iconStyle}></i>
            </li>
          </ul>
        </header>
        <Image
          src="/images/main-tshirt.png"
          alt="A classic Tshirt for males"
          width={400}
          height={400}
        />
        <article className={styles.productSummary}>
          <h2>
            <span>
              <i className="bi bi-shop"></i>
            </span>
            &nbsp;SKU:00173
          </h2>
          <h3>Essential Men&apos;s Short-Sleeve CrewNeck T-shirt</h3>

          <ul className={styles.productRating}>
            <li>
              <span>
                <i className="bi bi-star-fill" style={{ color: 'gold' }}></i>
              </span>
              &nbsp; 4.9 Ratings
            </li>

            <li>
              <i className="bi bi-dot" style={greyDotStyle}></i>
            </li>
            <li>2.3k Reviews</li>
            <li>
              <i className="bi bi-dot" style={greyDotStyle}></i>
            </li>
            <li>2.9k+ sold</li>
          </ul>
        </article>
        <nav>
          {/* <span>About Item</span>
          <span>Reviews</span> */}
        </nav>

        <footer className={styles.footer}>
          <article className={styles.price}>
            <h3>Total Price</h3>
            <p>$32.00</p>
          </article>

          <article className={styles.buy}>
            <span>
              <i className="bi bi-bag" style={{ fontSize: '18px' }}></i>
              &nbsp;1
            </span>
            <button>Buy Now</button>
          </article>
        </footer>
      </div>
    </>
  );
}
