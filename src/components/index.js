import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  MainContainer,
  ContentContainer,
  ScoreSection,
  ItemList,
  Item,
  UpdationContainer,
  ScoreText,
  ImagesList,
  ChoiceButton,
  EachImage,
  StylesButton,
  RulesView,
  ResponseContainer,
  SectionResult,
  PlayerElement,
  TextResult,
  PlayAgainButton,
  SpecificPlayer,
} from './styledComponents'

class GameZone extends Component {
  state = {
    opponentSelection: {},
    yourSelection: {},
    isShowOptions: true,
    result: '',
    score: 0,
  }

  componentDidMount() {
    const {choicesList} = this.props
    const opponentOption = choicesList[Math.floor(Math.random() * 3)]
    console.log(opponentOption)
    this.setState({opponentSelection: opponentOption})
  }

  renderResult = () => {
    const {opponentSelection, yourSelection} = this.state
    if (opponentSelection.id === yourSelection.id) {
      this.setState({isShowOptions: false, result: 'IT IS DRAW'})
    } else {
      if (yourSelection.id === 'ROCK') {
        if (opponentSelection.id === 'PAPER') {
          this.setState(prevState => ({
            isShowOptions: false,
            result: 'YOU LOSE',
            score: prevState.score - 1,
          }))
        } else if (opponentSelection.id === 'SCISSORS') {
          this.setState(prevState => ({
            isShowOptions: false,
            result: 'YOU WON',
            score: prevState.score + 1,
          }))
        }
      } else if (yourSelection.id === 'PAPER') {
        if (opponentSelection.id === 'SCISSORS') {
          this.setState(prevState => ({
            isShowOptions: false,
            result: 'YOU LOSE',
            score: prevState.score - 1,
          }))
        } else if (opponentSelection.id === 'ROCK') {
          this.setState(prevState => ({
            isShowOptions: false,
            result: 'YOU WON',
            score: prevState.score + 1,
          }))
        }
      } else if (yourSelection.id === 'SCISSORS') {
        if (opponentSelection.id === 'ROCK') {
          this.setState(prevState => ({
            isShowOptions: false,
            result: 'YOU LOSE',
            score: prevState.score - 1,
          }))
        } else if (opponentSelection.id === 'PAPER') {
          this.setState(prevState => ({
            isShowOptions: false,
            result: 'YOU WON',
            score: prevState.score + 1,
          }))
        }
      }
    }
  }

  renderYourSelection = option => {
    const temp = {option}
    console.log(temp)
    this.setState({yourSelection: option}, this.renderResult)
  }

  renderDefault = () => {
    this.setState(
      {isShowOptions: true, yourSelection: {}, opponentSelection: {}},
      this.componentDidMount,
    )
  }

  render() {
    const {choicesList} = this.props
    const {opponentSelection, yourSelection, isShowOptions, result, score} =
      this.state
    return (
      <MainContainer>
        <ContentContainer>
          <ScoreSection>
            <ItemList>
              <Item>
                ROCK <br />
                PAPER <br />
                SCISSORS
              </Item>
            </ItemList>
            <UpdationContainer>
              <p>Score</p>
              <ScoreText>{score}</ScoreText>
            </UpdationContainer>
          </ScoreSection>
          {isShowOptions && (
            <ImagesList>
              {choicesList.map(eachItem => (
                <ChoiceButton
                  type="button"
                  data-testid={`${eachItem.id.toLowerCase()}Button`}
                  key={eachItem.id}
                  onClick={() => this.renderYourSelection(eachItem)}
                >
                  <EachImage src={eachItem.imageUrl} alt={eachItem.id} />
                </ChoiceButton>
              ))}
            </ImagesList>
          )}
          {!isShowOptions && (
            <ResponseContainer>
              <SectionResult>
                <PlayerElement>
                  <SpecificPlayer>YOU</SpecificPlayer>
                  <EachImage src={yourSelection.imageUrl} alt="your choice" />
                </PlayerElement>
                <PlayerElement>
                  <SpecificPlayer>OPPONENT</SpecificPlayer>
                  <EachImage
                    src={opponentSelection.imageUrl}
                    alt="opponent choice"
                  />
                </PlayerElement>
              </SectionResult>
              <TextResult>{result}</TextResult>
              <PlayAgainButton type="button" onClick={this.renderDefault}>
                PLAY AGAIN
              </PlayAgainButton>
            </ResponseContainer>
          )}
        </ContentContainer>
        <Popup modal trigger={<StylesButton>RULES</StylesButton>}>
          {close => (
            <RulesView>
              <button type="button" onClick={() => close()}>
                <RiCloseLine />
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </RulesView>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default GameZone
