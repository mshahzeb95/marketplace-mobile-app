import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import ProductCard from '@/components/productCard';
import { Autoplay, Pagination, A11y, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const defaultNavStyle = {
    fontSize: '30px',
  };

  const activeNavStyle = {
    ...defaultNavStyle,
    color: '#4ea975',
  };

  const headerStyle = { fontSize: '26px' };
  return (
    <>
      <Head>
        <title>Marketplace Mobile App</title>
        <meta name="description" content="Marketplace Mobile App " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.page}>
        <header className={styles.header}>
          <form>
            <div className={styles.searchInput}>
              <span>
                <i
                  className="bi bi-search"
                  style={{ fontSize: '18px', color: '#7c7a7a' }}
                ></i>
              </span>
              <input type="search" name="Seach" id="" placeholder="Search..." />
            </div>
          </form>
          <span>
            <i className="bi bi-bag" style={headerStyle}></i>
          </span>
          <span>
            <i className="bi bi-chat-square-text" style={headerStyle}></i>
          </span>
        </header>

        <section className={styles.hero}>
          <Swiper
            modules={[Pagination, A11y, EffectFade, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={500}
            pagination={{
              dynamicBullets: true,
            }}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: '#a6a6a6',
                  paddingTop: '100px',
                  paddingBottom: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <article
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    textAlign: 'left',
                    minWidth: '310px',
                    maxWidth: '350px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <h1
                    style={{
                      textTransform: 'uppercase',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                    }}
                  >
                    #Fashion Day
                  </h1>
                  <h2
                    style={{
                      textTransform: 'uppercase',
                      fontSize: '30px',
                    }}
                  >
                    80% OFF
                  </h2>
                  <p
                    style={{
                      marginTop: '10px',
                      marginBottom: '20px',
                    }}
                  >
                    Discover Fashion that suits <br /> your style
                  </p>
                  <button>Check this out</button>
                </article>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  backgroundColor: 'pink',
                  paddingTop: '100px',
                  paddingBottom: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <article
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    textAlign: 'left',
                    maxWidth: '350px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  <h1
                    style={{
                      textTransform: 'uppercase',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                    }}
                  >
                    #BeautySale
                  </h1>
                  <h2
                    style={{
                      textTransform: 'uppercase',
                      fontSize: '20px',
                    }}
                  >
                    Discover our Beauty Collection
                  </h2>
                  <button>Check this out</button>
                </article>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <div className={styles.categories}>
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={6}
            loop={true}
            speed={500}
            pagination={{
              dynamicBullets: true,
            }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
            className="categorySwiper"
          >
            <SwiperSlide>
              <span className={styles.categoryIcon}>
                <i className="bi bi-airplane" style={{ fontSize: '24px' }}></i>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className={styles.categoryIcon}>
                <i className="bi bi-file-text" style={{ fontSize: '24px' }}></i>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className={styles.categoryIcon}>
                <i className="bi bi-badge-3d" style={{ fontSize: '24px' }}></i>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className={styles.categoryIcon}>
                <i className="bi bi-card-list" style={{ fontSize: '24px' }}></i>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className={styles.categoryIcon}>
                <i className="bi bi-arrows-fullscreen" style={{ fontSize: '24px' }}></i>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className={styles.categoryIcon}>
                <i className="bi bi-badge-ar-fill" style={{ fontSize: '24px' }}></i>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className={styles.categoryIcon}>
                <i className="bi bi-bag-fill" style={{ fontSize: '24px' }}></i>
              </span>
            </SwiperSlide>
            <SwiperSlide>
              <span className={styles.categoryIcon}>
                <i className="bi bi-bell" style={{ fontSize: '24px' }}></i>
              </span>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.bestSellingProducts}>
          <article>
            <h3>Best Sale Product</h3>
            <Link href="/">See More</Link>
          </article>

          <div className={styles.productList}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
              <Link href="/products" key={item}>
                <ProductCard />
              </Link>
            ))}
          </div>
        </div>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <i className="bi bi-house-fill" style={activeNavStyle}></i>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <i
                  className="bi bi-ticket-perforated"
                  style={defaultNavStyle}
                ></i>
                <span>Voucher</span>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <i className="bi bi-wallet" style={defaultNavStyle}></i>
                <span>Wallet</span>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <i className="bi bi-nut" style={defaultNavStyle}></i>
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
