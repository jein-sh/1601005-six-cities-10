import Header from '../../components/header/header';

function LoadingPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--error" >
        <div className="cities" >
          <div className="cities__places-container cities__places-container--empty container" >
            <section className="cities__no-places">
              <div className="cities__status-wrapper">
                <b className="cities__status">Loading ...</b>
              </div>
            </section>
            <div className="cities__right-section" style={{height: '100vh' }}></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoadingPage;
