import React, { useMemo, useState } from 'react';
import jsonData from './data.json'
import Article from './components/Article';
import { optionsProps, sortingMethods } from './typings';
import { sortArticles } from './utils/sortingData';
import { Row, Col, Container } from 'react-bootstrap';
import Filters from './components/Filters';
let options: optionsProps[] = [
  {
    id: 1,
    name: "All",
    value: "none"

  },

  {
    id: 2,
    name: "Recents",
    value: "recent"
  },
  {
    id: 3,
    name: "Upvotes",
    value: "upvotes"
  },
]
const App = () => {
  const [sortingMethod, setSortingMethod] = useState<sortingMethods>("none")
  const sortedArticles = useMemo(() => sortArticles(sortingMethod, jsonData), [sortingMethod])

  return (
    <Container className=" my-3">
      <Row className='justify-content-center'>
        <Col lg={8}>
          <Row className='gap-2'>
            <Col lg={12}>
              <h1 className=" fs-2 fw-bold text-center">Articles</h1>
            </Col>
            <Col lg={12}>
              <Row>
                <Col>
                  <h3 className=" fs-5 text-end fw-semibold mt-1">Filters:</h3>
                </Col>
                <Col lg={3}>
                  <Filters options={options} onChange={(filter) => setSortingMethod(filter.value)} />
                </Col>
              </Row>
            </Col>
            <Col lg={12}>
              <Row className='gap-3'>
                {
                  sortedArticles.map(article => <Article key={article.id} {...article} />)
                }
              </Row>

            </Col>
          </Row>
        </Col>

      </Row>
    </Container>

  );
}

export default App;
