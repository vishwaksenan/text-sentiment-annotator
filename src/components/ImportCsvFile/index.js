import React from 'react'
import { InputWrapper, InputDivision } from './ImportCsvFile'
import { CSVReader } from 'react-papaparse'
import { useHistory } from 'react-router'

const ImportCsvFile = () => {

  const history = useHistory()

  function handleFile(result) {
    var csvData = []
    for (let index = 1; index < result.length - 1; index++) {
      var record = {}
      record['Text'] = result[index].data[0]
      record['Sentiment'] = result[index].data[1]
      csvData.push(record)
    }
    history.push('/annotation', csvData)
  }

  return (
    <>
      <CSVReader
        onFileLoad={handleFile}
      >
        <InputDivision>
          <InputWrapper>
            <input type='file' accept='.csv' />
          </InputWrapper>
        </InputDivision>
      </CSVReader>
    </>
  )
}

export default ImportCsvFile
