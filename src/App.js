import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Header from './components/Header';
import Table from './components/Table';
import Chart from './components/Chart';


const f = (bytes) => {
  return Number((bytes * 8.0E-6).toFixed(3))
}

function App() {
  const [data, setData] = useState([]);

  const fetchData = async() => {
    try {
      let r = await window.fetch('/data.json');
      r = await r.json();
      const data = r.map((n, index) => ({
        index,
        id: n.result.id,
        date: new Date(n.timestamp),
        download: f(n.download.bandwidth),
        upload: f(n.upload.bandwidth),
        ping: n.ping.latency,
      }));
      setData(data.reverse());
    } catch (e) {
      console.warn(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Paper>
        <Header />
        <Table data={data} />
        <Chart data={data} />
      </Paper>
    </Container>
  );
}

export default App;
