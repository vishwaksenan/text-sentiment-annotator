import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`

export const Selection = styled.div`
  display: block;
  margin: 10px auto;
  text-align: center;
`

export const Current = styled.p`
  display: inline;
  font-size: 25px;
`

export const Seperation = styled.p`
  display: inline;
  font-size: 20px;
  color: lightgray;
`

export const Total = styled.p`
  display: inline;
  font-size: 25px;
`

export const TextArea = styled.div`
  margin: 30px auto;
  height: 300px;
  width: 700px;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 20px;
`

export const Text = styled.p`
  font-size: 17px;
  margin: 0;
`

export const SentimentWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Sentiment = styled.button`
  margin: 20px;
  background-color: lightcoral;
  height: 60px;
  width: 140px;
  text-align: center;
  border: 2px solid red;
  &:hover{
    cursor: pointer;
  }
`

export const FinishSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NextButton = styled.button`
  margin: 20px;
  background-color: lightgray;
  height: 70px;
  width: 150px;
  text-align: center;
  border: 2px solid gray;
  visibility: ${(props) => (props.index) === (props.total) ? `hidden` : `visible`};
`

export const PreviousButton = styled.button`
  margin: 20px;
  background-color: lightgray;
  height: 70px;
  width: 150px;
  text-align: center;
  border: 2px solid gray;
  visibility: hidden;
`

export const FinishButton = styled.button`
  margin: 20px;
  background-color: lightgreen;
  height: 70px;
  width: 150px;
  text-align: center;
  border: 2px solid green;
`