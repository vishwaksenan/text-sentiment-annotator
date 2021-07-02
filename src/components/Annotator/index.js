import React, { useState, useEffect } from 'react'
import { Wrapper, Selection, Current, Seperation, Total, TextArea, Text, FinishSection, NextButton, FinishButton, PreviousButton } from './Annotator';
import { CSVLink } from "react-csv"
import { useLocation } from 'react-router';

const Annotator = () => {

  let sentimentStates = ["Good", "Neutral", "Bad"]
  const [index, setIndex] = useState(0)
  const [total, setTotal] = useState()
  const [text, setText] = useState('')
  const [senti, setSenti] = useState('Neutral')
  const [exportCsvData, setExportCsvData] = useState([["Text", "Sentiment"]])
  const state = useLocation()
  let filedata = state.state

  function getSentimentValue() {
    if (senti === 'Good') {
      return 1;
    }
    if (senti === 'Bad') {
      return -1;
    }
    if (senti === 'Neutral') {
      return 0;
    }
  }

  function load_data_on_index(index) {
    setIndex(index + 1)
    setTotal(filedata.length)
    setText(filedata[index]['Text'])
  }

  useEffect(() => {
    load_data_on_index(0)
  }, [])

  function finish_click() {
    var Sentiment = getSentimentValue()
    var row = [text, Sentiment]
    setExportCsvData(arr => [...arr, row])
  }

  function savePoint() {
    var Sentiment = getSentimentValue()
    var row = [text, Sentiment]
    setExportCsvData(arr => [...arr, row])
    setIndex(index + 1)
    load_data_on_index(index)
  }

  function setval(e) {
    setSenti(e.target.value)
  }

  return (
    <Wrapper>
      <Selection>
        <Current>{index}</Current>
        <Seperation> of </Seperation>
        <Total>{total}</Total>
      </Selection>
      <TextArea>
        <Text>{text}</Text>
      </TextArea>
      {sentimentStates.map(res => (
        <center key={res}>
          <div>
            <input type="radio" value={res} onChange={setval} checked={senti === res} name="radiovalues" />
            {res}
          </div>
        </center>
      ))}
      <FinishSection>
        <PreviousButton>Previous</PreviousButton>
        <CSVLink
          data={exportCsvData}
          onClick={finish_click}
        >
          <FinishButton>
            Finish
          </FinishButton>
        </CSVLink>
        <NextButton onClick={savePoint} total={total} index={index} >Next</NextButton>
      </FinishSection>
    </Wrapper >
  )
}

export default Annotator
