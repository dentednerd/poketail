import { useState, useEffect } from 'react';
import axios from 'axios';
import PokeList from './PokeList';
import Pagination from './Pagination';

function App() {
  const [currentPokeList, setCurrentPokeList] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [prevPageUrl, setPrevPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setCurrentPokeList(res.data.results);
    });

    return () => cancel();
  }, [currentPageUrl]);

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  };

  return (
    <main className="bg-gray-100 p-8 text-center">
      <h1>Poketail</h1>
      <PokeList loading={loading} list={currentPokeList} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </main>
  );
}

export default App;
